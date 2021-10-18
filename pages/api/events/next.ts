// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  id: number,
  name: string,
  imageUrl: string,
  startDate: Date,
  email: string,
  price: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query: { first, skip } } = req
  const response = await fetch(`http://13.124.24.197/390QA/events?first=10&skip=${skip}`)
  const data = await response.json()
  res.status(200).json(data)
}
