import { PrismaClient } from '@prisma/client'
import { getLoginSession } from "../../../lib/auth";


const prisma = new PrismaClient()


export default async function handler(req, res) {
  
  const session = await getLoginSession(req)
  const user = session;
  if(!user) {
      res.status(403).json({error: 'Unauthorized access', error_code: 1500});
      return;
  }

  const search = req.query.search ? req.query.search : ""
  const ranking_data = await prisma.advancedachievements_tribedata.findMany({ 
    where: {
      TribeName: {
        contains: search
      }
    },
    orderBy: {
      DamageScore: 'desc',
    },
    skip: 20 * (req.query.page ? req.query.page : 0), // Page ID
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
    next_page = `https://bloody-ark.com/api/hub/tribe_rankings?page=${parseInt(current_page) + 1}&search=${search}`;
  }

  if(current_page > 0) {
    prev_page = `https://bloody-ark.com/api/hub/tribe_rankings?page=${parseInt(current_page) - 1}&search=${search}`;
  }

  /* Return All Required Data */
  res.status(200).send({
    pagination: {
      total_pages: Math.round(pages / 20) - 1,
      current_page: parseInt(current_page),
      next: next_page,
      prev: prev_page
    },
    ranking_data: safe_ranking_data
  });
}
