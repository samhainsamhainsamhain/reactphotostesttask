import BigPost from "../bigPost/BigPost";
import Card from "../UI/Card";
import { IPhoto } from "../../Objects";

import classes from "./Post.module.css";
import Modal from "../UI/Modal";
import { useModal } from "../UI/UseModal";

export default function Post(props: IPhoto) {
  const { isShown, toggle } = useModal();

  const content = <BigPost id={props.id} />

  return (
    <>
      <Card>
        <div className={classes.postContainer}>
          <div className={classes.postBackground}>
            <img
              className={classes.postImage}
              src={props.url}
              alt={`image number ${props.id}`}
              onClick={toggle}
            />
          </div>
          <div className={classes.postId}>Post #{props.id}</div>
        </div>
      </Card>
      <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={""}  />
    </>
  );
}
