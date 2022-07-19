import axios from "axios";
import { useState, useEffect} from "react";
import Modal from "./Modal";
import './App.css';


function App() {
  // Declare a new state variable, initialize post with empty array
  const [posts, setPosts] = useState ([]);
  // Declare a new state variable, "isShown"
  const [isShown, setIsShown] = useState(false);

  // Fetching data using useEffect with empty prop 
  useEffect( () => {
    // calling fetchdata function from below
    fetchData()
  }, [])

  const handleClick = event => {
    //toggle shown state
    setIsShown(current => !current);
  };

  const fetchData = async () => {
    const {data} = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")

    // Update the posts state variable 
    setPosts(data)
  }

  return (
    <div className="App">
      <div className="container">
        {/* maps data to the designed container accordingly to their id*/}
        {posts.map(post => (
          <div key={post.id}> 
            <div className="inner-container">
              <img className="large-thumbnail" src={post.thumbnail.large} alt="large-city-thumbainal"/> 
               {/* if id = 4 is true then below code will run */}
              {post.id === 4 ? <div class='text-on-image'>
                <button className="learn-more" onClick={handleClick}>
                  Learn More
                </button>
                {/*  if clicked on then modal will be shown */}
                {isShown && <Modal />}
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