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

export async function getStaticProps() {
  return {
    props: { expenses },
  }
}

export default function Home({ expenses }: { expenses: ExpenseType[] }) {
  return (
    <ul>
      {expenses.map((expense) => {
        const { id, item } = expense
        return <li key={id}>{item}</li>
      })}
    </ul>
  )
}
