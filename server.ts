import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

const start = async (): Promise<void> => {
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      console.info(`Next.js is now building...`)
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
    console.info('Next.js started')

    app.listen(PORT, async () => {
      console.info(`listening on port ${PORT}`)
    })
  })
}

start()