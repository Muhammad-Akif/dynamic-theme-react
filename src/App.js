import img from './image/kitten.jpg';
import './App.css';

function App() {

  return (
    <>
      <div id="theme-open" onClick={() => setToggler(!toggler)} className="fas fa-bars"></div>

      <div className={toggler ? 'themes-container active' : 'themes-container'}>

        <div id="theme-close" onClick={() => setToggler(!toggler)} className="fas fa-times"></div>

        <h3>switch theme</h3>

        <div className={ themeToggler ? 'theme-toggler active' : 'theme-toggler' } onClick={() => setThemeToggler(!themeToggler)}>
          { themeToggler ? document.body.classList.add('active') : document.body.classList.remove('active')}
          <span>light</span>
          <span className="toggler"></span>
          <span>dark</span>
        </div>

        <h3>pick a color</h3>

        <div className="theme-colors">
          {colors.map((color, index) => (
            <div className="color" index={index} onClick={() => setBtnColor(color)} style={{ backgroundColor: `${color}` }}></div>
          ))}
        </div>
      </div>

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
