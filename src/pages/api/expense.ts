// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface ExpenseType {
  id: number
  item: string
  date: string
}

const expenses: ExpenseType[] = [
  {
    id: 1,
    item: 'One',
    date: '1674756875',
  },
  {
    id: 2,
    item: 'Two',
    date: '1674584075',
  },
  {
    id: 3,
    item: 'Three',
    date: '1669313675',
  },
  {
    id: 4,
    item: 'Four',
    date: '1666635275',
  },
  {
    id: 5,
    item: 'Five',
    date: '1659982475',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<ExpenseType[]>) {
  res.status(200).json(expenses)
}
