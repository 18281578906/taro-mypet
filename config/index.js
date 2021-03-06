const isH5 = process.env.TARO_ENV === 'h5'
const HOST = '"http://xxx"'
const path = require('path')
const config = {
  projectName: '果冻雪糕の猫舍',
  date: '2021-3-16',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [
    '@tarojs/plugin-sass',
  ],
  defineConstants: {
    defineConstants: {
      HOST: isH5 ? '"/api"' : 'http://localhost:3001'
    },
  },
  alias: {
    '@/component': path.resolve(__dirname, '..', 'src/component'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/api': path.resolve(__dirname, '..', 'src/api'),
    "@/asset": path.resolve(__dirname, '..', 'src/asset'),
    "@/constants": path.resolve(__dirname, '..', 'src/constants'),
    "@/image": path.resolve(__dirname, '..', 'src/image'),
    "@/store": path.resolve(__dirname, '..', 'src/store'),
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    devServer: {
      host: 'localhost',
      port: 10086,
      proxy: {
        '/api': {
          target: 'http://localhost:3001', // 服务端地址
          pathRewrite: {
            '^/api/': '/api'
          },
          changeOrigin: true
        }
      }
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
