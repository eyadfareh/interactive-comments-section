export default function Comment(props){
  let commentBody = (
      <div className="comment">
        <div className="upvotes">
          <button>
            <img src="/images/icon-plus.svg" alt="Upvote button" />
          </button>
          <span>{props.score}</span>        
          <button>
            <img src="/images/icon-minus.svg" alt="Downvote button" />
          </button>
        </div>
        <div>
          <div>
            <div>
              <img src={`/images/avatars/image-maxblagun.${props.imageType}`} alt="Max Blagun" />
              <span>{props.username}</span>
              <span>{props.createdAt}</span>
            </div>
            <div>
              <button>replay</button>
            </div>
          </div>
          <div>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
  )
  return (
    <div className="comment-container"> 
      {comment}
      <div className="replies">
        {props.children}
      </div>
    </div>
  )
}
