import PropTypes from "prop-types";

MoviePoster.propTypes = {
  poster: PropTypes.string,
  alt: PropTypes.string,
};

export default function MoviePoster({ poster, alt }) {
  return (
    <img
      src={poster}
      alt={alt}
      width={200}
      style={{ border: "1px solid #000" }}
    />
  );
}
