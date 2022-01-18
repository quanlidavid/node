# node
fullstack dev
================================================================

## github 报错解决
    git config --global http.sslVerify false


* # Running a Node.js script
```javascript
node index.js
```
* # Node.js module system
## 1. Node.js core modules
>Use require to load core modules/built-in modules.
```javascript
const fs = require('fs')  //load in the fs module 
fs.writeFileSync('notes.txt','I live in Philadelphia')
```
## 2. Your own files
>using require with module.exports.
```javascript
//utils.js
const check = function(){
    console.log('Doing work...')
}
module.exports = check
```
```javascript
//app.js
const checkUtils = require('./src/utils.js')
checkUtils()
```
## 3. npm modules
>When you install Node.js, you also get npm. npm is a package manager that allows you to install and use third-party npm libraries in your code.  

1. ### npm初始化

```javascript
npm init    //run from the root of your project初始化npm, 使用npm module之前需要初始化npm. It will generate a package.json file in the root of your project.
```
2. ### npm安装
>First, it creates a node_modules directory. npm uses this directory to store all the code for the npm modules you have installed.  
Second, npm adds the module as a dependency by listing it in the dependencies
property in package.json. This allows you to track and manage the module you have installed.  
Third, npm creates a package-lock.json file. This includes detailed information about the
modules you’ve installed which helps keep things fast and secure.  
You should never make changes to node_modules or package-lock.json. Both are
managed by npm and will get changed as you run npm commands from the terminal.
```javascript
npm i validator //local 安装npm module validator 最新版本
npm install chalk //local 安装npm module chalk 
npm list //列出安装的npm module
```
3. ### 安装npm module的特定版本,在后面加@版本号
```javascript
npm install chalk@4.1.2 //安装指定版本
```
* # 全局npm module 
>一般是工具,在命令行里运行
```javascript
npm install nodemon -g  //global安装nodemon
nodemon app.js  
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.  
```
