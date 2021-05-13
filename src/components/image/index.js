import React, { Fragment } from "react";
import "./image.css";

const Image = ({ name, src, alt, className }) => {
  return (
    <Fragment>
      <figure className="img">
        <img src={src} alt={alt} className={className} />
      </figure>
    </Fragment>
  );
};

export default Image;
