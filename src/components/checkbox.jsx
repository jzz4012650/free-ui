import { Checkbox as HeadlessCheckbox } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export function Checkbox({ className, ...props }) {
  return (
    <HeadlessCheckbox
      {...props}
      className={twMerge(
        'group flex size-4 items-center justify-center rounded border border-zinc-950/15 bg-white',
        'data-checked:bg-accent-500 data-checked:border-transparent',
        'data-hover:data-checked:bg-accent-600',
        'data-indeterminate:bg-accent-500 data-indeterminate:border-transparent data-hover:data-indeterminate:bg-accent-600',
        'focus:outline-none data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-accent-500',
        'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
        'dark:border-white/15 dark:bg-white/5',
        'dark:data-checked:bg-accent-500 dark:data-checked:border-transparent',
        'dark:data-hover:data-checked:bg-accent-600',
        'dark:data-indeterminate:bg-accent-500 dark:data-indeterminate:border-transparent dark:data-hover:data-indeterminate:bg-accent-600',
        className
      )}
    >
      <svg
        className="size-3 stroke-white opacity-0 group-data-checked:opacity-100 group-data-indeterminate:opacity-100"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          className="opacity-100 group-data-indeterminate:opacity-0"
          d="M3 8L6 11L11 3.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="opacity-0 group-data-indeterminate:opacity-100"
          d="M3 7H11"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </HeadlessCheckbox>
  )
}
