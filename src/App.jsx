import { useState } from 'react'
import './App.scss'
import commentsData from './data.json'
import Comments from './components/Comments.jsx'
import AddComment from './components/AddComment'
function App() {
  // check webp support (a better way)
  const localStorageImageType = localStorage.getItem("imageType");
  const [imageType, setImageType] = useState(localStorageImageType ? localStorageImageType : "png");
  if(!localStorageImageType){
    (function() {
      var img = new Image();
      img.onload = function() {
        var hasWebp = !!(img.height > 0 && img.width > 0);
        if(hasWebp)
          setImageType("webp");
          localStorage.setItem("imageType","webp");
      };
      img.onerror = function() {
        setImageType("png");
        localStorage.setItem("imageType","png");
      };
      img.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
    })();
  }

  const [comments, setComments] = useState(commentsData);
  return (
    <div className="App">
      <Comments comments={comments.comments} currentUser={comments.currentUser} imageType={imageType}></Comments>
      <AddComment image={comments.currentUser.image[imageType]}></AddComment>
    </div>
  )
}

export default App
