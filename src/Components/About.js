import "./About.css";
const descriptions = {
  Projct:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  Kenia:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin ac orci. Quis vel eros donec ac odio tempor orci. Sem nulla pharetra diam sit. Curabitur vitae nunc sed velit dignissim.",
  Marsha:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Eget aliquet nibh praesent tristique magna sit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Leo vel fringilla est ullamcorper.",
  Coreen:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius. Cum sociis natoque penatibus et magnis dis parturient. Quis risus sed vulputate odio ut enim blandit volutpat. At urna condimentum mattis pellentesque id nibh tortor id.",
};

const About = () => {
  return (
    <section id="About">
      <section id="ProductDescription">
        <h2>Project Description</h2>
        <p>{descriptions.Kenia}</p>
      </section>

      <div className="break"></div>

      <section>
        <h2 id="teamTitle">Meet the Team</h2>
        <section id="TeamDescriptions">
          <section id="leftTeam">
            <h3>Kenia</h3>
            <p>{descriptions.Kenia}</p>
          </section>

          <div className="verticalBreak"></div>

          <section id="rightTeam">
            <h3>Marsha</h3>
            <p>{descriptions.Marsha}</p>
          </section>

          <div className="verticalBreak"></div>

          <section id="middleTeam">
            <h3>Coreen</h3>
            <p>{descriptions.Coreen}</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;