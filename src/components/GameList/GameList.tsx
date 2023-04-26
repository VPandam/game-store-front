import React from 'react'
import { games } from '../../data/games'
import './gameList.scss'
export const GameList: React.FC = () => {
  return (
    <ul className='game-list'>
        {games.map(({ name, id, company, description, genre, imageHead, images, price }) => {
          return (
          <li key={id}>
            <img src={imageHead} alt={`${name} image`} />
            <h1>{name}</h1>
          </li>
          )
        })}
    </ul>
  )
}
