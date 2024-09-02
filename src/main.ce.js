import { defineCustomElement } from "vue";

import "@/assets/index.css"
import SimpleSampleComponent from "./components/HelloWorld.vue";


const SimpleSample = defineCustomElement(SimpleSampleComponent);


customElements.define("laravue-lib", SimpleSample);

