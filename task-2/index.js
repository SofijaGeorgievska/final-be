const express = require("express")
const {expressjwt: jwt} = require("express-jwt")

const connectDB = require("./pkg/db/config")
connectDB()

const {login, register, refreshToken, resetPassword} = require("./handlers/auth")
const { getAllCourses, createCourse, updateCourse, removeCourse } = require("./handlers/courses")
const {getSection} = require("./pkg/config/index")

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.use(jwt({
	secret: getSection("development").jwt_secret,
	algorithms: ["HS256"]
}).unless({ path: ["/auth/login", "/auth/register", "/auth/reset", "/academy"]
}))


app.get("/", (req, res) => res.send("Hello World"));

// Authorization routes
app.post("/auth/login", login)
app.post("/auth/register", register)
app.post("/auth/refresh", refreshToken)
app.post("/auth/reset", resetPassword)

// Courses routes
app.get("/courses", getAllCourses);
app.post("/courses", createCourse);
app.put("/courses/:id", updateCourse);
app.delete("/courses/:id", removeCourse);

app.listen(getSection("development").port,  ()=> console.log(`Server has started at port ${getSection("development").port}`))