import express, { request, response } from "express";
import cors from 'cors';
import mongoose from 'mongoose';

import Client from "./models/Client.js";
import Title from "./models/Title.js";

const app = express()

app.use(cors())
app.use(express.json())

// Methods HTTP clients
app.get("/clients", async function (request,response)  {
  const clients = await Client.find()
  response.header('Access-Control-Allow-Origin', '*');
  return response.json(clients)
})

app.post("/clients", async function (request,response)  {
  const client = request.body;

  const newUser = await Client.create(client)

  return response.status(200).json({newUser})
})

app.delete("/clients/:id", async function (request,response) {
  const id = request.params.id

  await Client.findByIdAndDelete({ _id: id})

  return response.status(200).json({ response: "Cliete deletado" })
})

// Methods HTTP titles
app.get("/titles", async function (request,response)  {
  const titles = await Title.find()
  response.header('Access-Control-Allow-Origin', '*');
  return response.json(titles)
})

app.post("/titles", async function (request,response)  {
  const title = request.body;

  const newUser = await Title.create(title)

  return response.status(200).json({newUser})
})

app.delete("/titles/:id", async function (request,response) {
  const id = request.params.id

  await Title.findByIdAndDelete({ _id: id})

  return response.status(200).json({ response: "Título deletado" })
})

// Methods Locations

app.put("/titles/alugar/:id", async (request, response) => {
  const id = request.params.id

  const amount = Number(request.body.amount) - 1
  console.log(amount)

  await Title.findByIdAndUpdate({ _id: id}, { amount: amount})

  return response.status(200).json('Titulo alugado')
})

app.put("/titles/devolver/:id", async (request, response) => {
  const id = request.params.id

  const amount = request.body.amount + 1

  await Title.findByIdAndUpdate({ _id: id}, { amount: amount})

  return response.status(200).json('Titulo devolvido')
})



mongoose
  .connect(
    'mongodb+srv://hectoremanuelfb:DHPMBfj4Fpn2HKdw@cluster0.zwwgo2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then( () => console.log("Banco de dados conectado"))
  .catch( () => console.log("Não foi possivel conectar ao banco"))

app.listen(3000)

