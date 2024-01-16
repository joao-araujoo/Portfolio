import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

Cursor.propTypes = {
  cursorVariant: PropTypes.string.isRequired,
};

export default function Cursor({ cursorVariant }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log(e);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: { x: position.x - 12, y: position.y - 12 },
    text: {
      height: 100,
      width: 100,
      x: position.x - 50,
      y: position.y - 50,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      border: "none",
    },
    hover: {
      height: 14,
      width: 14,
      x: position.x - 7,
      y: position.y - 7,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "2px solid #fff",
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
}
