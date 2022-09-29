import { useState, useEffect, useReducer} from 'react'
import './App.scss'
import commentsData from './data.json'
import Comments from './components/Comments.jsx'
import AddComment from './components/AddComment.jsx'
import Dialog from './components/Dialog.jsx'
function getTarget(comments, action){
  var target
  var commentTarget = comments.find(comment => comment.id === action.commentID);
  if(action.commentType === "reply")
    target = commentTarget.replies.find(reply => reply.id === action.replyID)
  else
    target = commentTarget
      
  return target;
}
function commentsReducer(prevState,action){
  switch(action.type){
    case 'ADD':
      return [
        ...prevState,
        {
          id:prevState[prevState.length - 1].id +1,
          content:action.text,
          createdAt:"Now",
          score:0,
          upvoteStatus:0,
          user:commentsData.currentUser,
          replies:[]
        }]
    case "UPVOTE":
      var modState = [...prevState]
      var target = getTarget(modState, action);
      if(target.upvoteStatus === 1 ){
        target.score -=1;
        target.upvoteStatus = 0;
      } else{
        target.score += 1-target.upvoteStatus;
        target.upvoteStatus = 1;
      }
      return modState;
    case "DOWNVOTE":
      var modState = [...prevState]
      var target = getTarget(modState, action);
      if(target.upvoteStatus === -1 ){
        target.score += 1;
        target.upvoteStatus = 0;
      }else{
        target.score -= target.upvoteStatus+1;
        target.upvoteStatus = -1;
      }
      return modState;
    case 'DELETE':
      if(action.commentType === "comment"){
        var newArray = prevState.filter(comment => comment.id != action.commentID)
      }else{
        var newArray = [...prevState]
        var commentTarget = newArray.find(comment => comment.id === action.commentID);
        var repliesMod = commentTarget.replies.filter(reply => reply.id != action.replyID);
        commentTarget.replies = repliesMod;
      }
      return newArray
  }
}
function App() {
  // check webp support (a better way)
  var prevImageType = localStorage.getItem('imageType');
  const [imageType, setImageType] = useState(prevImageType ? prevImageType :"png");
  useEffect(() => {
    if(!prevImageType){
      (function() {
        var img = new Image();
        img.onload = function() {
          var hasWebp = !!(img.height > 0 && img.width > 0);
          if(hasWebp){
            setImageType("webp");
            localStorage.setItem("imageType","webp");
          }
        };
        img.onerror = function() {
          setImageType("png");
          localStorage.setItem("imageType","png");
        };
        img.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
      })();
    }
  }, []);
  // start the actual app
  const [commentsState,dispatchComments] = useReducer(commentsReducer, commentsData.comments)
  const [comments, setComments] = useState(commentsData.comments);
  const [currentUser, setCurrentUser] = useState(commentsData.currentUser);
  const [deletedComment, setDeletedComment] = useState(false);
  function addCommentHandlar(e){
    console.log(e);
    dispatchComments({
      type:"ADD",
      text:e.text
    })
  }
  function commentDeleteHandlar(e){
    setDeletedComment(e);
  }
  return (
    <div className="App">
      <Dialog dispatchComments={dispatchComments} deletedComment={deletedComment} deleteHandlar={commentDeleteHandlar}></Dialog>
      <Comments deleteHandlar={commentDeleteHandlar} comments={commentsState} commentHandlar={dispatchComments} currentUser={currentUser} imageType={imageType}></Comments>
      <AddComment submitHandlar={addCommentHandlar} currentUser={currentUser} imageType={imageType}/>
    </div>
  )
}

export default App
