const express = require(`express`)

const app = express()

app.use(express.static(`${__dirname}/public`))

app.listen(4999, () => console.log(`on port 4999`))