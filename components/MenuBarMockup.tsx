import { LEDIndicator } from './LEDIndicator'

export function MenuBarMockup() {
  return (
    <div className="relative max-w-md mx-auto">
      {/* macOS Menu Bar */}
      <div className="bg-slate-800/90 dark:bg-slate-900/90 backdrop-blur rounded-t-xl px-4 py-2 flex items-center justify-between border border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-slate-600" />
          <span className="text-xs text-slate-400 font-medium">Finder</span>
          <span className="text-xs text-slate-500">File</span>
          <span className="text-xs text-slate-500">Edit</span>
          <span className="text-xs text-slate-500">View</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-sm bg-slate-600" />
          <div className="w-3 h-3 rounded-sm bg-slate-600" />
          <LEDIndicator color="green" size="sm" />
          <span className="text-xs text-slate-400">3:42 PM</span>
        </div>
      </div>

      {/* Dropdown Popover */}
      <div className="bg-white dark:bg-slate-800 rounded-b-xl rounded-tr-none border border-t-0 border-slate-200 dark:border-slate-700 shadow-2xl ml-auto w-72">
        <div className="p-4 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">Backup Bar</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 bg-safe-50 dark:bg-safe-900/20 rounded-lg p-3">
            <LEDIndicator color="green" size="md" />
            <div>
              <p className="text-sm font-medium text-safe-700 dark:text-safe-400">Safe to Disconnect</p>
              <p className="text-xs text-safe-600 dark:text-safe-500">No backup in progress</p>
            </div>
          </div>

          {/* Backup Info */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Last Backup</span>
              <span className="text-slate-700 dark:text-slate-300">Today, 2:34 PM</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Next Backup</span>
              <span className="text-slate-700 dark:text-slate-300">~3:34 PM</span>
            </div>
          </div>

          {/* Storage */}
          <div>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-500 dark:text-slate-400">Storage</span>
              <span className="text-slate-700 dark:text-slate-300">450 GB / 1 TB</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
              <div className="bg-safe-500 h-1.5 rounded-full" style={{ width: '45%' }} />
            </div>
          </div>

          {/* Back Up Now */}
          <button className="w-full text-xs font-medium text-safe-700 dark:text-safe-400 bg-safe-50 dark:bg-safe-900/20 hover:bg-safe-100 dark:hover:bg-safe-900/30 rounded-lg py-2 transition-colors border border-safe-200 dark:border-safe-800">
            Back Up Now
          </button>
        </div>
      </div>
    </div>
  )
}
