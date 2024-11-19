import PropTypes from 'prop-types'; 
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-slate-200 ml-5 my-10 p-4 rounded-lg">
      <div>
        <h3> Reading Time: {readingTime} </h3>
      </div>
        <h2 className="text-3xl"> Bookmarkd Blogs: {bookmarks.length} </h2>
        {bookmarks.map((it, idx) => {
          return <Bookmark key={idx} bookmark={it}> </Bookmark>
        })}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
};


export default Bookmarks; 