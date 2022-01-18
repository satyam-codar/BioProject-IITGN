import React, { useEffect } from "react";
import useStorage from "./hooks/useStorage";
import { motion } from "framer-motion";
import "./cool-gallery.css";

const ProgressBar = ({ file, setFile, category, setCategory, setSubmit }) => {
  // console.log(file, category);
  const { progress, url } = useStorage(file, category);
  var percentage = Math.floor(progress);
  // console.log(progress, url);
  useEffect(() => {
    if (url) {
      setFile(null);
      setCategory("");
      setSubmit(null);
    }
  }, [url, setFile, setCategory, setSubmit]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    >
      <p style={{ paddingTop: "17px" }}>{percentage} %</p>
    </motion.div>
  );
};

export default ProgressBar;
