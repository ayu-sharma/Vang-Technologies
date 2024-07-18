import React from 'react'
import fact from './Fact'
import { useTranslation } from 'react-i18next'
function Funfacts() {
 const {t} = useTranslation()
  return (
    // <div className='container'>
    <>
    {/* For lg screens */}
     <div className='xl:grid hidden lg:hidden xl:grid-cols-4 gap-4 place-items-center px-10'>
        {fact.map((items)=>{
            return(
                <div key={items.id} className='bg-white py-10 px-7 rounded-lg w-[275px]'>
                    <div className='text-3xl font-bold pb-2'> {items.title}</div>
                    <div className='text-normal pb-6'> {items.subtitle}</div>
                    <div className='text-sm pt-6 text-gray-400'>{items.smalltitle}</div>
                </div>
            )
        })}
    </div>

    {/* For other screeens */}
        <div className='cs:no-scrollbar grid grid-flow-col lg:grid xl:hidden lg:grid-flow-col w-full max-w-[calc(100vw-2rem)] overflow-scroll gap-2 justify-start mx-auto '>
        {fact.map((items)=>{
            return(
                <div key={items.id} className='bg-white py-10 px-7 rounded-lg w-[300px]'>
                    <div className='text-3xl font-bold pb-2'> {t(items.id)}</div>
                    <div className='text-normal pb-6'> {items.subtitle}</div>
                    <div className='text-sm pt-6 text-gray-400'>{items.smalltitle}</div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Funfacts