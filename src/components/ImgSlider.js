import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    className: "center",
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SampleNextArrow />
  };
  return (
    <Slider {...settings}>
      <div className="mt-20">
        <img className="w-screen" src="/images/slider-badging.jpg" alt="" />
      </div>
      <div className="mt-20 w-screen">
        <img className="w-screen" src="/images/slider-scale.jpg" alt="" />
      </div>
      <div className="mt-20">
        <img className="w-screen" src="/images/slider-badag.jpg" alt="" />
      </div>
      <div className="mt-20">
        <img className="w-screen" src="/images/slider-scales.jpg" alt="" />
      </div>
    </Slider>
  );
};

export default ImgSlider;
