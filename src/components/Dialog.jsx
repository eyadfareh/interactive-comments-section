import ReactDOM from "react-dom"
export default function Dialog(props){
  const dialogContent = (
    <>
      <div className="dialog-overlay"></div>
      <div className="dialog">
        <div className="dialog-header">
          <h2>Delete comment</h2>
        </div>
        <div className="dialog-body">
          <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        </div>
        <div className="dialog-footer">
          <button className="cancel">No, cancel</button>
          <button className="delete">Yes, delete</button>
        </div>
      </div>
    </>
  );
  if(props.hidden)
    return <></>;
  else
    return ReactDOM.createPortal(dialogContent, document.getElementById("dialog-container"))
}