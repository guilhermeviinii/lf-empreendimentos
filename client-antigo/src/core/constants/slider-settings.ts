const SLIDER_SETTINGS = {
  accessibility: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerPadding: "60px",
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrow: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default SLIDER_SETTINGS;
