import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "../components/Layout/Header";
import { Post } from "../components/Post";
import { Profile } from "../components/Profile";
import { IPost } from "../model/model.post";
import { postService } from "../service/service.post";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await postService.get();
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <Profile userName="Dan Abramov" />
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
