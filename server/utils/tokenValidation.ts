import { createHash } from 'crypto'

export function isValidServiceToken(token, service) {
  // This is a basic implementation. In a production environment, 
  // you might want to use a more sophisticated method, possibly involving a database.
  
  const currentTimestamp = Date.now()
  const tokenLifespan = 5 * 60 * 1000 // 5 minutes in milliseconds

  // Check all possible valid tokens within the last 5 minutes
  for (let i = 0; i < tokenLifespan; i += 1000) { // Check every second
    const timestamp = currentTimestamp - i
    const expectedToken = createHash('sha256')
      .update(`${service}-${timestamp}-${process.env.SECRET_KEY}`)
      .digest('hex')
    
    if (token === expectedToken) {
      return true
    }
  }

  return false
}