import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookMark = blog =>{
    console.log(blog);
  }
  return (
    <div className='max-w-5xl mx-auto py-4'>
      <Header></Header>
      <div className='md:flex py-10'>
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
