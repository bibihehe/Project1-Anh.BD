const express = require('express')
const app = new express()
const expressSession = require('express-session'); 

// const path = require('path')
const newPostController = require('./controllers/newPost')

const homeController = require('./controllers/home') 
const homeadminController = require('./controllers/homeadmin') 
const storePostController = require('./controllers/storePost') 
const deletestorePostController = require('./controllers/deletestorePost') 
const giohangController = require('./controllers/giohang')

const getPostController = require('./controllers/getPost') 
const deletePostController = require('./controllers/deletePost') 
const updatePostController = require('./controllers/updatePost') 


const newUserController = require('./controllers/newUser') 
const storeUserController = require('./controllers/storeUser') 
const loginController = require('./controllers/login') 
const loginUserController = require('./controllers/loginUser') 
const ejs = require('ejs')  
app.set('view engine', 'ejs')
//kết nối db
const mongoose = require('mongoose');
// const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
// upload ảnh
const fileUpload = require('express-fileupload') 
app.use(fileUpload()) 
// body parser
const bodyParser = require('body-parser') 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true})) 
//Đăng ký thư mục public.....
app.use(express.static('public'))

//Tao server
app.listen(4000, () => {
    console.log('OK. App listening on port 4000')
})
// tạo module
app.use(expressSession({     
    secret: 'keyboard cat' }))

// đã đăng nhập là k có login
global.loggedIn = null; 
app.use("*", (req, res, next) => {     
    loggedIn = req.session.userId;     
    next() 
});

// app.get('/', (request, response) => {
//     response.render('index')
// })
const validateMiddleware = require("./middleware/validationMiddleware"); 
app.use('/posts/store', validateMiddleware) 
const authMiddleware = require('./middleware/authMiddleware')
app.get('/posts/new', authMiddleware, newPostController) 
app.post('/posts/store', authMiddleware, storePostController) 

const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware') 
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController) 
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController) 
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController) 
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController) 

// logout
const logoutController = require('./controllers/logout') 
app.get('/auth/logout', logoutController) 

app.get('/', homeController) 
app.get('/ad',homeadminController)


app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/post/:id', getPostController) 
app.get('/delete/:id', deletePostController) 
app.get('/update/:id', updatePostController) 





app.get('/posts/new',newPostController)


app.post('/posts/store', storePostController)
// app.post('/posts/deletestore', deletestorePostController)


app.get('/auth/register', newUserController)
app.post('/users/register', storeUserController) 
app.get('/auth/login', loginController); 
app.post('/users/login',loginUserController)

// mua hàng

//giohang

app.get('/giohang/:id', giohangController) 
 


