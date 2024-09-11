// https://jimmysweeney.page/blog/serve-ssr-astro-app-vps/
import express from 'express'

import { handler as ssrHandler } from './dist/server/entry.mjs'

const app = express()

const PORT = process.env.PORT || 3000

app.use('/', express.static('dist/client/'))

app.use(ssrHandler)

app.listen(PORT)
