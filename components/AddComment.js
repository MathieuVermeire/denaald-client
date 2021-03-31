const AddComment = ({ comments, addComment, data }) => {

	const handleSubmit = e => {
		e.preventDefault();
		const data = {
			name: e.target.name.value,
			content: e.target.content.value,
		}
		addComment(data);
		e.target.reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Name
				<input name='name' type='text'></input>
			</label>
			<label>Comment
				<textarea name='content'></textarea>
			</label>
			<button type='send'>Submit</button>
		</form>
	 );
}

export default AddComment;
