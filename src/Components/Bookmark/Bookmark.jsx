import PropTypes from 'prop-types'; 


const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className="bg-slate-50 p-4 my-4 rounded-lg">
      <h3 className="text"> {title} </h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;