import Videos from "./Videos";

const Home = (props) => {
  const {
    videos,
    hasSearched,
    handleInput,
    handleMaxInput,
    handleSubmit,
    input,
    max,
  } = props;

  return (
    <section className="home-container">
      <Videos
        input={input}
        max={max}
        videos={videos}
        hasSearched={hasSearched}
        handleInput={handleInput}
        handleMaxInput={handleMaxInput}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};

export default Home;
