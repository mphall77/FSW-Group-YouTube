import { useParams, useHistory } from "react-router-dom";
import "../Styles/Video.css";

const Video = () => {
  // if you want to know what's in the object do not deconstruct
  const { goBack } = useHistory();
  const { id } = useParams();

  return (
    <section>
      <button onClick={goBack} className="back-button">&#10094;</button>
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
