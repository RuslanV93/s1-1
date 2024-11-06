import {app} from '../src/app'
import {agent} from 'supertest'
import SETTINGS from "../src/settings";

export const req = agent(app)

describe('/', () => {
  it('should get app version', async() => {
    const res = await req
      .get(SETTINGS.PATH.DEFAULT)
      .expect(200)
    expect(res.body.version).toBe("1.0")
  })
})