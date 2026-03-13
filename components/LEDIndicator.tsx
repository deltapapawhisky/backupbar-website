interface LEDIndicatorProps {
  color: 'green' | 'red'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  pulse?: boolean
  className?: string
}

const sizeMap = {
  sm: 'w-3 h-3',
  md: 'w-5 h-5',
  lg: 'w-8 h-8',
  xl: 'w-14 h-14',
}

export function LEDIndicator({ color, size = 'md', pulse = false, className = '' }: LEDIndicatorProps) {
  const sizeClass = sizeMap[size]
  const isGreen = color === 'green'

  const bgColor = isGreen ? 'bg-safe-400' : 'bg-danger-400'
  const glowClass = isGreen ? 'led-green-glow' : 'led-red-glow'
  const pulseClass = pulse ? 'animate-pulse-glow' : ''

  return (
    <div
      className={`${sizeClass} rounded-full ${bgColor} ${glowClass} ${pulseClass} ${className}`}
      role="status"
      aria-label={isGreen ? 'Safe to disconnect' : 'Backup in progress'}
    />
  )
}
