import React, { useState, useEffect } from "react";
import { eze } from "./assets";
import { Card } from "./components/card";
import Header from "./components/header";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { ModalCard } from "./components/card";
import axios from "axios";

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    position: "absolute",
    background: "transparent",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    border: "none",
  },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const fetchPhotos = async () => {
    try {
      const res = await axios.post("http://localhost:8888/photos/list");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <div className="container">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="row mb-4">
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <Card
            img={eze}
            album="Personal"
            img_name="Kingsley"
            image_alt="kings"
          />
        </div>
      </div>
      {isOpen ? (
        <Modal isOpen={isOpen} style={modalStyles}>
          <ModalCard
            title="Upload Photos"
            icon={<FaTimes size={20} />}
            setIsOpen={setIsOpen}
          />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
