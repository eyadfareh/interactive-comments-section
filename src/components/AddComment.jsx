export default function AddComment(props){
  function formSubmitHandlar(e){
    e.preventDefault();
  }
  function inputHandlar(e){
    console.log(e); 
  }
  return (
    <form className="add-comment" onSubmit={formSubmitHandlar} action="">
      <img src={props.image} width="20" alt="Your profile image" />
      <textarea onInput={inputHandlar} name="comment"></textarea>
      <button type="submit">Send</button>
    </form>
  )
}