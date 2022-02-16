import styles from '../styles/HeroSection.module.css';
import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);

  const [slow, setSlow] = useState([]);
  const [fast, setFast] = useState([]);
  const [mouseX, setMouseX] = useState(0)

  useEffect(() => {
    setSlow([...document.getElementsByClassName(`${styles.spanSlow}`)]);
    setFast([...document.getElementsByClassName(`${styles.spanFast}`)]);

    ref.current.addEventListener("mousemove", (e) => {
      setMouseX(e.pageX)
    });
  }, []);

  useEffect(() => {

    // normalize mouse movement
    let normalizedPosition = mouseX / (window.innerWidth/2) - .9;
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
    <div className={`${styles.hero_section}`}>
      <div ref={ref} className={`${styles.animated_text_wrapper}`}>
        <div className={`${styles.line}`}>
          <div className={`${styles.left}`}>
            <div className={`${styles.content}`}>
              <span className={`${styles.spanSlow} ${styles.span}`}>experience</span>
            </div>
          </div><div className={`${styles.right}`}>
            <div className={`${styles.content}`}>
              <span className={`${styles.spanSlow} ${styles.span}`}>without</span>
            </div>
          </div>
        </div>
        <div className={`${styles.line}`}>
          <div className={`${styles.left}`}>
            <div className={`${styles.content}`}>
              <span className={`${styles.spanSlow} ${styles.span}`}>Flavor</span>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <div className={`${styles.content}`}>
              <span className={`${styles.spanSlow} ${styles.span}`}>compromise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;