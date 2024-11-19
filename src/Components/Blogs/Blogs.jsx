import PropTypes from 'prop-types'; 

import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  // fake data blogApi.josn theke blogs array te niye ashbo..ei array theke use korte thakbo
  useEffect(() => {      
    const fetchBlogs = async () => {
      const res = await fetch('Json/BlogsApi.json');
      const data = await res.json();

      setBlogs(data);
    }

    fetchBlogs();
  }, [])



  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl"> Blogs: {blogs.length} </h1>
      {blogs.map(it => {
        return <Blog key={it.id} blog={it} handleAddToBookmark={handleAddToBookmark}  handleMarkAsRead={handleMarkAsRead}>  </Blog>           //each blog er jonne Blog component e pathabo 

      })}


    </div>
  );
};


Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};


export default Blogs;