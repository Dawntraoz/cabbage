import Vue from 'vue'
import Page from '@/components/Page.vue'
import StyleSection from '@/components/StyleSection.vue'

/* Styleguide components */
import Colors from '@/components/styleguide/Colors.vue'
import Gradients from '@/components/styleguide/Gradients.vue'
import Fonts from '@/components/styleguide/Fonts.vue'
import Icons from '@/components/styleguide/Icons.vue'

/* Dashboard */
import ChartBlock from '@/components/ChartBlock.vue'
import ChartActivity from '@/components/ChartActivity.vue'

Vue.component('page', Page)
Vue.component('style-section', StyleSection)

/* Styleguide components */
Vue.component('colors', Colors)
Vue.component('gradients', Gradients)
Vue.component('fonts', Fonts)
Vue.component('icons', Icons)

/* Dashboard */
Vue.component('ChartBlock', ChartBlock)
Vue.component('ChartActivity', ChartActivity)
