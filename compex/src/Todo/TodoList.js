import React from 'react'

const TodoList = ({todos,change}) => {

    const list = todos.map( ({tno, title, complete}) => {

        const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}

        return (
            <li key={tno} style={style}>
                {title} 
                <input type='checkbox' checked = {complete ?'checked':''} onChange={() => change(tno)} ></input> </li>
        )
    })

    return(
        <ul>
            {list}
        </ul>
    )
}
export default TodoList