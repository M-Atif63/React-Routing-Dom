import React from 'react'
import myPhoto from '../../Images/My photo.jpg'

function Home() {
  return (
    <div className="main-container">
      <div className="first-art">
        <div className="left-side">
          <div className="text">
            <h3 className="head-1">Hello,
              <span className="name"><br/>I'm Muhammed Atif</span>
            </h3>
            <div className="typing-container">
              <h5 className="typing-text">I'm a Software Engineer</h5>
              <span className="typing-caret"></span>
            </div>
            <p className="para">I Working on Front-End Web Design Projects Using <br/> Languages
              HTML, CSS, Javascript, React, Node.js, <br/> Mongo.db.I strives to develop websites
                responsive, <br/>
                  modern, and attractive for viewers, And I develop <br/> Websites And apps For Android And IOS
                    Device Users<br/>
                    </p>
                  </div>
                  <div className="btns">
                    <a href="https://wa.me/923152794082" target="_blank" rel="noreferrer"><button className="btn-1">Contact
                      Me</button></a>
                  </div>
                  <div className="icons">
                    <a href="https://github.com/M-Atif63" target="_blank" rel="noreferrer"><i
                      className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.linkedin.com/in/muhammed-atif-ali-38b53a393/" target="_blank" rel="noreferrer"><i
                      className="fa-brands fa-linkedin"></i></a>
                    <a href="https://wa.me/923152794082" target="_blank" rel="noreferrer"><i
                      className="fa-solid fa-square-phone"></i></a>
                    <a href="mailto:muhammed.atif.ali.63@gmail.com" target="_blank" rel="noreferrer"><i
                      className="fa-solid fa-square-envelope"></i></a>
                  </div>
                </div>
                <div className="right-side">
                  <div className="image">
                    <img src={myPhoto} alt='My Photo'/>
                  </div>
                </div>
              </div>
            </div>
              )
}

export default Home
