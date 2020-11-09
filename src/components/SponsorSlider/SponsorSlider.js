export default {
    name: 'SponsorSlider',
    data () {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true,
          breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        },
      }
    }
  },
}
