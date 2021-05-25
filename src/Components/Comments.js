import React, { useState } from "react";
import "../Styles/Comments.css";

const Comments = () => {
	const [inputValues, setInputValues] = useState({
		userName: "",
		userComment: "",
	});
	const [commentArray, setCommentArray] = useState([]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setCommentArray([...commentArray, inputValues]);
		console.log(commentArray);
		setInputValues({ userName: "", userComment: "" });
	};

	return (
		<section className="user-comments">
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="userName"
						value={inputValues.userName}
						onChange={handleInputChange}
						placeholder="Your Name"
					/>
				</label>

				<textarea
					type="text"
					name="userComment"
					value={inputValues.userComment}
					onChange={handleInputChange}
					placeholder="Your Comment"
					rows="4"
					cols="30"
				/>

				<button type="submit" className="submit-btn">
					Submit
				</button>
			</form>

			<ul className="comment-list">
				{commentArray.map((comments) => {
					return (
						<li key={comments.name}>
							<strong>{comments.userName}:</strong> {comments.userComment}
						</li>
					);
				})}
			</ul>
		</section>
	);
};
export default Comments;
