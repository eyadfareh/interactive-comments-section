import {useEffect, useState, useRef} from 'react'
export default function AddUser(props){
  const [commentData, setCommentData] = useState(""); 
  const textareaRef = useRef();
  const [lastScrollHeight,setLastScrollHeight] = useState(100); 
  useEffect(() => {
    setLastScrollHeight(textareaRef.current.scrollHeight);
  },[]);
  useEffect(() => {
    var textarea = textareaRef.current
    var rows = parseInt(textarea.getAttribute("rows"));
    textarea.setAttribute("rows", "1");

    if (textarea.scrollHeight > lastScrollHeight) {
        rows++;
    } else if (rows > 1 && textarea.scrollHeight < lastScrollHeight) {
        rows--;
    }
    setLastScrollHeight(textarea.scrollHeight);
    textarea.setAttribute("rows", rows);
  }, [commentData])
  function formSubmitHandlar(e){
    e.preventDefault();
    props.submitHandlar({
      text:textareaRef.current.value,
    });
    textareaRef.current.value = "";
  } 
  function inputHandlar(e){
    setCommentData(e.target.value);
  }
  return (
    <form className="add-comment" onSubmit={formSubmitHandlar} action="">
      <img width="40" src={props.currentUser.image[props.imageType]} alt="your profile picture" />
      <textarea
        type="text"
        onChange={inputHandlar} 
        placeholder="Add a comment..."
        rows="1"
        ref={textareaRef}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}
