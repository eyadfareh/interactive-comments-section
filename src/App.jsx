import { useState, useEffect} from 'react'
import './App.scss'
import commentsData from './data.json'
import Comments from './components/Comments.jsx'
import AddComment from './components/AddComment.jsx'
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
  const [comments, setComments] = useState(commentsData);
  return (
    <div className="App">
      <Comments comments={comments.comments} currentUser={comments.currentUser} imageType={imageType}></Comments>
      <AddComment currentUser={comments.currentUser} imageType={imageType}/>
    </div>
  )
}

export default App
