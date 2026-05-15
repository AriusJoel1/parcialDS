import Fastify from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'

const app = Fastify({
  logger: true
})

app.register(cors, {
  origin: true
})

app.register(multipart)

app.get('/', async () => {
  return {
    message: 'API funcionando correctamente'
  }
})

const start = async () => {
  try {
    await app.listen({
      port: 3000,
      host: '0.0.0.0'
    })

    console.log('Servidor ejecutándose en puerto 3000')
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()