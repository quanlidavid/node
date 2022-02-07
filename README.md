# node
fullstack dev
================================================================

[TOC]



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

# Running a Node.js script
```javascript
node index.js
```
# Node.js module system
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
npm install		//install all the dependencies in your project. 安装项目的所有依赖
```
3. ### 安装npm module的特定版本,在后面加@版本号
```javascript
npm install chalk@4.1.2 //安装指定版本
```
# 全局npm module 
>一般是工具,在命令行里运行
```javascript
npm install nodemon -g  //global安装nodemon
nodemon app.js  
//nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.  

npm uninstall -g nodemon	//将nodemon从全局module中删除
npm install nodemon --save-dev	//安装nodemon作为dev dependency。 dev dependency只会安装在本地的开发环境，不会装到production环境
```

# Accessing command line arguments
```javascript
console.log(process.argv)
const command = process.argv[2]
```
# Storing data with JSON
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
# Node Debugger
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

# Call Stack, Callback Queue, Event loop
>Node.js单线程运行Call Stack里面的function， C++用其他线程负责维护Event.
>当event触发，对应的Callback function放到Callback Queue里面.
>Event Loop会检查Call Stack, 等到里面空了之后才会按顺序将Callback Queue里的function加到Call Stack里面去执行.
>所以，所有的callback function都会在main function执行之后才会执行.


# ES6: Object property shorthand
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
# ES6: Object destructuring
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
# ES6: Destructuring function arguments
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
# Useful modules
>1. nodemon  
>是一种工具，可在检测到目录中的文件更改时通过自动重新启动节点应用程序来帮助开发基于 node.js 的应用程序。
```javascript
nodemon src/app.js -e js,hbs  //添加监控的文件后缀名
```
>2. chalk  
> 修改控制台中字符串的样式
>
>3. validator  
> 后端字符串验证模块
>
>4. yargs  
> 处理命令行参数神器
>
>5. request
> Deprecated. HTTP client
>
>6. postman-request
> HTTP client
>
>7. express
> Web application framework
>
>8. hbs
> Express.js view engine for handlebars.js
>
>9. mongodb
> mongodb driver
> 
>10. mongoose
> mongodb object modeling for node.js ODM object document mapper. map object 和 document
>
>11. bcrypt
> hashing algorithm 单向hash加密算法。 encrypt algorithm, 使用加密算法可以解密密码。但是单向hash算法，不可以解密。使用单向第二次和储存的密码作比较，来校验password。
>
>12. jsonwebtoken
> JSON Web Tokens的一个实现。由服务端根据规范生成一个令牌（token），并且发放给客户端。此时客户端请求服务端的时候就可以携带着令牌，以令牌来证明自己的身份信息。
>
>13. multer
> Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
>
>14. sharp
> convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP, GIF and AVIF images of varying dimensions. 
>下载失败： npm缓存路径使用npm config get cache 查询。新建_libvips，把libvips-8.9.0-linux-x64.tar.gz放进去。
>
>15. jimp
> javascript image manipulation program
>
>16. mailgun.js
> Javascript SDK for Mailgun. It also need form-data library
>
>17. enc-cmd
> A simple node program for executing commands using an environment from an env file.
# Git使用
## 1. Initializing Git
```
git init
```
>Git needs to be initialized in your project before it can be used. 
>You can initialize Git inyour project by running `git init` from the root of the project. 
>All Git commands should be run from the root of the project.
## 2. Add .gitignore file
```
# Dependency directories
node_modules/
```
>ignore node module directories
## 3. Show status
```
git status
```
>显示现在的状态. 
>get a summary of the changes that are about to be committed.

## 4. Add to staging area

```
git add src/   	//add src directory
git add .		//add everything
```
>Using `git add <path to file>`, you can add files to the staging area.
>`git add .` this shortcut adds alluntracked files and unstaged changes to the staging area.

## 5. Commit
```
git commit -m "Init commit"
```
>Use `git commit` to create new commits.

## 6. Create SSH Keys
```
ssh-keygen -t rsa -b 4096 -C "xxx@xxx.com"
```
>Use git bash create SSH keys. 产生私钥和公钥，公钥传到要连的server上。
```
eval "$(ssh-agent -s)" 	//show agent pid, ensure ssh agent is running
```
```
ssh-add ~/.ssh/id_rsa	//注册私钥
ssh-add -K ~/.ssh/id_rsa //for mac
```
## 7. Add public SSH key to github

```
ssh -T git@github.com	//test ssh connection to github servers
```

## 8. Pushing code to github
```
git remote add origin git@github.com:quanlidavid/xxxx.git	
//remote表示远程的仓库 add 表示创建 origin表示远程仓库的名字 
//这行命令是创建本地和远程仓库通信的渠道

