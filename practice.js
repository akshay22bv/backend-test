const express = require("express");
const app = express();

const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

const isAdmin = (req, res, next) => {
  const userRole = req.headers.role;
  if (userRole === "admin") {
    next();
  } else {
    res.send("Only for admin users");
  }
};

app.use(isAdmin);

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("akshay");

app.get("/", (req, res) => {
  //   console.log("req: ", req.requestTime);
  res.send(`Requested time:`);
});

app.listen(4444);
