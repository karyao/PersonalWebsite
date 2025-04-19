/**
 * CameraViewfinderFrame - Creates the camera viewfinder frame with display elements
 */
export function CameraViewfinderFrame() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <div className="absolute inset-0 border-[20px] sm:border-[30px] md:border-[60px] border-black rounded-lg">
        {/* Inner border */}
        <div className="absolute inset-0 border-2 border-purple-400/30 rounded-sm"></div>

        {/* Corner markers */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-purple-400/70"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400/70"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400/70"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400/70"></div>

        {/* Digital camera display elements */}
        {/* Camera settings display */}
        <div className="absolute top-4 md:top-8 right-4 md:right-8 font-mono text-[10px] md:text-xs text-purple-400/90 bg-black/50 px-1 md:px-2 py-1 rounded-sm">
          ISO 400 • 1/125s • f/2.8
        </div>

        {/* Date display */}
        <div className="absolute top-10 md:top-16 right-4 md:right-8 font-mono text-[10px] md:text-xs text-purple-400/90 bg-black/50 px-1 md:px-2 py-1 rounded-sm">
          {new Date()
            .toLocaleDateString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            .replace(/\//g, "-")}
        </div>

        {/* Battery indicator */}
        <div className="absolute top-4 md:top-8 left-4 md:left-8 font-mono text-[10px] md:text-xs flex items-center gap-1 text-purple-400/90 bg-black/50 px-1 md:px-2 py-1 rounded-sm">
          <div className="relative w-10 h-4 border border-purple-400 rounded-sm flex items-center">
            <div className="absolute right-0 top-0 bottom-0 w-1 h-full border-l border-purple-400 mr-px"></div>
            <div className="h-2 bg-purple-400 ml-1 rounded-sm" style={{ width: "85%" }}></div>
          </div>
          <span>85%</span>
        </div>

        {/* Frame counter */}
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 font-mono text-[10px] md:text-xs text-purple-400/90 bg-black/50 px-1 md:px-2 py-1 rounded-sm">
          FRAME 01/36
        </div>

        {/* Recording indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 font-mono text-[10px] md:text-xs flex items-center gap-1 text-purple-400/90 bg-black/50 px-1 md:px-2 py-1 rounded-sm">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          REC
        </div>

      </div>
    </div>
  )
}
