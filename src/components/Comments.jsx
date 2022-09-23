import Comment from "./Comment.jsx"
export default function Comments(props){
  return (
    <div className="comments">
      <Comment
        username="johndoe"
        createAt="5 Days ago"
        score={12}
        imageType={props.imageType}
        content="Amet nobis eaque corporis corrupti itaque Esse aliquid asperiores iste cum a aut quia Maxime ratione quo consequuntur voluptatum accusamus dicta! Quidem impedit error repudiandae nulla iusto. Corrupti quam ducimus"
      ></Comment>
    </div>
  )
}
