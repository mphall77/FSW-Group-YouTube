import Kenia from "../Images/KeniaR.jpg";
import Coreen from "../Images/CoreenC.png";
import Marsha from "../Images/MarshaH.jpg";
import gitLogo from "../Images/GitHub-Light-logo.png";

import "../Styles/About.css";

const projectDescription =
	"As a team we have created a video streaming application using the YouTube API to source content. For optimization we have used React Hooks as well as a few other React features to implement cleaner code. The layout is styled using a combination of Flexbox and Grid.";

const teammates = [
	{
		name: "Kenia",
		gitHub: "https://github.com/kenia-r",
		bio: "My passion lies in building community and being part of helping to provide a safe space for individuals to experience joy, and to share and bond over common interests.",
		image: Kenia,
	},

	{
		name: "Marsha",
		gitHub: "https://github.com/mphall77",
		bio: "A Full Stack Web Developer coming home to the world of Code. Pursuit has given me the opportunity to follow the path not taken.My goal is to redesign the future of cities and buildings through code creating a better world for future generations to thrive and prosper.",
		image: Marsha,
	},

	{
		name: "Coreen",
		gitHub: "https://github.com/CoreenCooper",
		bio: "Client-focused software developer who is community-minded and has a passion for developing applications to improve user accessibility.",
		image: Coreen,
	},
];

const About = () => {
	return (
		<section className="about-container">
			<section id="ProjectDescription">
				<h2>Project Description</h2>

				<p>{projectDescription}</p>
			</section>

			<hr />
			<div className="break"></div>

			<section>
				<h2 id="teamTitle">Meet the Team 👋🏼 👋🏽 👋🏾</h2>

				<section className="teammates">
					<ul id="TeamDescriptions">
						{teammates.map((teammate) => {
							return (
								<li key={teammate.name}>
									<img src={teammate.image} alt="profile" className="profile" />
									<h3 className="teammate-name">{teammate.name}</h3>
									<p className="bio">{teammate.bio}</p>
									<a href={teammate.gitHub} target="_blank" rel="noreferrer">
										<img className="gitLogo" src={gitLogo} alt="Github logo" />
									</a>
								</li>
							);
						})}
					</ul>
				</section>
			</section>
		</section>
	);
};

export default About;
