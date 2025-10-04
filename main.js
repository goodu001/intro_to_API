const express = require('express')
const db = require('./db.js')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/models', (req, res) => {
    const statement = db.prepare("SELECT * FROM models")
    const result = statement.all()
    res.json(result)
})

app.post('/', (req, res) => {
    const name = req.body.name
    const description = req.body.description

    const statement = db.prepare("INSERT INTO models (name, description) VALUES (?,?)")
    const result = statement.run(name, description)
    res.json(result)
})

app.patch('/models/:id', (req, res) => {
    // const id = req.params.id
    const {id} = req.params

    // const title = req.body.title
    const {title} = req.body

    const statement = db.prepare("UPDATE models SET name = ? WHERE id = ?")
    const result = statement.run(title, id)
    res.json(result)
})

app.delete("/models/:id", (req, res) => {
    const {id} = req.params
    const statement = db.prepare("DELETE FROM models WHERE id = ?")

    const result = statement.run(id)
    res.json(result)
})

app.listen(3000, () => {
    console.log("Application Start at http://localhost:3000")
})
