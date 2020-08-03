import Vue from 'vue'
import TinyMCE from '@tinymce/tinymce-vue'
import 'tinymce/tinymce'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/image/plugin'
import 'tinymce/plugins/advlist/plugin'
import 'tinymce/plugins/autolink/plugin'
import 'tinymce/plugins/lists/plugin'
import 'tinymce/plugins/charmap/plugin'
import 'tinymce/plugins/print/plugin'
import 'tinymce/plugins/preview/plugin'
import 'tinymce/plugins/hr/plugin'
import 'tinymce/plugins/code/plugin'
/*import 'tinymce/plugins/fullpage/plugin'*/
import 'tinymce/icons/default'
import Theme from "tinymce/themes/silver"
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'

declare var window
if (process.env.BROWSER) {
    window.Theme = Theme
}
Vue.component('tiny-mce', TinyMCE)
