import express from 'express'

const app = express()

app.get('/', (_, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(3333, () =>
  console.log('🔥 Server stared at http://localhost:3333!'),
)
