'use client'
import { Popover } from 'antd'
import Link from 'next/link'

export default function NavHeader() {

  return (
    <div className='flex justify-end'>
      <Popover
        className='flex cursor-pointer items-center py-1 hover:text-white/70'
        renderPopover={
          <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
            <div className='flex flex-col py-2 pl-3 pr-28'>
              <button className='px-3 py-2 text-left hover:text-orange' onClick={() => changeLanguage('vi')}>
                Tiếng Việt
              </button>
              <button className='mt-2 px-3 py-2 text-left hover:text-orange' onClick={() => changeLanguage('en')}>
                English
              </button>
            </div>
          </div>
        }
      >
         
      </Popover> 
           <Popover
            className='ml-6 flex cursor-pointer items-center py-1 hover:text-white/70'
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 bg-white shadow-md'>
                <Link
                  href="/profile"
                  className='block w-full bg-white px-4 py-3 text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Tài khoản của tôi
                </Link>
              </div>
            }
          >
            <div className='mr-2 h-6 w-6 flex-shrink-0'>
              <img src={""} alt='avatar' className='h-full w-full rounded-full object-cover' />
            </div>
          </Popover>
    </div>
  )
}
