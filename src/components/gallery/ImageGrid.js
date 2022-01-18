import React from "react";
import useFirestore from "./hooks/useFirestore";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./cool-gallery.css";
import LazyLoad from "react-lazyload";
import { projectFirestore } from "./firebase/config";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  const [items, setItems] = useState(docs);
  const [catItems, setCatItems] = useState(null);
  const [catNameAfterDelete, setCatNameAfterDelete] = useState("all");

  useEffect(() => {
    if (docs) {
      const allCatValue = [
        "all",
        ...new Set(docs.map((categoryName) => categoryName.category)),
      ];
      const index = allCatValue.indexOf("");
      if (index > -1) {
        allCatValue.splice(index, 1);
      }
      setCatItems(allCatValue);
      if (allCatValue.includes(catNameAfterDelete)) {
        // }
        if (catNameAfterDelete === "all") {
          setItems(docs);
          return;
        }
        const updatedItems = docs.filter((categoryName) => {
          return categoryName.category === catNameAfterDelete;
        });
        setItems(updatedItems);
      } else {
        setItems(docs);
      }
    }
  }, [docs, setCatItems, setItems]);

  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(docs);
      return;
    }
    const updatedItems = docs.filter((categoryName) => {
      return categoryName.category === categItem;
    });
    setItems(updatedItems);
  };
  // console.log("items", items);

  const deletePhoto = (event) => {
    let img = event.target.name;
    let index = img.indexOf(",");
    let doc_id = img.slice(0, index);
    let catName = img.slice(index + 1);
    setCatNameAfterDelete(catName);
    const collectionRef = projectFirestore.collection("images");
    collectionRef
      .doc(doc_id)
      .delete()
      .then(() => {
        console.log(catName);
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className="container">
      {/* <div className="gallerywhole">
        <div className="container-fluid">
          <div className="button_group">
            {catItems &&
              catItems.map((categoryName) => {
                return (
                  <button
                    key={categoryName.index}
                    onClick={() => filterItem(categoryName)}
                  >
                    {categoryName}
                  </button>
                );
              })}
          </div>
        </div>
      </div> */}
      <div className="img-grid">
        {items &&
          items.map((doc) => (
            <div>
              <motion.div
                className="img-wrap"
                key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                s
                onClick={() => setSelectedImg(doc.url)}
              >
                <LazyLoad
                  once={true}
                  key={doc.id}
                  height={100}
                  offset={[-60, 100]}
                  placeholder={<Spinner />}
                >
                  <motion.img
                    src={doc.url}
                    alt="uploaded pic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  />
                </LazyLoad>
              </motion.div>
              <div className="mt-1">
                <button
                  type="button"
                  name={[doc.id, doc.category]}
                  cat={doc.category}
                  className="btn btn-danger"
                  style={{ float: "right" }}
                  onClick={deletePhoto}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const Spinner = () => (
  <div className="post loading">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

export default ImageGrid;
