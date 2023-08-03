import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(router)

app.directive('intersect', {
    beforeMount(el, binding) {
        const options = {
            root: null, // koristiti viewport kao root
            rootMargin: '0px', // margin root elementa
            threshold: 0 // prag vidljivosti elemenata
        }
  
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
            binding.value(entries)
            observer.disconnect()
            }
        }, options)
    
        observer.observe(el)
    }
})

app.mount('#app')
