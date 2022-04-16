import React from "react";

import Card from "../UI/Card";
import { PhotoInterface } from "../../photoInterface/PhotoTypes";

import classes from "./Photo.module.css";

export default function Photo(props: PhotoInterface) {
  return (
    <Card>
      <div className={classes.photoContainer}>
        <div className={classes.photoBackground}>
          <img
            className={classes.photoImage}
            src={props.url}
            alt={`image number ${props.id}`}
          />
        </div>
        <div className={classes.photoId}>Photo #{props.id}</div>
      </div>
    </Card>
  );
}
