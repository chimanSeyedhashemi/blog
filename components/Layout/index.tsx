import { ReactNode } from "react";
import styles from "../../styles/Layout.module.css";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
