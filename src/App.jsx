import { useState } from 'react'
import './App.css'

function BootCard () {

  let cards = [];
  for (let i = 0; i <= 17; i++){
    let even = i % 2 === 0;
    let backgr = even ? "lightblue" : "lightgrey";
    let clr = even ? "yellow" : "red";
    let pic = even ? "/cart.jpg" : " /cart.jpg"
    cards.push( <div className='container col-lg-4 col-md-6 col-sm-6 mx-auto'>
    <div className="card m-2  " style={{width: "20rem", backgroundColor : backgr, color: clr}}>
    <img src={pic} className="card-img-top img-fluid img-thumbnail" alt="image"/>
    <div className="card-body ">
      <h3 className="card-title text-center">Biggg Deal!!!</h3>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary ">Shop now at 10 % discount</a>
    </div>
  </div> 
  </div>)
  }

  return (
    <>
    <div className="container ">
      <div className="row d-flex justify-content-center">
        {cards}
      </div>
    </div>


    </>    
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    
      <div className='container d-flex justify-content-center mt-2'>
       
        <a href="#" target="_blank">
          <img src = "/bootstrap.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-center m-4 '>BootStrap Card</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>              
      </div>
       <BootCard/>   
    </>
  )
}

export default App
