'use client'
import { Burger, Menu } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ChevronDown, FlagId, FlagUs } from '@/components/icons'
import { useTranslations } from 'next-intl'
import { useLanguageContext } from '@/components/contexts'

export const Navbar: React.FC = () => {
  const [opened, setOpened] = useState(false)

  const [scroll, setScroll] = useState(false)

  const { language, currentPath } = useLanguageContext()

  useEffect(() => {
    window.addEventListener('scroll', () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    )
  }, [])

  const t = useTranslations('Navbar')

  const renderMenu = (id: string) => {
    switch (id) {
      case 'en':
        return (
          <>
            <FlagUs /> US
          </>
        )

      case 'id':
        return (
          <>
            <FlagId /> ID
          </>
        )

      default:
        return 'error'
    }
  }
  const renderMenu2 = (id: string) => {
    switch (id) {
      case 'en':
        return (
          <>
            US <FlagUs />
          </>
        )

      case 'id':
        return (
          <>
            ID <FlagId />
          </>
        )

      default:
        return 'error'
    }
  }

  return (
    <>
      <div
        className={`bg-[#294696] h-[50px] lg:h-[90px] w-full drop-shadow-sm shadow-lg flex justify-between sticky top-0 transition-all duration-1000 z-50 items-center ${
          scroll
            ? 'lg:scale-[0.99] top-0 lg:top-2 lg:px-[75px] lg:rounded-full'
            : 'lg:px-20 top-0 scale-100 rounded-none'
        }`}
      >
        <Link
          href={language == 'en' ? '/en' : '/id'}
          className="scale-50 lg:scale-100"
        >
          <div className="flex gap-2">
            <div className=" relative w-[54px] h-[54px] rounded-full border-2 border-[#D2E9F2]">
              <Image
                src={'/ATPLogo.svg'}
                fill
                className="object-cover relative"
                alt="Logo"
              />
            </div>
            <p className="text-[#D2E9F2] font-bold text-[36px]">ATP</p>
          </div>
        </Link>
        <div className="lg:flex gap-5 hidden">
          <Link
            href={'/' + language}
            className={`flex font-medium gap-2 border-b-2 hover:border-white border-transparent px-4 transition-all flex-none text-white p-1`}
          >
            {t('1')}
          </Link>
          <Link
            href={'/' + language + '/about'}
            className={`flex font-medium gap-2 border-b-2 hover:border-white border-transparent px-4 transition-all flex-none text-white p-1`}
          >
            {t('2')}
          </Link>
          <Link
            href={'/' + language + '/product'}
            className={`flex font-medium gap-2 border-b-2 hover:border-white border-transparent px-4 transition-all flex-none text-white p-1`}
          >
            {t('3')}
          </Link>
          <Link
            href={'/' + language + '/contact'}
            className={`flex font-medium gap-2 border-b-2 hover:border-white border-transparent px-4 transition-all flex-none text-white p-1`}
          >
            {t('4')}
          </Link>
        </div>
        <div className="hidden lg:block">
          <Menu shadow="md" width={100}>
            <Menu.Target>
              <button className="flex items-center text-[14px] text-[#344054] font-semibold bg-[#D6E8F2] py-1 px-3 rounded gap-1">
                {renderMenu(language)} <ChevronDown />
              </button>
            </Menu.Target>

            <Menu.Dropdown>
              <Link href={(language == 'en' ? '/id' : '/en') + currentPath}>
                <Menu.Item>
                  <div className="flex items-center gap-1">
                    {language == 'en' ? renderMenu('id') : renderMenu('en')}
                  </div>
                </Menu.Item>
              </Link>
            </Menu.Dropdown>
          </Menu>
        </div>
        <div className="mr-5 lg:mr-0 lg:hidden">
          <Menu shadow="md" opened={opened} onChange={setOpened}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={() => setOpened(opened)}
                color="white"
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Link
                  href={'/'}
                  className={`flex font-medium gap-2 border-b-2 border-transparent px-4 transition-all flex-none text-black p-1`}
                >
                  {t('1')}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={'/' + language + '/about'}
                  className={`flex font-medium gap-2 border-b-2 border-transparent px-4 transition-all flex-none text-black p-1`}
                >
                  {t('2')}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={'/' + language + '/product'}
                  className={`flex font-medium gap-2 border-b-2 border-transparent px-4 transition-all flex-none text-black p-1`}
                >
                  {t('3')}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={'/' + language + '/contact'}
                  className={`flex font-medium gap-2 border-b-2 border-transparent px-4 transition-all flex-none text-black p-1`}
                >
                  {t('4')}
                </Link>
              </Menu.Item>
              <Link href={(language == 'en' ? '/id' : '/en') + currentPath}>
                <Menu.Item>
                  <div
                    className={`flex font-medium gap-2 border-b-2 border-transparent px-4 transition-all flex-none text-black p-1`}
                  >
                    Change to{' '}
                    {language == 'en' ? renderMenu2('id') : renderMenu2('en')}
                  </div>
                </Menu.Item>
              </Link>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </>
  )
}
