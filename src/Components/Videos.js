import { useState, useEffect } from "react";
import axios from "axios";

const Videos = () => {
	// declare useState
	const [videos, setVideos, selectedVideo, setSelectedVideo] = useState([]);

	// function to call API
	const fetchVideos = async () => {
		try {
			const res = await axios.get(
				`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&key=${process.env.REACT_APP_API_KEY}`
			);
			setVideos(res.data.items);
		} catch (err) {
			setVideos([]);
		}
	};

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

	// call the API function --> add input to update screen onChange
	useEffect(() => {
		fetchVideos();
	}, []);

	return (
		<section>
			<ul>
				{videos.map((video) => {
					return (
						// onClick pass the video's id to the selectedVideo function
						// {video.id.videoId}
						<li key={video.id}>
							<img src={video.snippet.thumbnails.medium.url} alt="video" />
							<h4>{video.snippet.title}</h4>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Videos;

// Notes
// const res = await axios.get(
//     `https://youtube.googleapis.com/youtube/v3',
//     params:{part: 'snippet',
//     maxResults:5,
//     q:'input',
//     key:${process.env.REACT_APP_API_KEY}
// }
// );
