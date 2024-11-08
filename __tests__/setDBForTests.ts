import db, { DBType } from '../src/db/db'
import { dataset } from './datasets'

export const setDBForTests = (dataset?: Partial<DBType>) => {
  console.log(dataset)
  if (!dataset) {
    db.videos = []
    return
  }
  db.videos = dataset.videos || db.videos
}
