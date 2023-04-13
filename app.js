const express = require('express')
const cors = require("cors")
const app = express()
const cars = require("./cars.json")


app.get("/", (req,res) => {
    res.send("Welcome to my cars api :)")
})
//Msg will be returned if only / was entered after 3000

app.get("/cars", (req,res) =>{
    res.send(cars)
})
// displays the car info

// app.get("/cars/:id", (req,res) => {
//     //need to gather what id was put
//     const userId = req.params.id
//     //need to find id num from array
//     //compare entered id to array id and find it
//     const id = cars.find(id => id.id === userId)
//     console.log(id)
//     res.send(id)


// })

app.get("/cars/:name", (req,res) => {
    //need to gather what id was put
    const name = req.params.name.toLowerCase()
    //need to find id num from array
    //compare entered id to array id and find it
    const make = cars.find(make => make.make.toLowerCase() === name)
    console.log(make)
    res.send(make)


})

module.exports = app