import { req } from './default.e2e.test'
import SETTINGS from '../src/settings'
import { setDBForTests } from './setDBForTests'
import { dataset } from './datasets'

import db from '../src/db/db'

beforeAll(() => {
  setDBForTests(dataset)
})

describe('/videos', () => {
  it('should get array', async () => {
    const res = await req.get(SETTINGS.PATH.VIDEOS).expect(200)
    expect(res.body.length).toBe(3)
  })
})

describe('/videos/id', () => {
  it('should get video by id', async () => {
    const id = db.videos[0].id
    const res = await req.get(`${SETTINGS.PATH.VIDEOS}/${id}`).expect(200)
    expect(res.body).toMatchObject({
      id: expect.any(Number),
      author: expect.any(String),
      title: expect.any(String),
      canBeDownloaded: expect.any(Boolean),
      minAgeRestriction: expect.any(Number) || null,
      createdAt: expect.any(String),
      publicationDate: expect.any(String),
      availableResolution: expect.any(Array),
    })
  })
  it('should return error(undefined id)', async () => {
    const id = 'hello'
    const res = await req.get(`${SETTINGS.PATH.VIDEOS}/${id}`).expect(404)
    expect(res.status).toBe(404)
  })

  it('should delete video by id', async () => {
    const dbVideoLength = db.videos.length
    const id = db.videos[1].id
    console.log(db.videos)
    const res = await req.delete(`${SETTINGS.PATH.VIDEOS}/${id}`).expect(204)
    expect(db.videos.length).toBe(dbVideoLength - 1)
  })
})
