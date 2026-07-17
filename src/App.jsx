import React from 'react';


import { 
  SearchIcon, 
  ArrowIcon, 
  ArrowLeftIcon, 
  CalendarIcon, 
  CheckIcon, 
  CloseBoldIcon, 
  CloseIcon, 
  HeartBoldIcon, 
  HeartIcon, 
  MenuIcon, 
  StarBoldIcon, 
  StarIcon, 
  VideoIcon 
} from './components/icons/icons';
function App (){
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center p-8">

        <h1 className="text-xl font-semibold mb-6 text-neutral-400">
        Galeri Master Ikon Explorer (Tanpa Props Eksternal)
      </h1>

      <div className="grid grid-cols-4 gap-6 bg-neutral-900 p-8 rounded-xl border border-neutral-800">
        
        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <SearchIcon />
          <span className="text-xs text-neutral-500">Search</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <ArrowIcon />
          <span className="text-xs text-neutral-500">Arrow Top</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <ArrowLeftIcon />
          <span className="text-xs text-neutral-500">Arrow Left</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <CalendarIcon />
          <span className="text-xs text-neutral-500">Calendar</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <CheckIcon />
          <span className="text-xs text-neutral-500">Check</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <CloseBoldIcon />
          <span className="text-xs text-neutral-500">Close Bold</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <CloseIcon />
          <span className="text-xs text-neutral-500">Close</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <HeartBoldIcon />
          <span className="text-xs text-neutral-500">Heart Bold</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <HeartIcon />
          <span className="text-xs text-neutral-500">Heart</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <MenuIcon />
          <span className="text-xs text-neutral-500">Menu</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <StarBoldIcon />
          <span className="text-xs text-neutral-500">Star Bold</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <StarIcon />
          <span className="text-xs text-neutral-500">Star</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-4 bg-neutral-950 rounded-lg">
          <VideoIcon />
          <span className="text-xs text-neutral-500">Video</span>
        </div>

      </div>
    </div>
  );
}

export default App;