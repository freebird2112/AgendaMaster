const koa = require('koa')
const cors = require('@koa/cors');
const bodyParser = require('koa-body')
const router = require('./src/routes/index')


const app = new koa()
const port = 4000

app.use(cors());
app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(4000, () => {
    console.log(`Server is running on port ${port}`)
})

