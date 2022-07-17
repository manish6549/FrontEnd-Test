import axios from "axios";
import { useState, useEffect} from "react";
import './App.css';



function App() {
  const [posts, setPosts] = useState ([]);

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")

    setPosts(data)
  }

  return (
    <div className="App">
      <div className="container">
        {posts.map(post => (
          <div key={post.id}> 
            <div className="inner-container">
              <img className="large-thumbnail" src={post.thumbnail.large} alt="large-city-thumbainal"/>  
              {post.id === 4 ? <div class='text-on-image'>
                <button className="learn-more">
                  Learn More
                </button>
              </div> : ""}
              <div className="content-item">
                <h3></h3>
                <h2 className="title">{post.title}</h2>
                <p className="content">{post.content}</p>
                <p className="author-name">{post.author.name} - {post.author.role}</p>
                <p className="date">{post.date}</p>
              </div>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
