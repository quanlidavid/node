# node
fullstack dev
================================================================

## github 报错解决
    git config --global http.sslVerify false
## javascript中的==与===
>"=="的比较规则
>1. 先检查两个操作数的数据类型是否相同
>2. 如果相同，则比较两个数是否相等
>3. 如果不同，则先将两个数转换为相同数据类型，再进行比较  
    ![avatar](/images/==.png)  

>"==="的比较规则
>1. 先检查两个操作数的数据类型是否相同
>2. 若不同，直接返回false
>3. 若相同，则比较二者是否相等  
![avatar](/images/===.png)  

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
//或者
npm init -y //会使用默认值初始化
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

* # Accessing command line arguments
```javascript
console.log(process.argv)
const command = process.argv[2]
```
* # Storing data with JSON
>JSON is nothing more than a string, it can be used to store data in a text file or
transfer data via an HTTP requests between two machines.  
>JSON.stringify converts a JavaScript object into a JSON string.
>JSON.parse converts a JSON string into a JavaScript object.
```javascript
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//Covert JavaScript object into a JSON string
const bookJSON = JSON.stringify(book)

//Convert JSON string into a object
const bookObject = JSON.parse(bookJSON)
```
>JSON和JavaScript对象很像,但是他们最大的不同是,JSON所有的属性都使用双引号括起来的,JSON不能使用单引号.
```javascript
//javascript 对象
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//JSON
{"title":"Ego is the Enemy","author":"Ryan Holiday"}
```
* # Node Debugger
>Node.js ships with a built-in debugger. 
>It builds off of the developer tools that Chrome and V8 use when debugging JavaScript code in the browser.
```javascript
console.log('Thing one')
debugger    //Debug tools will pause here until your click play again
console.log('Thing two')
```
```javascript
node inspect app.js     //start app with inspect to use the debugger
```
>Visit chrome://inspect in the CHrome browser. 
>Click "inspect" to open up the developer tools.

* # Call Stack, Callback Queue, Event loop
>Node.js单线程运行Call Stack里面的function， C++用其他线程负责维护Event.
>当event触发，对应的Callback function放到Callback Queue里面.
>Event Loop会检查Call Stack, 等到里面空了之后才会按顺序将Callback Queue里的function加到Call Stack里面去执行.
>所以，所有的callback function都会在main function执行之后才会执行.


* # ES6: Object property shorthand
>The property shorthand makes it easier to define properties when creating a new object.   
>It provides a shortcut for defining a property whose value comes from a variable of the same name.   
>You can see this in the example below where a user object is created. The userName
property gets its value from a variable also called userName.
```javascript
const userName = 'Andrew';
const age = 27;

const user = {
	userName,
	userAge: age,
	location: 'Philadelphia'
};
```
* # ES6: Object destructuring
>Object destructuring gives you a syntax for pulling properties off of objects and into standalone variables.   
>This is useful when working with the same object properties throughout your code. Instead of writing product.label a dozen times, you could destructure the property into a productLabel variable.
```javascript
//object destructuring
const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined
};
const { label: productLabel, stock, rating = 5 } = product; //The label property has been destructured and stored in productLabel, =5 is a default value for rating
console.log(productLabel);
console.log(stock);
console.log(rating);
```
* # ES6: Destructuring function arguments
>If an object is passed into a function, it can be destructured inside the function definition.   
>The function accepts an object as its second argument. The label and
stock properties have both been destructured into standalone variables that become
available in the function.
```javascript
const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined
};
const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};
transaction('order', product);
```
* # Useful modules
>1. nodemon  
>是一种工具，可在检测到目录中的文件更改时通过自动重新启动节点应用程序来帮助开发基于 node.js 的应用程序。
```javascript
nodemon src/app.js -e js,hbs  //添加监控的文件后缀名
```
>2. chalk  
>修改控制台中字符串的样式
>3. validator  
>后端字符串验证模块
>4. yargs  
>处理命令行参数神器
>5. request
>Deprecated. HTTP client
>6. postman-request
>HTTP client
>7. express
>Web application framework
>8. hbs
>Express.js view engine for handlebars.js