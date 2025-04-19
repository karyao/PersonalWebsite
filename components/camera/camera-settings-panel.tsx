"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SettingSlider } from "@/components/ui/setting-slider"
import type { CameraSettings } from "@/types/camera"

interface CameraSettingsPanelProps {
  isOpen: boolean
  settings: CameraSettings
  onClose: () => void
  onSettingChange: (setting: string, value: number) => void
}

/**
 * CameraSettingsPanel - Creates a panel for adjusting camera visual settings
 */
export function CameraSettingsPanel({ isOpen, settings, onClose, onSettingChange }: CameraSettingsPanelProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-16 md:bottom-28 left-1/2 transform -translate-x-1/2 z-30 bg-black/90 border border-purple-500/30 rounded-lg p-3 md:p-4 w-[95%] sm:w-[90%] max-w-md"
    >
      <h3 className="text-purple-400 font-mono text-sm mb-4 flex justify-between items-center">
        CAMERA SETTINGS
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-full text-purple-400" onClick={onClose}>
          <X size={14} />
        </Button>
      </h3>
      <div className="space-y-4">
        {/* Film Grain Slider */}
        <SettingSlider
          name="Film Grain"
          value={settings.filmGrain}
          onChange={(value) => onSettingChange("filmGrain", value)}
          description="Controls the intensity of the film grain overlay"
        />

        {/* Color Temperature Slider */}
        <SettingSlider
          name="Color Temperature"
          value={settings.colorTemperature}
          onChange={(value) => onSettingChange("colorTemperature", value)}
          description={`${settings.colorTemperature < 50 ? "Cool" : "Warm"} (${settings.colorTemperature})`}
        />

        {/* Exposure Slider */}
        <SettingSlider
          name="Exposure"
          value={settings.exposure}
          onChange={(value) => onSettingChange("exposure", value)}
          description="Controls the overall brightness"
        />

        {/* Contrast Slider */}
        <SettingSlider
          name="Contrast"
          value={settings.contrast}
          onChange={(value) => onSettingChange("contrast", value)}
          description="Controls the contrast between light and dark"
        />

        {/* Vignette Slider */}
        <SettingSlider
          name="Vignette"
          value={settings.vignette}
          onChange={(value) => onSettingChange("vignette", value)}
          description="Controls the darkness at the corners"
        />
      </div>
    </motion.div>
  )
}
