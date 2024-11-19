import PropTypes from 'prop-types'; 

import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  // console.log(blog);
  const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8 " src={cover} alt={`Cover picture of ${title}`} />
      <div className="flex justify-between items-center  ">
        <div className="flex gap-2 items-center">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl"> {author} </h3>
            <p className="m"> {posted_date} </p>
          </div>
        </div>

        <div className="flex items-center">
          <span> {reading_time} min read </span>
          <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600' > <FaRegBookmark /> </button>
        </div>
      </div>
      <h2 className="text-3xl"> {title} </h2>
      <p>
        {hashtags.map((it, idx) => {
          return <span key={idx}> <a href=""> #{it} </a> </span>
        })}
      </p>

      <button onClick={()=>handleMarkAsRead(id, reading_time)} className="text-purple-600 font-bold underline"> Mark as read </button>

    </div>
  );
};


Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};



export default Blog;