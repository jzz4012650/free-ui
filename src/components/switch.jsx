import { Switch as HeadlessSwitch } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export function Switch({ className, color = 'accent', ...props }) {
  return (
    <HeadlessSwitch
      {...props}
      className={twMerge(
        // Base styles
        'group relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
        // Unchecked state
        'bg-zinc-200 dark:bg-zinc-700',
        // Checked state
        'data-checked:bg-accent-600',
        // Disabled state
        'data-disabled:cursor-not-allowed data-disabled:opacity-50',
        // Dark mode focus ring offset
        'dark:focus:ring-offset-zinc-900',
        className
      )}
    >
      <span
        aria-hidden="true"
        className={twMerge(
          // Knob base
          'pointer-events-none inline-block size-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
          // Checked translation
          'group-data-checked:translate-x-4',
          // Unchecked translation
          'translate-x-0'
        )}
      />
    </HeadlessSwitch>
  )
}
