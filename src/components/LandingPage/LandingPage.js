import VueAos from 'vue-aos'
import 'animate.css';
import ImageSlider from '../ImageSlider'
import SponsorSlider from '../SponsorSlider'
import { http } from '../../services/http'

export default {
    name: 'LandingPage',
    components: {
      VueAos,
      ImageSlider,
      SponsorSlider,
    },
    data () {
      return {
        user: {
          name: "",
          email: "",
          phone: "",
          msg: ""
        },
        loader: false
    }
  },
  methods: {
      registerUser() {
          this.loader = true
          http
            .post('http://localhost:4000/send-email', this.user)
            .then(res => {
              console.log(res)
              alert("Consulta enviada exitosamente");
              this.loader = false
            }).catch (err => {
              alert("Ups! Algo salió mal. Intentalo nuevamente o escribinos directamente a contacto@climatizacionoeste.com");
              this.loader = false
          })
      }
  },
}
