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
          name: '',
          email: '',
          phone: '',
          msg: '',
        },
        loader: false
    }
  },
  methods: {
    sendEmail() {
      this.loader = true
      http
        .post('http://localhost:5000/send-email', this.user)
        .then(res => {
          console.log(res)
          alert("Consulta enviada exitosamente")
          this.user.name = ''
          this.user.email = ''
          this.user.phone = ''
          this.user.msg = ''
          this.loader=  false
        }).catch(err => {
          alert("Ups! Algo salió mal. Intentalo nuevamente o escribinos directamente a contacto@climatizacionoeste.com");
          this.loader = false
        })
    },
  }
}
