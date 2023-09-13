import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  // Declare state for bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  //declare state for reading time and default time is 0
  const [readingTime, setReadingTime] = useState(0);

  //event handler for blog bookmark
  const handleAddToBookmark = blog => {
    // console.log(blog);
    //adding new item to old item from state array and set the whole item into the set method
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  //event handler for total reading time of blogs
  const handleMarkAsRead = time =>{
    const newTime = parseInt(time) + parseInt(readingTime);
    //add the time with previous time
    setReadingTime(newTime);
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex py-2 max-w-7xl mx-auto'>
      {/* sending props  */}
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
      {/* sending props to bookmarks component  */}
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
