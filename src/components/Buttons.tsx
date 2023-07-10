import { ChevronLeft, ChevronRight } from "lucide-react";

export function Buttons(){
    return(
        <div className="flex items-center gap-4">

            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft className="text-white" />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight className="text-white" />
            </button>

          </div>
    )
}