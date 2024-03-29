import React, { FunctionComponentElement, useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, className, children }) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenu as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [ menuOpen, setOpen ] = useState(isOpened)
  const subMenuClasses = classNames('submenu', {
    'menu-opened': menuOpen
  })
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 150)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false); }
  } : {}
  const renderChildren = () => {
    const childernComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error('Warning: SubMenu has a child with is not a MenuItem')
      }
    })
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
      >
         <ul className={subMenuClasses}>
          { childernComponent }
        </ul>
      </Transition>
     
    )
  }
  return (
    <li key={index} className={classes} { ...hoverEvents }>
      <div className="submenu-title" { ...clickEvents } style={{ display: 'flex', alignItems: 'center'}}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" style={{ marginLeft: '5px', marginTop: '5px' }}></Icon>
      </div>
      { renderChildren() }
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu