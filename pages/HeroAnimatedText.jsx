const HeroAnimatedText = () => {
  return (
    <div className="animated-text-wrapper">
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanSlow">Think</span>
          </div>
        </div><div className="right">
          <div className="content">
            <span className="spanSlow">Once</span>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanSlow">Think</span>
          </div>
        </div><div className="right">
          <div className="content">
            <span className="spanSlow">Twice</span>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanFast">Think</span>
          </div>
        </div><div className="right">
          <div className="content">
            <span className="spanFast">Delicious</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAnimatedText