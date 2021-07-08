import { Link } from "react-router-dom";
import "../App.css";
import "../Styles/Videos.css";

const Videos = (props) => {
	const {
		videos,
		hasSearched,
		handleInput,
		handleMaxInput,
		handleSubmit,
		input,
		max,
	} = props;

	let videoList;
	if (hasSearched) {
		if (videos.length) {
			videoList = (
				<ul className="video-list">
					{videos.map((video) => {
						console.log(video.snippet.thumbnails.medium.url);
						return (
							<Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
								<li className="single-video">
									<img src={video.snippet.thumbnails.medium.url} alt="video" />
									<h4>{video.snippet.title}</h4>
								</li>
							</Link>
						);
					})}
				</ul>
			);
		} else {
			videoList = <div className="no-video">Video not found</div>;
		}
	} else {
		videoList = <h1 className="welcome">Welcome to our Youtube App!</h1>;
	}

	return (
		<section className="videos-container">
			<div className="search-bar">
				<form onSubmit={handleSubmit}>
					<input
						className="search-input"
						onChange={handleInput}
						type="text"
						placeholder="Search..."
						value={input}
						name="input"
					/>
					<input
						className="max-input"
						type="number"
						max="24"
						min="4"
						onChange={handleMaxInput}
						value={max}
						name="max"
						placeholder="12"
					/>
					<button type="submit">Search</button>
				</form>
			</div>
			{videoList}
		</section>
	);
};

export default Videos;
