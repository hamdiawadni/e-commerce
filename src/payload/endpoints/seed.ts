import type { PayloadHandler } from 'payload/config'

import { seed as seedScript } from '../seed'




import payload from 'payload'

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

async function createAdminUser() {
  try {
    const newUser = await payload.create({
      collection: 'users',  // The slug of the Users collection
      data: {
        email: 'sarra.mejdi@insat.ucar.tn',  // Replace with a valid email
        password: 'azerty',  // Replace with a strong password
        roles: ['admin'],  // Setting the user as an admin
        name: 'Sarrar',
      },
    });
    console.log('Admin user created:', newUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

createAdminUser();
