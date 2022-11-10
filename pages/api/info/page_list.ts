import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../libs/mongodb'

type Data = {
    page_list: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { db } = await connectToDatabase();

    const page_list = await db.collection("pages").find({}).project({ str_id: 1, page_icon: 1, title: 1 }).toArray();
    res.status(200).json(page_list)
}
  