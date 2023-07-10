import { HomeIcon, Search, Library } from "lucide-react";

export function Sidebar(){
    return(
        <aside className="w-72 bg-zinc-950 p-6">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-white">
              <HomeIcon />
              Home
            </a>

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-white">
              <Search />
              Pesquisar
            </a>

            <a href="" className="flex items-center gap-3 text-sm font-semibold text-white">
              <Library />
              Biblioteca
            </a>

          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Funk</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Summer Hits</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Eletronic Hits</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Sofrencia</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Modao</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Red Hot Chilli Pepers</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Musicas Curtidas</a>
          </nav>

        </aside>
    )

}