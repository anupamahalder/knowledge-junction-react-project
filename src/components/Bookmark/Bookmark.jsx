import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    //we need only title so destructuring title
    const {title} = bookmark;
    return (
        <div className='bg-white p-4 m-4 rounded-md'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};
//adding proptypes
Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;