import React, { useState } from 'react';

function SlideShow() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showWallpaperWrap, setShowWallpaperWrap] = useState(false);
  const size800Value = 4;
  const totalSlides = 9;  // Assuming there are 9 images

  const handleOkClick = () => {
    setShowWallpaperWrap(false);
  };

  const handleArrowUp = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleArrowDown = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  return (
    <div className="slide-show">
      <div className="pic-locker">
        <label className="hover-effect" onClick={() => setShowWallpaperWrap(!showWallpaperWrap)}>
          <i className="iconfont icon-tupian_huaban"></i>
          <i className="iconfont icon-Page"></i>
          <i className="iconfont icon-unlock-fill"></i>
          <input type="checkbox" id="check-lock" checked={showWallpaperWrap} readOnly />
        </label>
      </div>
      {showWallpaperWrap && (
        <div className="wallpaper-wrap">
          <ul className="carousel" style={{ transform: `translateY(${-currentSlideIndex * size800Value}rem)` }}>
            <li className="carousel-item"><img src="./images/Balingen-2.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-1.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-2.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-3.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-4.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-5.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-6.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-7.jpeg" alt="wallpaper" /></li>
            <li className="carousel-item"><img src="./images/wallpaper-8.jpeg" alt="wallpaper" /></li>
          </ul>
          <div className="arrows">
            <button className="arrow-up" onClick={handleArrowUp}>
              <i className="iconfont icon-shangjiantou hover-effect"></i>
            </button>
            <button className="arrow-down" onClick={handleArrowDown}>
              <i className="iconfont icon-xiajiantou hover-effect"></i>
            </button>
          </div>
          <button className="ok hover-effect" onClick={handleOkClick}>OK</button>
        </div>
      )}
      <ul className="points">
        <li></li>
        <li className="current"></li>
        <li></li>
      </ul>
    </div>
  );
}

export default SlideShow;
