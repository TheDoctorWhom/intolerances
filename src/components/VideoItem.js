import './VideoItem.css';
// import vegimg from '../img/Veg.png';
import React from 'react';

const VideoItem = ({ video, onVideoSelect, term }) => {
  let typeImg = "";

if (video.TYPE === "Veg"){
  typeImg = "../img/Veg.png"
}else if (video.TYPE === "Beverage"){
  typeImg = "../img/Beverage.png"
}else if (video.TYPE === "Chemical"){
  typeImg = "../img/Chemical.png"
}else if (video.TYPE === "Dairy"){
  typeImg = "../img/Dairy.png"
}else if (video.TYPE === "Fat"){
  typeImg = "../img/fat.png"
}else if (video.TYPE === "Fruit"){
  typeImg = "../img/Fruit.png"
}else if (video.TYPE === "Grain"){
  typeImg = "../img/Grain.png"
}else if (video.TYPE === "Misc"){
  typeImg = "../img/Misc.png"
}else if (video.TYPE === "Protein"){
  typeImg = "../img/Protein.png"
}else if (video.TYPE === "Seed"){
  typeImg = "../img/Seed.png"
}else if (video.TYPE === "Spice"){
  typeImg = "../img/Spice.png"
}else if (video.TYPE === "Nuts"){
  typeImg = "../img/Nut.png"
}else if (video.TYPE === "Seafood"){
  typeImg = "../img/Seafood.png"
}else if (video.TYPE === "Sweetener"){
  typeImg = "../img/Sweetener.png"
}

let backGroundColor = "";

if (video.LEVEL == 3){
  backGroundColor = "red";
}else if (video.LEVEL === 2){
  backGroundColor = "yellow";
}else if (video.LEVEL === 1){
  backGroundColor = "orange";
}


  return (

      <div className="ui four wide column segment"
      style={{
        backgroundImage: `url(${typeImg})`,
        backgroundColor: `${backGroundColor}`
        }}>
        <h4 className="ui header">{video.NAME}</h4>
        <p>{video.TYPE}</p>
        <p>Level: {video.LEVEL}</p>
        <div className="ui image">
        {/*// <img src={typeImg} alt={video.TYPE}></img>*/}
        </div>
      </div>

  );
};

export default VideoItem;
