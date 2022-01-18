import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./cool-gallery.css";
import Title from "./Title";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [submit, setSubmit] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(1);
    // var submit = true;
  };

  return (
    <div>
      <Title />

      <form className="form" onSubmit={handleSubmit}>
        <div className="col container">
          <div className="form-group row container">
            <label for="inputCategory3" className="col-sm-3 col-form-label">
              <b className="h5"> LncRNA Name:</b>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="LncRNA Name"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row container mt-2">
            <label for="inputCategory3" className="col-sm-3 col-form-label">
              <b className="h5">Choose a plot:</b>
            </label>
            <div className="col-sm-2 mt-2">
              <input type="file" onChange={handleChange} />
            </div>
            <div className="col-sm-6 pr-5">
              <div className="output">
                {error && <div className="error">{error}</div>}
                {submit && file && (
                  <ProgressBar
                    file={file}
                    setFile={setFile}
                    category={category}
                    setCategory={setCategory}
                    setSubmit={setSubmit}
                  />
                )}
              </div>
            </div>
            <div className="col-sm-1">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ float: "right" }}
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
// {file && <div>{file.name}</div>}
