import { useState, useEffect, useRef } from 'react';

const HeroAnimatedText = () => {
  const ref = useRef(null);

  const [slow, setSlow] = useState([]);
  const [fast, setFast] = useState([]);
  const [mouseX, setMouseX] = useState(0)

  useEffect(() => {
    setSlow([...document.getElementsByClassName("slow")]);
    setFast([...document.getElementsByClassName("spanFast")]);

    ref.current.addEventListener("mousemove", (e) => {
      console.log('my shit works', e.pageX);
    })

  }, [])

  const trackMousePostion = (e) => {
    console.log("mouse here: ", e.pageX);
    console.log("window width --> ", window.innerWidth)
    setMouseX(e.pageX)
    console.log('bitchin!', mouseX);
  }

  const handleMouseMovement = (e) => {

    let trial = document.getElementById("trial")
    // let normalizedPosition = e.pageX / (window.innerWidth / 2) -1;
    // let speedSlow = 100 * normalizedPosition;
    // let speedFast = 200 * normalizedPosition;
    // console.log(speedSlow, speedFast, normalizedPosition, slow);

    // slow.forEach((element) => {
    //   element.style.transform = `translateX(${speedSlow}px)`;
    // });

    // fast.forEach((element) => {
    //   element.style.transform = `translateX(${speedFast}px)`;
    // });
  }

  return (
    <div ref={ref} className="animated-text-wrapper">
      <div className="line left">
        <div className="content">
          <span className="slow">Think</span>
        </div>
      </div>
      <div className="line right">
        <div className="content">
          <span className="spanSlow">Once</span>
        </div>
      </div>
      <div className="line right">
        <div className="content">
          <span className="spanSlow">Twice</span>
        </div>
      </div>
      <div className="line right">
        <div className="content">
          <span className="spanFast">Delicious</span>
        </div>
      </div>
    </div>
  )
}

export default HeroAnimatedText