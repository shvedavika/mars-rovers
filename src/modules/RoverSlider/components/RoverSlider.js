import React from 'react';
import Slider from 'react-slick';
import { MAX_ITEMS_TO_SHOW, SETTINGS } from "../helpers/roverSliderHelpers";
import './RoverSlider.scss';

export default function RoverSlider(props) {
  const  { photos, error, isSearchPerformed, roverPhotosLoadMore } = props;
  if(error) {
    return <span className="roverSliderError">{error}</span>
  }
  if(isSearchPerformed && !photos.length) {
    return <span className="roverSliderError">Photos are absent</span>
  }
  
  const settings = {
    ...SETTINGS,
    infinite: false,
    afterChange: (index) => {
      const currentSlide = MAX_ITEMS_TO_SHOW + index;
      const totalOnThePage = photos.length;

      if (currentSlide === totalOnThePage) {
        roverPhotosLoadMore();
      }
    }
  };
  
  return (
    <section className="roverSliderContainer">
      <Slider {...settings}>
        {photos && photos.map(photo => {
          return (
            <div key={photo.id} >
              <div className="roverSliderContainer__image" style={{backgroundImage: `url(${photo.img_src})`}} />
            </div>
          )})}
      </Slider>
    </section>
  )
}
