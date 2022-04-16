import React, { useState, useEffect } from "react";

import Photo from "../photo/Photo";
import { SmallPhotos } from "../../photoInterface/PhotoTypes";

import classes from "./Photos.module.css";

export default function Photos() {
  const dummyPhoto: SmallPhotos = [
    {
      id: 0,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 1,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 2,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 3,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 4,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 5,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 6,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 7,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
    {
      id: 8,
      url: "https://i.picsum.photos/id/237/300/200.jpg?hmac=WSdbBEXvCVSqNN1HnCzm7ohp6DhAJfl9t3TcqBNDn_Q",
    },
  ];

  return (
    <div className={classes.photosContainer}>
      {dummyPhoto.map((item) => {
        return <Photo id={item.id} url={item.url} key={item.id} />;
      })}
    </div>
  );
}
