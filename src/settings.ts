import { config } from 'dotenv'
config()

const SETTINGS = {
  PORT: process.env.PORT || 3004,
  PATH: {
    DEFAULT: '/',
    VIDEOS: '/videos',
    VIDEO_BY_ID: '/videos/:id',
  },
}
export default SETTINGS
