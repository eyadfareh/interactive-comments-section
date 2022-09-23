import { useState } from 'react'
import './App.scss'
import commentsData from './data.json'
import Comments from './components/Comments.jsx'
function App() {
  const [comments, setComments] = useState(commentsData);
  // check webp support (a bad way)
  const [imageType, setImageType] = useState("png");
  (function() {
    var img = new Image();
    img.onload = function() {
      var hasWebp = !!(img.height > 0 && img.width > 0);
      if(hasWebp)
        setImageType("webp");
      
    };
    img.onerror = function() {
      setImageType("png");
    };
    img.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';
  })();

  return (
    <div className="App">
      <Comments data={comments} imageType={imageType}></Comments>
    </div>
  )
}

export default App
