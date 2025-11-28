import { Radio as HeadlessRadio, RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export function RadioGroup({ className, ...props }) {
  return (
    <HeadlessRadioGroup
      {...props}
      className={twMerge(className)}
    />
  )
}

export function Radio({ className, ...props }) {
  return (
    <HeadlessRadio
      {...props}
      className={twMerge(
        'group flex size-4 items-center justify-center rounded-full border',
        'border-zinc-950/15 bg-white',
        'data-checked:bg-accent-500 data-checked:border-transparent',
        'data-hover:data-checked:bg-accent-600',
        'focus:outline-none data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-accent-500',
        'data-disabled:opacity-50 data-disabled:cursor-not-allowed',
        'dark:border-white/15 dark:bg-white/5',
        'dark:data-checked:bg-accent-500 dark:data-checked:border-transparent',
        'dark:data-hover:data-checked:bg-accent-600',
        className
      )}
    >
      <span className="size-2 rounded-full bg-white opacity-0 group-data-checked:opacity-100" />
    </HeadlessRadio>
  )
}
