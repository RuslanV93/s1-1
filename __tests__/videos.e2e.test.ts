import { req } from './default.e2e.test'
import SETTINGS from '../src/settings'

describe('/videos', () => {
  it('should get array', async () => {
    const res = await req.get(SETTINGS.PATH.VIDEOS).expect(200)
    expect(res.body.length).toBe(3)
  })
})

describe('/videos/id', () => {
  it('should get video by id', async () => {
    const id = 1
    const res = await req.get(`${SETTINGS.PATH.VIDEOS}/${id}`).expect(200)
    expect(res.body).toMatchObject([
      {
        id: id,
        author: expect.any(String),
      },
    ])
  })
})
