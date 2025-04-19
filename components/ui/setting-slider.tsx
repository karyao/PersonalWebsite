"use client"

interface SettingSliderProps {
  name: string
  value: number
  onChange: (value: number) => void
  description?: string
}

/**
 * SettingSlider - Creates a slider for camera settings
 */
export function SettingSlider({ name, value, onChange, description }: SettingSliderProps) {
  return (
    <div>
      {/* Slider label and value display */}
      <div className="flex justify-between text-xs text-purple-300 mb-1">
        <span>{name}</span>
        <span>{description || `${value}%`}</span>
      </div>
      {/* The actual slider input */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number.parseInt(e.target.value))}
        className="w-full accent-purple-500 bg-black/50 h-2 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
      />
    </div>
  )
}
