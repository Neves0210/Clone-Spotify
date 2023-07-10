import Image from "next/image"

export function After_page(){
    return(
        <div>
            <h2 className="font-semibold text-3xl mt-10 text-white">Made For Red Hot Chilli Pepers</h2>
            <div className='grid grid-cols-6 gap-4 mt-4'>
                <a href='' className='bg-white bg-opacity-5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album red 1 (4).jpg" className='w-full' width={80} height={80} alt='Capa do Album Matue'/>
                <strong className='font-semibold text-white'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Music, rock and explode your head </span>
                </a>

                <a href='' className='bg-white bg-opacity-5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album red 1 (1).jpg" className='w-full' width={80} height={80} alt='Capa do Album Matue' />
                <strong className='font-semibold text-white'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Music, rock and explode your head </span>
                </a>

                <a href='' className='bg-white bg-opacity-5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album red 1 (2).jpg" className='w-full' width={80} height={80} alt='Capa do Album Matue' />
                <strong className='font-semibold text-white' >Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Music, rock and explode your head </span>
                </a>

                <a href='' className='bg-white bg-opacity-5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album red 1 (3).jpg" className='w-full' width={80} height={80} alt='Capa do Album Matue' />
                <strong className='font-semibold text-white'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Music, rock and explode your head </span>
                </a>

                <a href='' className='bg-white bg-opacity-5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <Image src="/album red 1 (5).jpg" className='w-full' width={80} height={80} alt='Capa do Album Matue' />
                <strong className='font-semibold text-white'>Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">Music, rock and explode your head </span>
                </a>

            </div>
        </div>
    )
}