git branch -M main	//重命名当前分支 早期默认是master后来改名叫main了

git push -u origin main
//push 表示推送本地commits到给定的远程仓库
//origin是远程仓库名字
//main是远程的分支名
//-u表示将origin仓库的main分支设置为本地仓库当前分支的upstream上游。以后就可以省掉git push后面的参数。
```
## 9. Show all remote repo
```
git remote
```
# Heroku
> The `start` script in `package.json` is used to tell Heroku which command to run.
```
"start": "node src/app.js"
```
> `npm run start` 运行start脚本， in local to start server，heroku就是运行start脚本来运行nodejs程序.

```
"dev": "nodemon src/app.js -e js,hbs"
```

> `npm run dev` 运行dev脚本，使用dev依赖的module nodemon 运行程序。

> Heroku uses an enviroment variable to provide the port value need to listen on.
```
const port = process.env.PORT || 3000
app.listen(port, ()=>{
	console.log('Server is up on port ' + port)
})
```
> Install Heroku CLI  
> Use `heroku login -i` to login heroku.  
> Use `heroku keys:add` to add ssh key to heroku.  
> Use `heroku create quan-weather-application` to create a new application and set up a new heroku git remote.  
> Use heroku config to configure environment variables
```
heroku config //view config vars
heroku config:set key=value	//set config var
heroku config:unset key	//delete config var
heroku config:set JWT_SECRET=dasfdasff4341 MAILGUN_API_KEY=dasfdasfdasfdasf
heroku config:set MONGODB_URL="mongodb+srv://xxx:xxx@cluxxx.mongodb.net/task-manager?retryWrites=true&w=majority"
```
> Use `git push heroku main` to deploy node.js to heroku.

# New feature development workflow
1. develop new feature
2. ensure work in local env
3. `git status` 查看变化
4. `git add .` 添加变化到stage area
5. `git commit -m "xxx"` commit
6. `git push` 推送到远程github仓库
7. `git push heroku main` 推送到远程heroku仓库

# MongoDB and NoSQL database
>Collection
>Document
>Field

Start DB
`E:\nodedev>mongodb\bin\mongod.exe --dbpath=mongodb-data`

Install database gui viewer.  https://robomongo.org/

```
const mongodb = require('mongodb');		//mongodb driver npm
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

//connect to server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!');
	}
	const db = client.db(databaseName);		//client.db to use specific database
	db.collection('users').insertOne({
		name: 'David',
		age: 36
	});
});
```
# Promises
>Promises provide a much needed alternative to the traditional callback pattern.
>						 						fulfilled
>						         			/	
>Promise  -- pending	-->
>											\
>						 						rejected

# The REST API
| The task resource | comon rest api structure |
| ----------------- | ------------------------ |
| Create            | POST       /tasks        |
| Read              | GET         /tasks       |
| Read              | GET         /tasks/:id   |
| Update            | PATCH   /tasks/:id       |
| Delete            | DELETE /tasks/:id        |

# Middleware
>without middlwware: 	  new request -> run router handler
>with middleware:		      new request -> do something -> run route handler

# Environment Variables
>Use .env files to store environment variables，使用环境变量代替动态值
```
process.env.MAILGUN_API_KEY
process.env.JWT_SECRET
process.env.PORT
process.env.MONGODB_URL
```
>script: `"dev": "env-cmd -f ./config/dev.env nodemon src/index.js -e js,hbs"`
```
//dev.env 文件
PORT=3000
MAILGUN_API_KEY=xx
MONGODB_URL=mongodb://127.0.0.1:27017
JWT_SECRET=signiture
```