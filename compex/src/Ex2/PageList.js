import React from 'react'


const PageList = ({arr}) => {


    const list = arr.map(({tno, title, content}) => {
        return(
            <li key={tno}>{title}</li>
        )
    })


    return (
        <ul>
            {list}
        </ul>
    )

}

export default PageList