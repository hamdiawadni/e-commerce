/* eslint-disable @typescript-eslint/no-shadow */
import payload from 'payload'
import type { PayloadHandler } from 'payload/config'

// eslint-disable-next-line import/namespace, @typescript-eslint/no-unused-vars
import { Page, User } from '../payload-types'
import { seed as seedScript } from '../seed'

export const seed: PayloadHandler = async (req, res): Promise<void> => {
  const { user, payload } = req

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  try {
    await seedScript(payload)
    res.json({ success: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    payload.logger.error(message)
    res.json({ error: message })
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const createUser = async () => {
  await payload.create({
    collection: 'users',
    data: {
      email: 'sarra.mejdi@insat.ucar.tn',
      password: 'azerty',
      firstName: 'Sarra',
      roles: ['admin'],
    },
  })
}

createUser().catch(console.error)
