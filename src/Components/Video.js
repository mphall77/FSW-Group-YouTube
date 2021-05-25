import { useParams, useHistory } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <section className="video-container">
      <button onClick={goBack}>Go Back</button>
      <iframe
        className="single-video"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="embedded video"
      />
    </section>
  );
};

export default Video;
