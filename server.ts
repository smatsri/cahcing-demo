import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'
import express from 'express'
import { initTodos } from './lib/todos/init'
import logger from './lib/utils/logger'

const app = express()
const PORT = process.env.PORT || 3000

const start = async (): Promise<void> => {
  try {
    logger.info('Starting server...')
    const success = await initTodos()
    if (!success) {
      throw new Error('Failed to initialize todos');
    }

    if (process.env.NEXT_BUILD) {
      app.listen(PORT, async () => {
        logger.info('Next.js is now building...')
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

    app.get('*', (req: any, res: any) => nextHandler(req, res))

    nextApp.prepare().then(() => {
      logger.info('Next.js started')

      app.listen(PORT, () => {
        logger.info(`Listening on port ${PORT}`)
      })
    })
  } catch (error) {
    logger.error('Error occurred during startup:', error);
  }
}

start()
