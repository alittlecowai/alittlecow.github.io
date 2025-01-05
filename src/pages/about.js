import React from "react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const About = () => {
  const fileName = "about.md";
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../views/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });


  return <Markdown>{post}</Markdown>
};

export default About;