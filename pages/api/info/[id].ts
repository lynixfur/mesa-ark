import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../libs/mongodb'

type Data = {
    page_data: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    const { db } = await connectToDatabase();
    
    const page_data = await db.collection("pages").findOne({str_id: id});

    res.status(200).json(page_data)
}
  