import cards from "../models/cards.js"
import asyncWrapper from "../middleware/async.js"
import { createCustomError } from "../errors/custom-error.js"

const getRoot = asyncWrapper( async(req, res) => {
  res.status(200).send("Hello World!!!")
})

const createCard = asyncWrapper( async(req, res) => {
  const card = await cards.create(req.body)
  res.status(201).json(card)
})

const getAllCards = asyncWrapper( async(req, res) => {
  const allCards = await cards.find()
  res.status(200).json(allCards)
})

export {
  getRoot,
  createCard,
  getAllCards,
}