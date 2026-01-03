'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { SideMenu } from '@/lib/interfaces'
import { HiOutlineChevronDown } from 'react-icons/hi'

const Sidebar = ({ menus }: { menus: SideMenu[] }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name)
  }

  return (
    <aside className="fixed top-16 bottom-0 left-0 z-40 w-72 bg-white flex flex-col shadow">
      <nav className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-2">
        {menus.map((menu) => {
          const isOpen = openMenu === menu.name
          const submenuRef = useRef<HTMLDivElement>(null)
          const [submenuHeight, setSubmenuHeight] = useState(0)

          useEffect(() => {
            if (submenuRef.current) {
              setSubmenuHeight(submenuRef.current.scrollHeight)
            }
          }, [isOpen])

          return (
            <div key={menu.name}>
              {menu.children ? (
                <button
                  onClick={() => toggleMenu(menu.name)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                    isOpen ? 'bg-blue-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {menu.icon && (
                      <span
                        className="h-5 w-5 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: menu.icon }}
                      />
                    )}
                    <span>{menu.name}</span>
                  </div>

                  <HiOutlineChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <Link
                  href={menu.href ?? ''}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  {menu.icon && (
                    <span
                      className="h-5 w-5 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: menu.icon }}
                    />
                  )}
                  <span>{menu.name}</span>
                </Link>
              )}

              {/* Submenu with smooth height animation */}
              {menu.children && (
                <div
                  ref={submenuRef}
                  style={{
                    height: isOpen ? `${submenuHeight}px` : '0px',
                  }}
                  className="ml-6 mt-1 space-y-1 overflow-hidden transition-[height] duration-300"
                >
                  {menu.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href ?? ''}
                      className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md ${
                        isOpen ? 'bg-blue-100' : ''
                      }`}
                    >
                      <span>{child.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
