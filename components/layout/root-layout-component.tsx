"use client"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import SidebarContent from "@/components/layout/sidebar-content"
import Providers from "./providers"


export default function RootLayoutComponent({ children, lang }: { children: React.ReactNode, lang: any }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const navigation = [
    { name: lang.page.title, href: "/",current: pathname == "/" },
    { name: lang.resume.title, href: "/resume", current: pathname.startsWith("/resume") },
    { name: lang.projects.title, href: "/projects", current: pathname.startsWith("/projects") },
    { name: lang.aboutMe.title, href: "/about-me", current: pathname.startsWith("/about-me") },
    { name: lang.contact.title, href: "/contact", current: pathname.startsWith("/contact") },
  ]

  return (
    <Providers>
      <div className="h-screen max-h-screen flex flex-col lg:flex-row lg:px-14 lg:pt-14">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <SidebarContent navigation={navigation} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:pb-14 lg:flex lg:inset-y-0 lg:w-72 lg:flex-row">
          <SidebarContent navigation={navigation} />
        </div>

        <div className="flex items-center gap-x-6 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => {
            console.log("open")
            setSidebarOpen(true)
          }}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white"></div>
          <a href="#">
            <span className="sr-only">Marlon Wißkirchen</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="h-0 flex-grow lg:h-full w-full overscroll-none">
          <div className="lg:pl-14 w-full overscroll-none h-full p-6 lg:p-0">{children}</div>
        </main>
      </div>
    </Providers>
  )
}
