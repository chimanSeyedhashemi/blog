import Link from "next/link";
import { useEffect, useState } from "react";
import { IPost } from "../model/model.post";
import { translation } from "../utils/translation";

interface IProps {
  post: IPost;
}

export const Post = (props: IProps) => {
  const [postDate, setPostDate] = useState<string>("");

  useEffect(() => {
    const newDate = new Date().getTime();

    props.post &&
      props.post.id &&
      setPostDate(
        new Date(newDate - 10000000 * props.post.id).toLocaleDateString("en-US")
      );
  }, [props.post]);

  const readTime: number = Number((Math.random() * 50).toFixed(0));

  const cups = () => {
    let newCup = [];
    if (readTime < 30) {
      for (let i = 0; i < Math.ceil(readTime / 5); i++) {
        newCup.push("☕️");
      }
    } else {
      for (let i = 0; i < Math.ceil(readTime / 10); i++) {
        newCup.push("🍱");
      }
    }
    return newCup.join("");
  };
  return (
    <article style={{ marginBottom: "1.75rem" }}>
      <Link href={`/${props.post ? props.post.id : ""}`} passHref={true}>
        <h1 style={{ cursor: "pointer" }}>
          <a>{props.post && props.post.title}</a>
        </h1>
      </Link>
      <small>
        {postDate}&nbsp;• {cups()} &nbsp;{readTime}&nbsp;
        {translation.minRead}
      </small>
      <p>{props.post && props.post.body}</p>
    </article>
  );
};
