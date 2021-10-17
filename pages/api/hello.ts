// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {page} = req.query
  const res1 = await fetch(`http://13.124.24.197/AE391/events?first=20&skip=${Number(page)*20}`)
  const data = await res1.json()
  res.status(200).json(data)
}
