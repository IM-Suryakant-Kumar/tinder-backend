import express from "express"
import {
  getRoot,
  createCard,
  getAllCards,
} from "../controllers/cards.js"

const router = express.Router()

router.route("/").get(getRoot)
router.route("/tinder/card").post(createCard)
router.route("/tinder/cards").get(getAllCards)

export default router