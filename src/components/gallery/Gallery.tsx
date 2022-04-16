import { useState, useEffect } from "react";

import Post from "../post/Post";
import { IPhoto } from "../../Objects";

import classes from "./Gallery.module.css";

const API_LINK = "https://boiling-refuge-66454.herokuapp.com/images";

export default function Photos() {
  const [posts, setPosts] = useState<IPhoto[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      const responce = await fetch(API_LINK);
      const responceData: IPhoto[] = await responce.json();
      setPosts(responceData);
    }
    fetchPhotos();
  }, []);

  return (
    <div className={classes.galleryContainer}>
      {posts.map((post) => {
        return <Post id={post.id} url={post.url} key={post.id} />;
      })}
    </div>
  );
}
