import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { Header } from "../components/Layout/Header";
import { Post } from "../components/Post";
import { Profile } from "../components/Profile";
import { IPost } from "../model/model.post";
import { postService } from "../service/service.post";
import styles from "../styles/Home.module.css";

const initialPost: IPost = {
  body: "",
  id: 1,
  title: "",
  userId: 1,
};
const Home: NextPage = () => {
  const [post, setPost] = useState<IPost>(initialPost);
  const router = useRouter();
  const id: string = router.query && (router.query.id as string);
  useEffect(() => {
    getPost(id);
  }, [id]);

  const getPost = async (id: string) => {
    try {
      const response = await postService.getById(id);

      setPost(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Post post={post!} />
    </div>
  );
};

export default Home;
