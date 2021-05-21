import { useState, useEffect } from "react";
import axios from "axios";

const Videos = () => {
	// declare useState
	const [videos, setVideos] = useState([]);

	// function to call API
	const fetchVideos = async () => {
		try {
			const res = await axios.get(
				// `https://youtube.googleapis.com/youtube/v3/videos?&maxResults=8key=${process.env.REACT_APP_API_KEY}`
				// `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20contentDetails&chart=mostPopular&maxResults=8&key=${process.env.REACT_APP_API_KEY}`
				`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&key=${process.env.REACT_APP_API_KEY}`
			);
			setVideos(res.data.items);
			debugger;
		} catch (err) {
			alert("Something went wrong. Please try again.");
			setVideos([]);
		}
	};

	// call the API function --> add input to update screen onChange
	useEffect(() => {
		fetchVideos();
	}, []);

	return (
		<section>
			<ul className="VideoList">
				{videos.map((video) => {
					return (
						<div className="Item">
							<li key={video.id} className="VideoLi">
								<iframe
									src={`https://www.youtube.com/embed/${video.id}`}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="embedded video"
								/>
							</li>
							<div className="Title">
								<h4>{video.snippet.title}</h4>
							</div>
						</div>
					);
				})}
			</ul>
		</section>
	);
};

export default Videos;

// Notes
// https://console.cloud.google.com/apis/api/youtube.googleapis.com/overview?project=g3-youtube-clone
// const res = await axios.get(
//     `https://youtube.googleapis.com/youtube/v3',
//     params:{part: 'snippet',
//     maxResults:5,
//     q:'input',
//     key:${process.env.REACT_APP_API_KEY}
// }
// );

// const selectedVideo = async (e) => {
// 	// verify e.target.value
// 	id = e.target.value;
// 	// <iframe />
// 	// {video.id.videoId}
// 	try {
// 		const res = await axios.get(
// 			`https://youtube.googleapis.com/youtube/v3/id&key=${process.env.REACT_APP_API_KEY}`
// 		);
// 		// debugger;
// 		setSelectedVideo(res.data);
// 	} catch (err) {
// 		setSelectedVideo([]);
// 	}
// };
