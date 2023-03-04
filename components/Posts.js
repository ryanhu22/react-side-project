import React, { useEffect } from "react";
import faker from "faker";
import Post from "./Post";

function Posts() {
  //   useEffect(() => {
  //     const fake_profiles = [...Array(3)].map((_, i) => ({
  //       ...faker.helpers.contextualCard(),
  //       id: i,
  //     }));

  //     console.log(fake_profiles);
  //   }, []);

  const DUMMY_POSTS = [
    {
      id: "1",
      username: "ryanhu__id1",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "This is an example caption__1",
    },
    {
      id: "2",
      username: "ryanhu__id2",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "This is an example caption__2",
    },
    {
      id: "3",
      username: "ryanhu__id3",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "This is an example caption__3",
    },
  ];

  return (
    <div>
      {DUMMY_POSTS.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
