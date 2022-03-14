import styles from "../styles/Header.module.css";
import { translation } from "../utils/translation";
import Image from "next/image";

interface IProps {
  userName: string;
}

export const Profile = (props: IProps) => {
  return (
    <div className={styles.user}>
      <Image
        className={styles.avatar}
        alt="avatar"
        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
      />
      <p>
        {translation.personalBlogBy}&nbsp;
        <a href="https://mobile.twitter.com/dan_abramov">{props.userName}</a>
        <br />
        {translation.IExpalinWithWordsAndCodes}
      </p>
    </div>
  );
};
