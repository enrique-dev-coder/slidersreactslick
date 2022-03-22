import { useState } from 'react'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const images = ['dog1', 'dog2', 'dog3', 'dog4']

const slider3d = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [ImgIndex, setImgsIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    //truco para que te pase el siguiente numero del slider
    beforeChange: (current, next) => setImgsIndex(next),
  }
  console.log(ImgIndex)
  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, id) => (
          <div
            key={id}
            className={`flex flex-col justify-center ${
              id === ImgIndex ? 'slide activeSlide' : 'slide'
            }`}
          >
            <img
              src={`/images/${img}.jpg`}
              className="mx-auto w-2/4"
              alt={img}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default slider3d
