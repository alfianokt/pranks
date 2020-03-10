import { NowRequest, NowResponse } from '@now/node'
import oyo from '../../util/oyo'

export default async (req: NowRequest, res: NowResponse) => {
  const request = await oyo(req.query.target)
  res.json(request)
}