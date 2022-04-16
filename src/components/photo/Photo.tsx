import React from "react";

import classes from "./Photo.module.css";

import Card from "../UI/Card";

interface PhotoProps {
  id: number;
  url: string;
}

export default function Photo(props: PhotoProps) {
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
