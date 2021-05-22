const Video = ({input}) => {

  return (
    
    <section>
      <h1>Video Page</h1>
      <iframe
        src={`https://www.youtube.com/embed/${input}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="embedded video"
      />
    </section>
  );
};

export default Video;