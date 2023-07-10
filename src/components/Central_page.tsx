import { Play } from "lucide-react"
import Image from "next/image"

export function Central_page(){
    return(
            <div>
                <h1 className="font-semibold text-3xl mt-10 text-white">Good Afternoon</h1> 
                <div className="grid grid-cols-3 gap-4 nt-4">
                    <a href='' className="bg-white bg-opacity-5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/matue.jpg" width={80} height={80} alt='Capa do Album Matue' />
                        <strong className="text-white">This Is MATUE</strong>
                        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>

                    <a href='' className="bg-white bg-opacity-5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/paixao.jpg" width={80} height={80} alt='Sertanejo Sofrencia' />
                        <strong className="text-white">Paixao Bandida</strong>
                        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>

                    <a href='' className="bg-white bg-opacity-5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/Anos2000.jpg" width={80} height={80} alt='Musica Anos 2000' />
                        <strong className="text-white">Anos 2000</strong>
                        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>

                    <a href='' className="bg-white bg-opacity-5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/atitude67.jpg" width={80} height={80} alt='Atitude 67' />
                        <strong className="text-white">This Is ATITUDE 67</strong>
                        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>

                    <a href='' className="bg-white bg-opacity-5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/brunomars.jpg" width={80} height={80} alt='Bruno Mars' />
                        <strong className="text-white">24K Magic</strong>
                        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>

                    <a href='' className="bg-white bg-opacity-5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/funk.jpg" width={80} height={80} alt='Funk' />
                        <strong className="text-white">Funk</strong>
                        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                    
                </div>
            </div>
    )
}