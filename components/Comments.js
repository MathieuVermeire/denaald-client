const Comments = ({ comments }) => {
	return (
		<ul>
			{comments.map((comment, index) => (
				<li key={index}>
					<div>{comment.name}</div>
					<div>{comment.content}</div>
				</li>
			))}
		</ul>
	 );
}

export default Comments;
