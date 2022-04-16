import classes from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return <div className={classes.card}>{props.children}</div>;
}
