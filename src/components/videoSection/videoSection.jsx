import React from "react"
import "./videoSection.styles.scss"

import { Link } from "gatsby"
import Video from "../../assets/Forest.mp4"

function VideoSection() {
  return (
    <div className="video__section__container">
      <video src={Video} type="video/mp4" autoPlay loop muted />
      <h1 className="video__section__message">Water awaits you</h1>
      <Link to="/blog">
        <button className="video__section__btn">Join me on my journey</button>
      </Link>
    </div>
  )
}

export default VideoSection
