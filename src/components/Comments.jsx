import Comment from "./Comment.jsx"
export default function Comments(props){
  return (
    <div className="comments">
      {props.comments.map(comment => (
        <Comment
          key={comment.id}
          username={comment.user.username}
          createdAt={comment.createdAt}
          score={comment.score}
          imageType={props.imageType}
          content={comment.content}
        ></Comment>
      ))}
    </div>
  )
}
