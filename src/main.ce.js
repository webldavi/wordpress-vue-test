import { defineCustomElement } from 'vue'
import SimpleSampleComponent from './components/HelloWorld.vue'

const SimpleSample = defineCustomElement(SimpleSampleComponent)

customElements.define('laravue-lib', SimpleSample)