# vat-cli

#### 项目介绍

vat-cli = vue-admin-template command-line interface

用来练手的生成[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)项目的一个cli program



#### 使用方法

1. clone到本地
2. 在项目目录下安装依赖(`npm install` 或 `yarn`)

3. 链接到全局环境 (`npm link` 或 `yarn link`)
4. 终端执行`vat-cli`



#### 实现思路

1. 依赖[inquirer](https://www.npmjs.com/package/inquirer)模块提供命令行交互，询问使用者以下4个问题：

   + 项目名称 name
   + 项目描述 description
   + 版本 version
   + 作者 author
   + 默认端口号 port

   其中项目名称会作为项目的文件名来生成，其他信息后续通过处理注入到对应的文件内容中。

2. 通过[download-git-repo](https://www.npmjs.com/package/download-git-repo)下载模版文件到指定的项目目录中，这里提前将模版文件存放在[仓库](https://github.com/simpul/vat-template)里，在生成的时候去下载

3. 通过[ejs](https://www.npmjs.com/package/ejs)修改一些指定文件的内容，将使用者提供的相关信息进行注入。其中涉及到的文件有：

    + vue-admin-template/src/settings.js
    + vue.config.js
    + package.json


