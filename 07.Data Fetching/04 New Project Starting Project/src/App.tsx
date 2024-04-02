import React, { ReactNode, useEffect, useState } from "react";
import { get } from "./util/http";
import { BlogPost } from "./components/BlogPosts";
import fetchingImg from './assets/data-fetching.png'
import BlogPosts from './components/BlogPosts';
//type for [posts]
type RawPost = {
  id:number,
  userId:number,
  title:string,
  body:string
}



function App() {
  //create a empty state step 1
  const [fetchedPost, setFetchPost] = useState<BlogPost[]>()

  //to render data useeffect step 3
  useEffect(()=>{
    //step 2
    async function fetchPosts(){

     const data = (await  get('https://jsonplaceholder.typicode.com/posts')) as RawPost[];//url to get data, and it returns Promise
    
     //to convert into blogPost type step 4
  const blogposts:BlogPost[] = data.map(rawPost=>{
    return {
      id:rawPost.id,
      title:rawPost.title,
      text:rawPost.body
      
    }
  })
  
    //to update state after getting data step 5
    setFetchPost(blogposts);
  
    }

  

    fetchPosts(); // as await async doesnt work on useeffect we used a Helper functiom
   
  },[])
  
  //step 7 to solve undefined error
  let content:ReactNode
  if (fetchedPost) {
    content = <BlogPosts posts={fetchedPost}/>;
  }



  return <main>
    {/* step 6 */}
    <img src={fetchingImg} alt="" />
    {content}
    
  </main>;
}

export default App;
