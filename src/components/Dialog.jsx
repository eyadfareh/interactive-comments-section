import ReactDOM from "react-dom"
export default function Dialog(props){
  function cancelHandlar(e){
    props.deleteHandlar(false)
  }
  function deleteHandlar(e){
    props.dispatchComments({
      type:"DELETE",
      ...props.deletedComment
    })
    props.deleteHandlar(false)
  }
  const dialogContent = (
    <div className="dialog-container">
      <div className="dialog-overlay"></div>
      <div className="dialog">
        <div className="dialog-header">
          <h2>Delete comment</h2>
        </div>
        <div className="dialog-body">
          <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        </div>
        <div className="dialog-footer">
          <button className="cancel" onClick={cancelHandlar}>No, cancel</button>
          <button className="delete" onClick={deleteHandlar}>Yes, delete</button>
        </div>
      </div>
    </div>
  );
  if(props.deletedComment)
    return ReactDOM.createPortal(dialogContent, document.getElementById("dialog-container"))
  else
    return <></>;

}