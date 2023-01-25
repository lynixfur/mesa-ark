import { PrismaClient, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

type Data = {
    pagination: any,
    ranking_data: any
}
  
type Page = any;
type CurrentPage = string;
type Search = any;
type SortBy = any;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const search = req.query.search ? req.query.search : ""
  const ranking_data = await prisma.advancedachievements_playerdata.findMany({
    orderBy: req.query.sort_by ? JSON.parse(req.query.sort_by as SortBy) : {},
    skip: 15 * (req.query.page as Page ? req.query.page as Page : 0), // Page ID
    take: 15,
    where: {
      PlayerName: {
        contains: search as Search
      }
    },
    select: {
      SteamID: false,
      PlayerName: true,
      TribeName: true,
      TribeID: true,
      PlayTime: true,
      PlayerKills: true,
      DinoKills: true,
      WildDinoKills: true,
      DinosTamed: true,
      DeathByPlayer: true,
      DeathByDino: true,
      DeathByWildDino: true, 
    },
  });
  //const result = await prisma.$queryRaw`SELECT * FROM advancedachievements_playerdata WHERE PlayerName like "%${search}%"`
  
  const safe_ranking_data = JSON.parse(JSON.stringify(ranking_data, (key, value) =>
  typeof value === 'bigint'
      ? value.toString()
      : value // return everything else unchanged
    ));

    const current_page = (req.query.page ? req.query.page : 0);
    const pages = await prisma.advancedachievements_playerdata.count({});
    var next_page = null;
    var prev_page = null;
  
    if(current_page < Math.round(pages / 20)) {
      next_page = `https://mesa-ark.com/api/ark/player_rankings?page=${parseInt(current_page as CurrentPage) + 1}&search=${search}`;
    }
  
    if(current_page > 0) {
      prev_page = `https://mesa-ark.com/api/ark/player_rankings?page=${parseInt(current_page as CurrentPage) - 1}&search=${search}`;
    }

  /* Return All Required Data */
  res.status(200).send({
    pagination: {
      current_page: parseInt(current_page as CurrentPage),
      next: next_page,
      prev: prev_page
    },
    ranking_data: safe_ranking_data
  });
}
