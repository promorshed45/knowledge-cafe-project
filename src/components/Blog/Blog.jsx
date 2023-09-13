import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';



const Blog = ({ blog, handleAddToBookMark }) => {
    const {title,cover, author, author_img, reading_time,posted_date, hashtags} = blog;
    return (
        <div className='my-10 '>
            <img className='w-full h-66' src={cover} alt={`cover picture of the title ${title}`}/>
            <div className='flex justify-between py-8 mx-5'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                        <div>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <span>{reading_time} minute reading</span>
                   <button onClick={()=> handleAddToBookMark(blog)}> <FaBookmark /> </button>  
                </div>
            </div>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">  #{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
    handleAddToBookMark: PropTypes.func
}
export default Blog;