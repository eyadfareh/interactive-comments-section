import Comment from "./Comment.jsx"
export default function Comments(props){
  return (
    <div className="comments">
      {props.comments.map(comment => (
        <Comment
          key={comment.id}
          commentID={comment.id}
          username={comment.user.username}
          createdAt={comment.createdAt}
          score={comment.score}
          upvoteStatus={comment.upvoteStatus}
          imageType={props.imageType}
          currentUser={comment.user.username === props.currentUser.username}
          image={comment.user.image}
          commentHandlar={props.commentHandlar}
          content={comment.content}
          commentType="comment"
        >
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              commentID={comment.id}
              replyID={reply.id}
              username={reply.user.username}
              commentType="reply"
              createdAt={reply.createdAt}
              score={reply.score}
              upvoteStatus={reply.upvoteStatus}
              imageType={props.imageType}
              commentHandlar={props.commentHandlar}
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
