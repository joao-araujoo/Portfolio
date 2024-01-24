import PropTypes from "prop-types";

MusicIframe.propTypes = {
  MusicId: PropTypes.string.isRequired,
};

export default function MusicIframe({ MusicId, ...props }) {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/track/${MusicId}?utm_source=generator`}
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      {...props}
    ></iframe>
  );
}
