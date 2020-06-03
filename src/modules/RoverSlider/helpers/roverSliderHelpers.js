export const MAX_ITEMS_TO_SHOW = 3;

export const SETTINGS = {
  dots: false,
  slidesToShow: MAX_ITEMS_TO_SHOW,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  responsive: [
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
  ]
};
