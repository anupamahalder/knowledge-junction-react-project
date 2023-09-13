import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    //destructuring from blog
    const {title, cover_img, author_img,reading_time,author} = blog;
    return (
        <div>
            <img className='w-full' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='p-2 flex justify-between'>
                <div>
                    <img className='w-10 h-10 rounded-full' src={author_img} alt={`Cover picture of the title ${title}`} />
                    <div>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;