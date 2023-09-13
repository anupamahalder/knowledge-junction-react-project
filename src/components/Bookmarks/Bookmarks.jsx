import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <>
        <div className='md:w-1/3 mx-auto'>
            <div><h2 className="text-3xl font-bold px-3 mx-auto">Bookmarked Blogs: {bookmarks.length}</h2></div>
            <div className="bg-gray-100 m-4 p-4 rounded-md">
                {
                    //loopthrough all the bookmarks 
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
        </>
    );
};
//adding proptypes
Bookmarks.propTypes ={
    bookmarks: PropTypes.array
}

export default Bookmarks;