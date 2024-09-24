import dotenv from 'dotenv'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'


dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import express from 'express'
import payload from 'payload'

import { seed } from './payload/seed'

const app = express()
const PORT = process.env.PORT || 3000

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    mongoURL: process.env.MONGODB_URI || 'mongodb+srv://66e3d2d4aac063dec495c34a-prod:3d4cb3e9e3da5783c99b9316105b3b@66e3d2d4aac063dec495c34.ioanbsg.mongodb.net/66e3d2d4aac063dec495c34a-prod', // Add mongoURL here        //mongoURL: process.env.MONGODB_URI || 'mongodb+srv://66e3d2d4aac063dec495c34a-prod:3d4cb3e9e3da5783c99b9316105b3b@66e3d2d4aac063dec495c34.ioanbsg.mongodb.net/66e3d2d4aac063dec495c34a-prod', // Add mongoURL here

    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload)
    process.exit()
  }

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}
dotenv.config();  // Load environment variables from your .env file

async function runServer() {
  // Initialize Payload with your existing configuration
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,   // Ensure you have the secret defined
    mongoURL: process.env.DATABASE_URI,   // Your MongoDB connection string
    express: require('express')(),        // If you're using Express, you can provide it here
    onInit: async () => {
      console.log('Payload initialized. Running seed...');
      await seed(payload);  // Call the seed function with the initialized payload instance
    },
  });

  // Start the server
  const port = process.env.PORT || 3000;
  payload.logger.info(`Server listening on port ${port}`);
}

runServer();

start()