import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Blog.css';

const Blog = () => {


    const [ blogs , setBlogs ] = useState([]);

useEffect(()=>{
         fetch ('Blog.json')
            .then(result => result.json())
            .then(data => setBlogs(data))
},[])


    return (
    
        <section>

            <article  style={{backgroundImage:`url(${"https://image.freepik.com/free-photo/hospital-room-interior_181624-34428.jpg"})`,height:"500px",backgroundAttachment:"fixed",backgroundSize:"cover",width:"100%"}}>
            <aside style={{paddingTop:"40vh",marginLeft:"20vh"}}>
              <h1>Our Blog & Events</h1>
              <h6>Home / <span className="text-primary">Blog</span></h6>
            </aside>
            </article>

        <article className="blogContainer">

{
    blogs.map(blog => blog.condition === "true" ? <Card className="shadow" sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <aside className="publishDate">
               <h3 className="text-center"> {blog?.date}</h3>
               <p>{blog?.year}</p>
            </aside>
          <CardMedia
            component="img"
            height="240"
            image={blog.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom  style={{fontSize:"18px",fontWeight:"600"}}  component="div">
              {blog?.title}
            </Typography>
            <Typography variant="body2" className="mb-3" color="text.secondary">
              {blog.description.slice(0,149)}
            </Typography>

            <Typography  variant="body2" color="text.secondary">
              <strong>Read More  <i class="fas fa-arrow-right"></i></strong>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> : <span></span>)
}




</article>

<article className="fullblog-container">
{
    blogs.map(fullBlog => fullBlog.condition === "false" ? <Card sx={{ maxWidth: 730 ,marginBottom:7}} className="shadow">
    <CardActionArea>
    <aside className="fullBlogPublisher">
               <h3 className="text-center"> {fullBlog?.date}</h3>
               <p>{fullBlog?.year}</p>
            </aside>
      <CardMedia
        component="img"
        width="860"
        image={fullBlog?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom  component="div" style={{fontSize:"22px",fontWeight:"600"}} >
          {fullBlog?.title}
         
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontSize:"18px"}}>
        {fullBlog?.description}
        </Typography>
        <Typography className="mt-3" variant="body2" color="text.secondary">
              <strong><i class="fas fa-user-friends"></i> 5000 people</strong>
              <strong className="ms-5 ps-5"><i class="fas fa-comments"></i> 89 comment</strong>
            </Typography>
      </CardContent>
    </CardActionArea>
  </Card> : <span></span>)
}
</article>


        </section>
    );
};

export default Blog;