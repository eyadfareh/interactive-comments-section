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
          isCurrentUser={comment.user.username === props.currentUser.username}
          currentUser={props.currentUser}
          image={comment.user.image}
          deleteHandlar={props.deleteHandlar}
          addCommentHandlar={props.addCommentHandlar}
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
              addCommentHandlar={props.addCommentHandlar}
              imageType={props.imageType}
              commentHandlar={props.commentHandlar}
              deleteHandlar={props.deleteHandlar}
              replyingTo={reply.replyingTo}
              currentUser={props.currentUser}
              isCurrentUser={reply.user.username === props.currentUser.username}
              image={reply.user.image}
              content={reply.content}
            ></Comment>
          ))}
        </Comment>
      ))}
    </div>
  )
}
