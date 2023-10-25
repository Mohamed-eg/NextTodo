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
        </li>
    
}