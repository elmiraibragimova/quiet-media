import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

const Nav = ({ isPreviewAvailable }) => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <NavLink to="params">Параметры</NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            className={cn({ disabled: !isPreviewAvailable })}
            to="preview"
          >
            Предпросмотр
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
