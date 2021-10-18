// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable';

interface Data {
    fields: string,
    files: string
}
export const config = {
    api: {
      bodyParser: false,
    },
}
  
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query: { name, width, height }, method, body} = req
 
  const form = new formidable.IncomingForm();
  form.parse(req, async (err: any, fields: any, files: any) => {
    // console.log(fields)
    // console.log(files)
    const options = {
        method: method,
        body: files.image,
      }
    const response = await fetch(`http://13.124.24.197/390QA/image?name=${name}&width=${width}&height=${height}`,options)
    console.log(files , fields)
    res.status(200).json({ fields, files })
  })

//   console.log(req)
//   res.status(200).json(data)
}

