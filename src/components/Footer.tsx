import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export function Footer(){
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">

        <div className='flex items-center gap-3'>
          <Image src="/album red 1 (5).jpg"  width={55} height={55} alt='Capa do Album Matue' />
          <div className='flex flex-col'>
            <strong className='font-normal text-white'> Californication </strong>
            <span className='text-xs text-zinc-500'> Red Hot Chilli Peppers</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={17} className='text-zinc-200 text-white'/>
            <SkipBack size={17} className='text-zinc-200 text-white'/>

            <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                  <Play fill='bg-black'/>
            </button>

            <SkipForward size={17} className='text-zinc-200 text-white'/>
            <Repeat size={17} className='text-zinc-200 text-white'/>

          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>1:09</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>

        <div className='flex items-center text-white gap-4'> 
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'> 
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-5 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    )
    
}