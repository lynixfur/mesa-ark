import { PrismaClient, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';
import { env } from 'process';

/* New Beta Feature */
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : env.MYSQL_HOST,
    port : env.MYSQL_PORT,
    user : env.MYSQL_USER,
    password : env.MYSQL_PASSWORD,
    database : env.MYSQL_DATABASE_2
  }
});

type Data = {
    pagination: any,
    ranking_data: any
}
  
type Page = any;
type CurrentPage = string;
type Search = any;
type SortBy = any;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  let search = req.query.search ? "%" + req.query.search + "%" : "%%";
  const filter = req.query.filter ? req.query.filter : ""

  let safeFilter = {}
  switch(filter) {
    case "Time Played":
      safeFilter = "PlayTime"
      break;
    case "Kills":
      safeFilter = "PlayerKills"
      break;
    case "Deaths":
      safeFilter = "DeathByPlayer"
      break;
    case "Tamed Dino Kills":
      safeFilter = "DinoKills"
      break;
    default:
      safeFilter = "PlayerKills"
  }


  const current_page = Number(req.query?.page ? req.query?.page : 0);

  // knex query
  const ranking_data_knex = await knex.table('advancedachievements_playerdata')
  .whereLike('advancedachievements_playerdata.PlayerName', `%${search}%`)
  .orderBy(safeFilter, 'desc')
  .limit(20)
  .offset(20 * current_page)

  
  /*const ranking_data = await prisma.advancedachievements_playerdata.findMany({
    orderBy: safeFilter,
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
  });*/
  //const result = await prisma.$queryRaw`SELECT * FROM advancedachievements_playerdata WHERE PlayerName like "%${search}%"`
  
  const safe_ranking_data = JSON.parse(JSON.stringify(ranking_data_knex, (key, value) =>
  typeof value === 'bigint'
      ? value.toString()
      : value // return everything else unchanged
    ));

    var next_page = null;
    var prev_page = null;
  
    if(current_page < Math.round(ranking_data_knex.length / 20)) {
      next_page = `https://mesa-ark.com/api/ark/player_rankings?page=${current_page}&search=${search}`;
    }
  
    if(current_page > 0) {
      prev_page = `https://mesa-ark.com/api/ark/player_rankings?page=${current_page}&search=${search}`;
    }

  /* Return All Required Data */
  res.status(200).send({
    pagination: {
      total_pages: Math.round(ranking_data_knex.length / 20),
      current_page: current_page,
      next: next_page,
      prev: prev_page
    },
    ranking_data: safe_ranking_data
  });
}
