# umi project of monorepo

## 开始

安装依赖和启动服务
```bash
$ yarn

$ yarn dev:[prjName] // 如： yarn run dev:admin

$ yarn build:[prjName] // 如： yarn run build:admin
```
## 目录结构
```
.
├── package.json
├── .umirc.ts
├── .tsconfig.json
├── gen.config.json
├── dist
└── packages
        ├── common
            ├── components    - 公共组件
            ├── utils         - 公共工具
            ├── assets        - 公共静态文件
            ├── api           - 公共接口
            └── config        - 公共配置
        ├── admin             - [运营端]
            ├── .umi
            ├── routes        - 路由配置
            ├── constants/    - 
            ├── models/       - 公共models状态管理目录
            ├── pages      
                ├── index.less
                └── index.tsx
            └── app.ts        - 页面数据初始化文件
        ├── supplier             - [供应商端]
            ├── .umi
            ├── routes        - 路由配置
            ├── constants/    - 
            ├── models/       - 公共models状态管理目录
            ├── pages      
                ├── index.less
                └── index.tsx
            └── app.ts        - 页面数据初始化文件
        ├── purchase             - [采购商端]
            ├── .umi
            ├── routes        - 路由配置
            ├── constants/    - 
            ├── models/       - 公共models状态管理目录
            ├── pages      
                ├── index.less
                └── index.tsx
            └── app.ts        - 页面数据初始化文件
        ├── home             - [门户主页]
            ├── .umi
            ├── routes        - 路由配置
            ├── constants/    - 
            ├── models/       - 公共models状态管理目录
            ├── pages      
                ├── index.less
                └── index.tsx
            └── app.ts        - 页面数据初始化文件
```

## 使用说明
### 1.ahooks
本项目默认添加了ahooks,提供了很多方便快捷的React Hooks工具，详细API参考[文档](https://ahooks.js.org/zh-CN)
### 2.路由和权限
通过插件@umijs/plugin-access实现（依赖@umijs/plugin-model和@umijs/plugin-initial-state）
项目中使用配置式路由，通过配置路由的access字段可实现页面访问权限控制（uri标识由src/access.ts中文件返回），
更细粒度的页面内模块权限控制可通过useAccess和Access组件实现，详情参考：https://umijs.org/zh-CN/plugins/plugin-access，
功能依赖：
- @umijs/plugin-model：一种基于hooks范式的简易数据状态管理，详情参考[文档](https://umijs.org/zh-CN/plugins/plugin-model)
- @umijs/plugin-access：权限控制，可以控制页面和模块功能级别权限管理，详情参考[文档](https://umijs.org/zh-CN/plugins/plugin-access)
- @umijs/plugin-initial-state：约定app.ts生产和消费初始化数据。详情参考[文档](https://umijs.org/zh-CN/plugins/plugin-initial-state)
### 3.状态管理
通过插件@umijs/plugin-model管理，使用方式详情参考[文档](https://umijs.org/zh-CN/plugins/plugin-model)

## 注意事项
### 1.配置路径别名记得同时修改.umirc.ts和tsconfig.json文件


