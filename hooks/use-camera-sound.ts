/**
 * Hook for playing camera sounds
 */
export function useCameraSound() {
  // Play camera shutter sound effect
  const playCameraSound = () => {
    const shutterSound = new Audio("/camera-shutter.mp3")
    shutterSound.volume = 0.3
    shutterSound.play().catch((e) => console.log("Audio play prevented:", e))
  }

  // Play camera startup sound
  const playStartupSound = () => {
    const startupSound = new Audio("/camera-startup.mp3")
    startupSound.volume = 0.5
    startupSound.play().catch((e) => console.log("Audio play prevented:", e))
  }

  return { playCameraSound, playStartupSound }
}
