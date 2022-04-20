import React, { useEffect, useState } from "react";

import { IPhotoPost } from "../../Objects";

import classes from "./BigPost.module.css";

interface BigPostProps {
  id: number;
}

interface IComment {
  author: string;
  comment: string;
  date: number;
}

export default function BigPost(props: BigPostProps) {
  const API_LINK = `https://boiling-refuge-66454.herokuapp.com/images/${props.id}`;
  const [BigPost, setBigPost] = useState<IPhotoPost | null>();
  const [formAuthor, setFormAuthor] = useState("");
  const [formText, setFormText] = useState("");

  useEffect(() => {
    console.log("big post");
    async function fetchPhotos() {
      const responce = await fetch(API_LINK);
      const responceData: IPhotoPost = await responce.json();
      setBigPost(responceData);
    }
    fetchPhotos();
    console.log(BigPost);
  }, []);

  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      name: formAuthor,
      comment: formText,
    };
    console.log(formData)
    fetch(
      `https://boiling-refuge-66454.herokuapp.com/images/${props.id}/comments/`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
  }

  function onFormAuthorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormAuthor(event.target.value)
  }

  function onFormTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
    setFormText(event.target.value)
  }

  return (
    <div>
      <img src={BigPost?.url} />
      <section className={classes.commentSection}>
        {BigPost?.comments.map((comment) => {
          return (
            <div key={Math.random()} className={classes.comment}>
              <img className={classes.commentAvatar} />
              <div className={classes.commentBox}>
                <h4 className={classes.commentNickname}>{comment.id}</h4>
                <p className={classes.commentText}>{comment.text}</p>{" "}
              </div>
            </div>
          );
        })}
        <form className={classes.commentForm} onSubmit={onFormSubmit}>
          <label htmlFor="commentAuthor">Ваше имя:</label>
          <input
            type="text"
            className={classes.authorInput}
            value={formAuthor}
            onChange={onFormAuthorChange}
            id="commentAuthor"
          />
          <label htmlFor="commentInput">Написать комметарий:</label>
          <input
            type="text"
            className={classes.commentInput}
            value={formText}
            onChange={onFormTextChange}
            id="commentInput"
          />
          <button type="submit" className={classes.commentButton}>
            Отправить комментарий
          </button>
        </form>
      </section>
    </div>
  );
}
