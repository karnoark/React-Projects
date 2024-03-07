import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import { listOfList } from "./assets/cards-list";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Set showModal to true when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  const closeModal = () => {
    setShowModal(false);
  };

  function Modal({ onClose, children }) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            <CloseRoundedIcon fontSize="small" />
          </button>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uNPGTIaXOS0?si=rHVJdCdkve7G7Xw0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {showModal && <Modal onClose={closeModal} />}
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {selectedFilter < 3 ? (
        <Cards list={listOfList[selectedFilter]} />
      ) : (
        <Cards list={listOfList[1]} />
      )}
    </div>
  );
}

export default App;
