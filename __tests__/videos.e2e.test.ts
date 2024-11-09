import { req } from './default.e2e.test'
import SETTINGS from '../src/settings'
import { setDBForTests } from './setDBForTests'
import { dataset } from './datasets'
import db from '../src/db/db'

const newVideoData = {
  title: 'Test title',
  author: 'test author',
  availableResolutions: ['P720', 'P1080'],
}
const newVideoDataWithError = {
  title: '',
  author: 'test author',
  availableResolutions: ['P720', 'P1080'],
}
const updatedVideo = {
  title: 'Hello',
  author: 'John',
  canBeDownloaded: true,
  minAgeRestriction: 2,
  createdAt: '2024-11-09T17:39:21.424Z',
  publicationDate: '2024-11-09T17:39:21.424Z',
  availableResolution: ['P1080'],
}

beforeEach(() => {
  setDBForTests(dataset)
})

describe('/videos', () => {
  it('should get array', async () => {
    const res = await req.get(SETTINGS.PATH.VIDEOS).expect(200)
    expect(res.body.length).toBe(3)
  })
  it('should add new video', async () => {
    const res = await req
      .post(SETTINGS.PATH.VIDEOS)
      .send(newVideoData)
      .expect(201)
    expect(res.body).toMatchObject({
      id: expect.any(Number),
      author: expect.any(String),
      title: expect.any(String),
      canBeDownloaded: expect.any(Boolean),
      minAgeRestriction: null,
      createdAt: expect.any(String),
      publicationDate: expect.any(String),
      availableResolutions: expect.any(Array),
    })
  })
  it('should try add video and return error', async () => {
    const res = await req
      .post(`${SETTINGS.PATH.VIDEOS}`)
      .send(newVideoDataWithError)
      .expect(400)
    expect(res.body).toMatchObject({
      errorsMessages: [
        {
          field: expect.any(String),
          message: expect.any(String),
        },
      ],
    })
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
    await req.delete(`${SETTINGS.PATH.VIDEOS}/${id}`).expect(204)
    expect(db.videos.length).toBe(dbVideoLength - 1)
  })
  it('should update video by id', async () => {
    await req.put(`${SETTINGS.PATH.VIDEOS}/1`).send(updatedVideo).expect(204)
  })
  it('should return error(update video)', async () => {
    req.put(`${SETTINGS.PATH.VIDEOS}/23`).send(updatedVideo).expect(404)
  })
})
