import img from './image/kitten.jpg';
import './App.css';

function App() {

  return (
    <>
      <div id="theme-open" onClick={() => setToggler(!toggler)} className="fas fa-bars"></div>

      <div className="container">
        <div className="content">
          <img src={img} alt="cat" />
          <h3>some text heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium, atque?</p>
          <a href="#" className="btn"><strong>read more</strong></a>
        </div>
      </div>
    </>
  );
}

export default App;
