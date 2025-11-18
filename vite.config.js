import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
plugins: [vue()],
base: process.env.NODE_ENV === 'production' ? '/Kelly-repo/' : '/',
})
module.exports = {
publicPath: process.env.NODE_ENV === 'production' ? '/Kelly-repo/' : '/'
}
