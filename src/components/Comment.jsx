import { useState } from "react";
import AddComment from "./AddComment"
export default function Comment(props){
  const [addCommentOpened, setAddCommentOpened] = useState(false)
  function upvoteHandlar(e){
    props.commentHandlar({
      type:"UPVOTE",
      commentType:props.commentType,
      commentID:props.commentID,
      replyID:props.replyID ? props.replyID : null 
    });
  }
  function downvoteHandlar(e){
    props.commentHandlar({
      type:"DOWNVOTE",
      commentType:props.commentType,
      commentID:props.commentID,
      replyID:props.replyID ? props.replyID : null 
    })
  }
  function deleteHandlar(e){
    props.deleteHandlar({
      commentType:props.commentType,
      commentID:props.commentID,
      replyID:props.replyID ? props.replyID : null 
    })
  }
  function replyHandlar(e){
    setAddCommentOpened(prevState => {
      console.log(prevState)
      return !prevState;
    })
  }
  let commentBody = (
      <div className="comment">
        <div className="upvotes">
          <div>
            <button onClick={upvoteHandlar}>
              <img src="/images/icon-plus.svg" alt="Upvote button" />
            </button>
            <span>{props.score}</span>
            <button onClick={downvoteHandlar}>
              <img src="/images/icon-minus.svg" alt="Downvote button" />
            </button>
          </div>
        </div>
        <div className="comment-body">
          <div className="comment-header">
            <div>
              <img src={props.image[props.imageType]} width="30" alt="Max Blagun" />
              <span className="username">{props.username}</span>
              {props.isCurrentUser ? (
                <span className="you">you</span>
              ):""}
              <span className="date">{props.createdAt}</span>
            </div>
            <div>
              {props.isCurrentUser ? (
                <>
                  <button onClick={deleteHandlar} className="delete">
                    <img src="/images/icon-delete.svg" width="15" alt="Reply icon" />
                    Delete
                  </button>
                  <button>
                    <img src="/images/icon-edit.svg" width="15" alt="Reply icon" />
                    Edit
                  </button>
                </>
              ) : (
                <button onClick={replyHandlar}>
                  <img src="/images/icon-reply.svg" width="15" alt="Reply icon" />
                  Reply
                </button>
              )}
            </div>
          </div>
          <div className="comment-content">
            <p>
              {props.replyingTo ? (
                <span className="tag">@{props.replyingTo} </span>
              ) : ""}
              {props.content}
            </p>
          </div>
        </div>
      </div>
  )
  if(props.commentType == "comment"){
    return (
      <div className="comment-container"> 
        {commentBody}
          <div className="replies-container">
            <div className="line-container">
              <div className="line"></div>
            </div>
            <div className="replies">
              {addCommentOpened ? (
                <AddComment submitHandlar={props.addCommentHandlar} currentUser={props.currentUser} imageType={props.imageType} />
              ):""}
              {props.children}
            </div>
          </div>
      </div>
    )
  }else if(props.commentType == "reply"){
    return commentBody;
  }
}
