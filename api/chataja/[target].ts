import { NowRequest, NowResponse } from '@now/node'
import chataja from '../../util/chataja'

export default async (req: NowRequest, res: NowResponse) => {
  const request = await chataja(req.query.target)
  res.json(request)
}