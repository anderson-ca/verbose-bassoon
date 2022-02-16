import { useState, useEffect, useRef } from 'react';

const HeroAnimatedText = () => {
  const ref = useRef(null);

  const [animatedText, setAnimatedText] = useState([]);
  const [slow, setSlow] = useState([]);
  const [fast, setFast] = useState([]);
  const [mouseX, setMouseX] = useState(0)

  useEffect(() => {
    setSlow([...document.getElementsByClassName("spanSlow")]);
    setFast([...document.getElementsByClassName("spanFast")]);
    ref.current.addEventListener("mousemove", (e) => {
      // normalize mouse movement
      console.log(e.pageX)
      setMouseX(e.pageX)
    });

  }, []);

  useEffect(() => {

    // normalize mouse position
    let normalizedPosition = mouseX / (window.innerWidth/2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;


    for (let element of slow) {
      element.style.transform = `translate(${speedSlow}px)`;
    }
    for (let element of fast) {
      element.style.transform = `translate(${speedFast}px)`;
    }

  }, [mouseX, fast, slow])

  return (
    <div className="hero-section">
      <div ref={ref} className="animated-text-wrapper">
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">experience</span>
            </div>
          </div><div className="right">
            <div className="content">
              <span className="spanSlow">experience</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">the flavor</span>
            </div>
          </div><div className="right">
            <div className="content">
              <span className="spanSlow">the flavor</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanFast">you</span>
            </div>
          </div><div className="right">
            <div className="content">
              <span className="spanFast">you</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">desire</span>
            </div>
          </div><div className="right">
            <div className="content">
              <span className="spanSlow">desire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAnimatedText