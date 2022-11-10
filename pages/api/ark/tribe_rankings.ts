import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient()

type Data = {
  pagination: any,
  ranking_data: any
}

type CurrentPage = string;
type Search = any;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const search = req.query.search ? req.query.search : ""
  const ranking_data = await prisma.advancedachievements_tribedata.findMany({ 
    where: {
      TribeName: {
        contains: search as Search
      }
    },
    orderBy: {
      DamageScore: 'desc',
    },
    skip: 20 * (parseInt(req.query.page as string) ? parseInt(req.query.page as string) : 0), // Page ID
    take: 20,
    select: { TribeName: true, DamageScore: true}
  });


  const safe_ranking_data = JSON.parse(JSON.stringify(ranking_data, (key, value) =>
  typeof value === 'bigint'
      ? value.toString()
      : value // return everything else unchanged
  ));

  const current_page = (req.query.page ? req.query.page : 0);
  const pages = await prisma.advancedachievements_tribedata.count({});
  var next_page = null;
  var prev_page = null;

  if(current_page < 69) {
    next_page = `https://mesa-ark.com/api/ark/tribe_rankings?page=${parseInt(current_page as CurrentPage) + 1}&search=${search}`;
  }

  if(current_page > 0) {
    prev_page = `https://mesa-ark.com/api/ark/tribe_rankings?page=${parseInt(current_page as CurrentPage) - 1}&search=${search}`;
  }

  /* Return All Required Data */
  res.status(200).send({
    pagination: {
      total_pages: Math.round(pages / 20) - 1,
      current_page: parseInt(current_page as CurrentPage),
      next: next_page,
      prev: prev_page
    },
    ranking_data: safe_ranking_data
  });
}
