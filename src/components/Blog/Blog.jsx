import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    //destructuring from blog
    const {title, cover_img, author_img} = blog;
    return (
        <div>
            <img src={cover_img} alt={`Cover picture of the title ${title}`} />
            <img src={author_img} alt={`Cover picture of the title ${title}`} />
            <h2 className='text-3xl'>{title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;