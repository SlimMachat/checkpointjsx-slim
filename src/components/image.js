import React from "react";
import images from '../club.jpg'

function imagees() {
    return (
        <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="titleRed">Slim</h1>
    <br />
    <img src= {images} />
    <br />
    <img src="/netflix.jpg" />
  </div>
  <video width={320} height={240} controls>
  </video></div>

    )
}
export default imagees;