import { useState } from "react";

const Comments = () => {
	const [name, setName, comment, setComment] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleCommentChange = (e) => {
		setComment(e.target.value);
	};

	return (
		<section>
			<input value={name} onChange={handleNameChange} placeholder="Your Name" />
			<input
				value={comment}
				onChange={handleCommentChange}
				placeholder="Comment"
			/>
			<h5 className="comments">{name}</h5>
			<p className="comments">{comment}</p>
		</section>
	);
};

export default Comments;
