import React from "react";

import Card from "../UI/Card";
import { IPhoto } from "../../Objects";

import classes from "./Post.module.css";

export default function Post(props: IPhoto) {
  return (
    <Card>
      <div className={classes.postContainer}>
        <div className={classes.postBackground}>
          <img
            className={classes.postImage}
            src={props.url}
            alt={`image number ${props.id}`}
          />
        </div>
        <div className={classes.postId}>Post #{props.id}</div>
      </div>
    </Card>
  );
}
