import React, { Fragment } from "react";
// import { FaArrowDown } from "react-icons/fa";
import Image from "../image";
import "./card.css";
import { VscCloudUpload } from "react-icons/vsc";

export const Card = ({ img, image_alt, img_name, album }) => {
  return (
    <Fragment>
      <div className="card" style={{ overflow: "hidden" }}>
        <Image src={img} alt={image_alt} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center">{img_name}</h5>
          <p className="card-text text-center">{album}</p>
        </div>
      </div>
    </Fragment>
  );
};

export const ModalCard = ({ title, icon, setIsOpen }) => {
  return (
    <div className="modal-card bg-light p-2">
      <div className="d-flex align-items-center justify-content-between">
        <h5>{title}</h5>
        <div onClick={() => setIsOpen(false)}>{icon}</div>
      </div>
      <div className="drag-container p-3 mt-2 text-center">
        <small className="mx-auto text-center">
          Drag 'n' drop files here or Click to select files{" "}
        </small>
      </div>
      <div className="selected-container d-flex justify-content-center align-items-center">
        <p>No file Selected Yet...</p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <select className="form-control header-select outline-none border-0">
            <option selected>Select Album</option>
          </select>
        </div>
        <div>
          <button className="btn btn-default">
            <VscCloudUpload />
            &nbsp;Upload &nbsp;
          </button>
        </div>
      </div>
    </div>
  );
};
