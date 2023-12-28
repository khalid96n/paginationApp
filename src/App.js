
import React,{useState,useEffect} from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

function App() {

  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentpage,setCurrentPage] = useState(1);
  // const [postPerpage,setPostPerpage] = useState(10);
  const postPerpage =10

  useEffect(()=>{
    const fetchPost = async()=>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPost();
  },[])


  // Get Current post

  const indexOflastpost = currentpage*postPerpage;
  const indexOfirstpost = indexOflastpost-postPerpage;
  const currentPost = posts.slice(indexOfirstpost,indexOflastpost);

  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  return (
    <div className="container mt-5">
      <div className='text-primary mb-3'>My blog</div>
      <Posts posts={currentPost} loading={loading}/>
      <Pagination postPerPage={postPerpage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
