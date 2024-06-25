import express from 'express'
import cors from 'cors'
import router from './rutas/rutas.js'

//middlewares

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api', router)

app.listen(3000, ()=>{
    console.log(`server on port http://localhost:${3000}`)
})