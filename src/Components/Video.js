import { useParams } from "react-router-dom";
const Video = () => {
 const { id } = useParams();

  return (
    
    <section>
      <iframe
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