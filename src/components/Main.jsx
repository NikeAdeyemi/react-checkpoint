import React from 'react'
import "./styles/Main.css"
const Main = () => {
  return (
    <main>
      <div className='main-one'>
        <div>
          <h1>Virtual healthcare Saviour <br />for you</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod, 
            magni itaque ipsum omnis tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, facilis.  </p>
            <button>Consult today</button>
        </div>
        <div className="image-div">
          <img src="./assets/images.png" alt="" />
        </div>
      </div>
    </main>
  )
}

export default Main