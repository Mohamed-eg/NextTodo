import prisma from "@/db"
import Link from "next/link"
import { TodoItems } from "./componants/TodoItem"

async function toggleTodo(id: string, complete: boolean){
  "use server"
  await prisma.todo.update({where: {id}, data:{complete}})
}

export default async function Home() {
  const todos = await prisma.todo.findMany()
  return (
  <>
   <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">ToDo</h1>
    <Link href="/new" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none ">new</Link>
   </header>
   <ul className="pl-4">
    {todos.map(todo => (
      <TodoItems key={todo.id} {...todo} toggleTodo={toggleTodo}/>
     ))}
   </ul>
   </>
  )
}
