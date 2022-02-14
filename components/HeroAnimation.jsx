import { useState, useEffect } from 'react';

const HeroAnimatedText = () => {
  const [slow, setSlow] = useState([]);
  const [fast, setFast] = useState([]);




  return (
    <div className="animated-text-wrapper">
      <div className="line left">
        <div className="content">
          <span className="spanSlow">Think</span>
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