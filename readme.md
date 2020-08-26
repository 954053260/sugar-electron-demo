## sugar-electron脚手架模板

### 启动
```
npm run webpack:dev
npm run dev
```

### 文件目录
```
sugar-electron-cli
  └─src                       // 项目
    ├─config                  // 配置文件
    │ ├─config.base.js        // 公共配置
    │ ├─config.dev.js         // 开发环境配置
    │ ├─config.test.js        // 测试环境配置
    │ ├─config.js             // 生产环境配置
    │ └─plugins.js            // 插件配置
    ├─plugins                 // 本地插件
    ├─render                  // 业务开发  
    ├─service                 // 服务进程
    ├─store                   // 进程状态共享初始化
    ├─windowCenter            // 渲染进程
    └─index                   // 应用入口
```
