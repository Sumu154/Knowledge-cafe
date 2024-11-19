import './App.css'

import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'



function App() {
  const [bookmarks, setBookmarks] = useState([]); 
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) =>{
    // console.log('Bookmark adding soon.......')
    console.log(blog);

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  const handleMarkAsRead = (id, time) => {
    console.log('marking as read');
    setReadingTime(readingTime + time);

    //remove the read blog from bookmark
    // console.log('remove bookmark');
    const remainingBookmarks = bookmarks.filter((it) => {
      return it.id !== id;
    })

    setBookmarks(remainingBookmarks);

  }


  return (
    <>
      <Header> </Header>
      <main className="w-[85%] mx-auto md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </main>
    </>
  )
}

export default App
