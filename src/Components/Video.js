import { useParams, useHistory } from "react-router-dom";
import Comments from "./Comments";
import "../Styles/Video.css";

const Video = () => {
	const { id } = useParams();
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};

	return (
		<section className="video-container">
			<div>
				<button onClick={goBack} className="back-btn">
					Go Back
				</button>
			</div>
			<div>
				<iframe
					className="single-video"
					src={`https://www.youtube.com/embed/${id}`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="embedded video"
				/>
				<Comments />
			</div>
		</section>
	);
};

export default Video;
