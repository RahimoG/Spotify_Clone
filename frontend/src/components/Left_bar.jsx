import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const Left_bar = () => {
    return (
        <div className='dark:bg-black h-[100vh] p-2 flex flex-col gap-2'>
            <div className='dark:bg-grey-lite rounded-lg p-1'>
                <ul className='px-3 flex flex-col font-bold'>
                    <li className='flex items-center justify-start dark:text-white-80 dark:hover:text-white transition-all ease-in-out duration-300 w-all py-3 px-2'>
                        <GoHomeFill className='text-2xl' />
                        <span className='pl-4 text-md'>Home</span> 
                    </li>
                    <li className='flex items-center justify-start dark:text-white-80 dark:hover:text-white transition-all ease-in-out duration-300 w-all py-3 px-2'>
                        <IoSearch className='text-2xl' />
                        <span className='pl-4 text-md'>Search</span>
                    </li>
                </ul>
            </div>
            <div className='dark:bg-grey-lite rounded-lg p-1 dark:text-white-80'>
                <div id='left_bar_tite' className='flex items-center justify-between p-3'>
                    <div className='flex items-center gap-2 px-2'>
                        <LuLibrary className='text-2xl'/>
                        <span className='font-bold'>Your Library</span>
                    </div>
                    <div className='flex items-center justify-end text-2xl gap-4'>
                        <LuPlus />
                        <FiArrowRight />
                    </div>
                </div>
                <div id='left_bar_category_list' className='py-1 px-3'>
                    <ul className='flex gap-2 text-sm'>
                        <li className='rounded-full font-medium dark:bg-grey-lite-2 py-1 px-3'>Playlist</li>
                        <li className='rounded-full font-medium dark:bg-grey-lite-2 py-1 px-3'>Podcasts</li>
                        <li className='rounded-full font-medium dark:bg-grey-lite-2 py-1 px-3'>Albums</li>
                        <li className='rounded-full font-medium dark:bg-grey-lite-2 py-1 px-3'>Artists</li>
                    </ul>
                </div>
                <div id='left_bar_search'>
                    <MdOutlineFormatListBulleted />
                    
                </div>
            </div>
        </div>
    )
}

export default Left_bar
