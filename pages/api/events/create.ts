// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {body, method} = req
  const options = { 
    headers: {
      "Content-Type": "application/json"
    },
    method: method,
    body: JSON.stringify(body)
  }
  const response = await fetch(`http://13.124.24.197/390QA/event`,options)
  res.status(200).json({msg: "업로드가 완료 되었어요!"})
}
