import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('Add Mongo URI to .env.local')
}

let clientPromise

// Check if we're in development or production
if (process.env.NODE_ENV === 'development') {
  // Use a global variable to maintain the connection during hot reloading in development
  if (!global._mongooseClientPromise) {
    global._mongooseClientPromise = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  clientPromise = global._mongooseClientPromise
} else {
  // Production: use the regular client connection
  clientPromise = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
clientPromise
  .then(() => {
    console.log('MongoDB connected successfully!')
  })
  .catch((err) => {
    console.error('MongoDB connection failed', err)
  })

export default clientPromise
