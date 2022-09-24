export default function Comment(props){
  let commentBody = (
      <div className="comment">
        <div className="upvotes">
          <div>
            <button>
              <img src="/images/icon-plus.svg" alt="Upvote button" />
            </button>
            <span>{props.score}</span>
            <button>
              <img src="/images/icon-minus.svg" alt="Downvote button" />
            </button>
          </div>
        </div>
        <div className="comment-body">
          <div className="comment-header">
            <div>
              <img src={`/images/avatars/image-maxblagun.${props.imageType}`} width="30" alt="Max Blagun" />
              <span>{props.username}</span>
              <span>{props.createdAt}</span>
            </div>
            <div>
              <button>
                <img src="/images/icon-reply.svg" width="15" alt="Reply icon" />
                Reply
              </button>
            </div>
          </div>
          <div className="comment-content">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
  )
  return (
    <div className="comment-container"> 
      {commentBody}
      <div className="replies">
        {props.children}
      </div>
    </div>
  )
}
