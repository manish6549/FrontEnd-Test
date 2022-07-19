import axios from "axios";
import { useState, useEffect} from "react";
import './Modal.css';


function Modal() {
  const [posts, setPosts] = useState ([]);

  useEffect( () => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {data} = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")

    setPosts(data)
  }

  return (
    <div>
        {posts.map ( post => (
            <div key={ post.id }> 
            {/* if the id = 4 is true then modal with the respective data will be shown */}
              {post.id === 4 ? 
                <div className="m-container">
                  <div className="modal-screen">
                    <span class="material-symbols-outlined">
                      close
                    </span>
                    <img className="small-thumbnail" src={ post.thumbnail.small } alt="small-city-thumbainal"/> 
                    <div className="content-modal">
                      <h2 className="modal-title">{ post.title }</h2>
                      <p className="modal-content">{ post.content }</p>
                      <img className="modal-profile-pic" src={ post.author.avatar } alt="author-pic"/>
                      <p className="modal-author-name">{ post.author.name } - { post.author.role }</p>
                    </div>
                  </div>
                </div>
              : "" }
            </div>
        ))}
    </div>
  );
}

export default Modal;