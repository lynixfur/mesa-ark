import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../libs/mongodb'

type Data = {
  servers: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  /* Connect to MongoDB */
  const { db } = await connectToDatabase();

  /* Filter Server Data */
  const servers = await db.collection("servers").find({visible: true, type: '3men'}).project({ name: 1, visible: 1, connection_url: 1, geolocation: 1, server_bg: 1, server_icon: 1, is_online: 1, players: 1 }).toArray();

  /* Send Server Data */
  res.status(200).json(servers)
}
