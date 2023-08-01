const express = require("express")

const app = express();


app.get("/home", (request, response) => {
    response.sendFile(__dirname + '/views/home-page.html')
})

app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html')
})

app.get("/works", (request, response) => {
    response.sendFile(__dirname + '/views/works-page.html')
})

app.get("/photo-gallery", (request, response) => {
    response.sendFile(__dirname + '/views/photo-gallery-page.html')
})

// app.get("/api", (request, response) => {
//     response.send(
//         {
//             userName: "Edna",
//             role: "The best student",
//             location: "Ironhack"
//         }
//     )
// })

// fetch('http://localhost:3000/api')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log("Parsed response: ", data)

//         for (const key in data) {
//             const element = data[key];
//             const liElement = document.createElement("li")
//             liElement.innerHTML = data[key]
//             const ulElement = document.getElementById("user-info")
//             ulElement.appendChild(liElement)
//         }
//     })

app.use(express.static("public"))
app.use(express.static("views"))
app.use(express.static("style"))
app.use(express.static("images"))


app.listen(3000, () => {
    console.log("Trying the server");
})