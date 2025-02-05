import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo({repo, onClick}) {

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target='_blank'>Ver repositório</a><br />
            <button className='remover' onClick={onClick}>Delete</button>
            <hr />
        </ItemContainer>
    )
}
