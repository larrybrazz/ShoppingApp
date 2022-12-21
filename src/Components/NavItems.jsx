import React from "react"

const NavItems = ({content,href}) => {
  return (
    <div>
          <li className='text-lg font-semibold'>
            <a href={href}> {content}</a>
          </li>
          
      </div>
  )
}

export default NavItems
