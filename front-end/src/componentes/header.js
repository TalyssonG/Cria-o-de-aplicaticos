import React from 'react'

export default function Header({title, children}){
    return(
        <header>
            <h1>{title}</h1>
             <h2>Olá</h2>
            {children}
        </header>

    )
}