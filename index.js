const koa = require('koa')
const bodyParser = require('koa-body')
const router = require('./src/routes/index')


const app = new koa()
const port = 3000

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})

