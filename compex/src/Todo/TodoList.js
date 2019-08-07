import React from 'react'

const TodoList = ({todos}) => {

    const list = todos.map( 
        ({tno,title}) => <li key={tno}>{title}</li> 
    )

    return(
        <ul>
            {list}
        </ul>
    )
}
export default TodoList