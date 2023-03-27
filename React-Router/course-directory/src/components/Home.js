import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const name = useRef();
  const topic = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = `/teachers/${name.current.value}/${topic.current.value}`;
    navigate(path);
  };

  return (
    <div className="main-content home">
      <h2>Front End Course Directory</h2>
      <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
      <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
      <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
      <hr />
      <h3>Featured Teachers</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={name} />
        <input type="text" placeholder="Topic" ref={topic} />
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}
