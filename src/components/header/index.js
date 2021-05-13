import React from "react";
import "./header.css";
import { VscCloudUpload } from "react-icons/vsc";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <header className="d-flex justify-content-between">
      <h2 className="col-md">Photos</h2>
      <div className="d-flex justify-content-around align-items-center">
        <button
          className="btn btn default outline-none"
          onClick={() => setIsOpen(true)}
        >
          <VscCloudUpload />
          &nbsp;Upload
        </button>
        <span> | </span>
        <span>
          <select
            className="form-control header-select"
            style={{ border: "none", outline: "none" }}
          >
            <option selected>20</option>
          </select>
        </span>
      </div>
    </header>
  );
};

export default Header;
