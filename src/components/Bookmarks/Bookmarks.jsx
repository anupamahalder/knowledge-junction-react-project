import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <>
        <div className='md:w-1/3 mx-auto px-2'>
            <div className='text-purple-800 text-2xl p-4 border-2 m-2 border-purple-800 rounded-xl'>
                <h3>Spent time on read : <span>{readingTime}</span> min</h3>
            </div>
            <div><h2 className="text-3xl font-bold p-3 mx-auto">Bookmarked Blogs: {bookmarks.length}</h2></div>
            <div className="bg-gray-100 p-2 rounded-md">
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
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;