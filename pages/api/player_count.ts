import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../libs/mongodb'

type Data = {
    
}

export default async function handler(  req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { db } = await connectToDatabase();

    const servers = await db.collection("servers").find({}).project({ is_online: 1, players: 1, arkservers_api_key: 1 }).toArray();
    
    var global_count: number = 0;

    servers.forEach(async (server: any) => {
        global_count += parseInt(server.players);
        console.log(`Players : ${server.players}`);
    })

    res.status(200).json({players: global_count})
}
  