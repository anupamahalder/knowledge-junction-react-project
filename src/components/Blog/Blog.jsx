import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    //destructuring from blog
    const {title, cover_img, author_img,reading_time,author,posted_date,hashtags} = blog;
    return (
        <div className='w-4/5 py-3 border-b-2 mb-3'>
            <img className='rounded' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='p-2 flex justify-between'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt={`Cover picture of the title ${title}`} />
                    <div className='pl-2'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>
                {
                    //map the hastags array to get all the elements
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>#{hash} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;