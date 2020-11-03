import VueAos from 'vue-aos'
import 'animate.css';

export default {
    name: 'LandingPage',
    components: {
      VueAos,
    },
    data () {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true
        }
      }
  },
}
