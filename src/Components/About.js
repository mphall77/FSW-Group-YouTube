import "../Styles/About.css";
import Kenia from "../Images/KeniaR.jpg";
import Coreen from "../Images/CoreenC.png";
import Marsha from "../Images/MarshaH.jpg";

const projectDescription =
	"React based video streaming application using the YouTube API to source content. Layout styled using a combination of Flexbox and Grid.";

const teammates = [
	{
		name: "Kenia",
		gitHub: "https://github.com/kenia-r",
		bio: "Mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque",
		image: Kenia,
	},

	{
		name: "Marsha",
		gitHub: "https://github.com/mphall77",
		bio: "Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis.",
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
									<a href={teammate.gitHub} target="_blank" rel="noreferrer">
										<h3 className="teammate-name">{teammate.name}</h3>
									</a>

									<p>{teammate.bio}</p>
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
