const CommentsList = ({ comments }) => (
    <>
    <h3>Comments: </h3>
    {comments.map(comment => (
        <div className="comment" key={Math.ceil(Math.random() * 10000000000000000000000000000)}>
            <h4>{comment.postedBy} </h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default CommentsList;