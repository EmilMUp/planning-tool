import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-center space-x-28 items-center p-7 bg-gray-800 text-white">
    <div className="logo">
      <img src="../logo/Logo.png" alt="Logo" className="h-10"/>
    </div>
    <nav>
      <ul className="flex max-w-2x2">
        <li>
          <a href="#home" className="hover:underline">Projekt</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}
