import React from 'react'

const NavContainer = (props) => {
  return (
    <nav>
        <ul className='flex flex-1 align-middle justify-between list-unstyle'>
            {props.children}
        </ul>
    </nav>
  )
}

export default NavContainer
