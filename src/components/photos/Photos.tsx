import React, { useState, useEffect } from "react";

import Photo from "../photo/Photo";
import { SmallPhotos } from "../../photoInterface/PhotoTypes";

import classes from "./Photos.module.css";

const API_LINK = "https://boiling-refuge-66454.herokuapp.com/images";

export default function Photos() {
  const [posts, setPosts] = useState<SmallPhotos>([]);

  useEffect(() => {
    async function fetchPhotos() {
      const responce = await fetch(API_LINK);
      const responceData: SmallPhotos = await responce.json();
      setPosts(responceData);
    }
    fetchPhotos();
  }, []);

  return (
    <div className={classes.photosContainer}>
      {posts.map((item) => {
        return <Photo id={item.id} url={item.url} key={item.id} />;
      })}
    </div>
  );
}
