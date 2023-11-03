"use client"
type TodoItemProos ={
    id : string
    title : string
    complete : boolean
    toggleTodo : (id: string, complete: boolean)=> void
}

export function TodoItems ({ id, title, complete, toggleTodo }: TodoItemProos){
    return<li className="flex gap-1 items-center">
            <input id={id} type="checkbox"
            defaultChecked ={complete}
            onChange={e=> toggleTodo(id , e.target.checked)} className="cursor-pointer peer "/>
            <label htmlFor={id} 
            className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge</span>
        </li>
    
}