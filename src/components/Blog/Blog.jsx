import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog}) => {
    //destructuring from blog
    const {title, cover_img, author_img,reading_time,author,posted_date,hashtags} = blog;
    return (
        <div className='w-full py-3 border-b-2 mb-3'>
            <img className='rounded' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='py-4 flex justify-between'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt={`Cover picture of the title ${title}`} />
                    <div className='pl-2'>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className="place-content-center mr-2">
                    <span className='mr-2 pb-4'>{reading_time} min read</span>
                    <button className='text-xl text-red-700 hover:text-black hover:bg-white'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p className='text-xl text-gray-500 py-2'>
                {
                    //map the hastags array to get all the elements
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>#{hash} </a></span>)
                }
            </p>
            <a className='underline hover:text-purple-600' href=''>Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;