import './App.css';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  // Declare state for bookmarks
  const [bookmarks, setBookmarks] = useState([]);
  //event handler
  const handleAddToBookmark = blog => {
    // console.log(blog);
    //adding new item to old item from state array and set the whole item into the set method
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex py-2 max-w-7xl mx-auto'>
      {/* sending props  */}
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      {/* sending props to bookmarks component  */}
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
