import express from "express"
import connectDB from "./db/connect.js"
import cards from "./routes/cards.js"
import notFound from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js"
import Cors from "cors"
// App Config
const app = express()

// MiddleWares
app.use(express.json())
app.use(Cors())

// Route
app.use("/", cards)
app.use(notFound)
app.use(errorHandlerMiddleware)


// Listener
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://admin:z3YF5k8dU72QrK73@cluster0.5w9rh24.mongodb.net/tinderdb?retryWrites=true&w=majority"

const start = async() => {
  try {
    await connectDB(connection_url)
    app.listen(port, () => console.log(`Listening on localhost: ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()