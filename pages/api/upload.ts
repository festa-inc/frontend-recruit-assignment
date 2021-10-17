// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method=="POST"){
        const data = await req.body
        
        const result = await fetch(`http://13.124.24.197/AE391/event`,{
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body:data,
        })
        res.status(200).end("전송")
    }
    
}

