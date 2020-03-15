import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
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
            to={isPreviewAvailable ? 'preview' : ''}
          >
            Предпросмотр
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  isPreviewAvailable: PropTypes.bool.isRequired
}

export default Nav
