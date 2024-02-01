import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: "src/index.ts", //入口文件
  output: [{
     file: 'dist/index.js', //目标路径
     format: 'cjs' //打包目标模式，我们编写的是node模块，请使用commonjs规范
  }
],
  plugins: [//打包插件
      commonjs(),
      typescript()
  ]
}

