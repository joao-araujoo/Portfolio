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
    default: { x: position.x - 15, y: position.y - 15 },
    text: {
      height: 150,
      width: 150,
      x: position.x - 75,
      y: position.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      border: "none",
    },
    hover: {
      height: 16,
      width: 16,
      x: position.x - 8,
      y: position.y - 8,
      transition: "100ms all ease-in-out",
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
