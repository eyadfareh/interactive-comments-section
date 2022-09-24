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
          currentUser={comment.user.username === props.currentUser.username}
          image={comment.user.image}
          content={comment.content}
          commentType="comment"
        >
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              username={reply.user.username}
              commentType="reply"
              createdAt={reply.createdAt}
              score={reply.score}
              imageType={props.imageType}
              replyingTo={reply.replyingTo}
              currentUser={reply.user.username === props.currentUser.username}
              image={reply.user.image}
              content={reply.content}
            ></Comment>
          ))}
        </Comment>
      ))}
    </div>
  )
}
