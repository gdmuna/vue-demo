import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import { VarletImportResolver } from '@varlet/import-resolver';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 "" 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), '');
    // vite 配置
    return {
        root: './', // 项目根目录（index.html 文件所在的位置）
        base: './', // 开发或生产环境服务的公共基础路径
        envDir: './config', // 用于加载 .env 文件的目录
        // 配置路径别名
        resolve: {
            alias: {
                '@': '/src'
            }
        },
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV) // 定义全局常量替换方式
        },
        server: {
            host: '0.0.0.0',
            port: 8081,
            open: true, // 自动打开浏览器
            hmr: true, // 开启热更新
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:33001',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '/api')
                }
            }
        },
        plugins: [
            vue(),
            components({
                resolvers: [VarletImportResolver()]
            }),
            autoImport({
                resolvers: [VarletImportResolver({ autoImport: true })]
            })
        ],
        // 打包时自动去除 console 和 debugger
        esbuild: {
            drop: env?.VITE_DROP_CONSOLE === 'true' ? ['console', 'debugger'] : []
        }
    };
});
