import React from 'react'


const PageMaker = ({total, pageNum, fn}) => {

    let endPage = Math.ceil((pageNum /10.0 )) * 10
    let first = endPage - 9

    const items = []

    for(let i = first; i <= endPage; i++){
        items.push(
            <li key={i} onClick={() => fn({pageNum:i}) }>{i}</li>)
    }

    return(
        <ul style={{listStyle:"none"}}>
            {items}
        </ul>
    )
}

export default PageMaker

