import { defineConfig } from 'vite'
import { resolve } from 'path'
import xqInclude from 'vite-plugin-xq-include'
import xqCpDep from 'vite-plugin-xq-cp-dep'
export default defineConfig({
    plugins:[
        xqInclude(),
        xqCpDep()
    ],
    base: './',
    resolve: {
        alias: {
          '~bootstrap': resolve(__dirname, '../node_modules/bootstrap'),
        }
    },
    build: {
        outDir:"../html/",
        emptyOutDir:false,
        rollupOptions: {
            input: {
                'xq-tab-form': resolve(__dirname, 'index.html')
            }
        }
    }
    
})
