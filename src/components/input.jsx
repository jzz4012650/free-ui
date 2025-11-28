import { Input as HeadlessInput } from '@headlessui/react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function Input({ className, ...props }) {
  return (
    <span
      data-slot="control"
      className={twMerge(
        clsx(
          className,
          // Basic layout
          'relative block w-full',
          // Background & Border
          'before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden',
          'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500',
          // Dark mode background
          'dark:bg-white/5 dark:rounded-lg',
          // Border (simulated with ring/shadow)
          'has-data-disabled:opacity-50 before:has-data-disabled:bg-zinc-950/5 before:has-data-disabled:shadow-none',
        )
      )}
    >
      <HeadlessInput
        {...props}
        className={clsx(
          // Layout
          'relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)]',
          // Typography
          'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
          // Background & Border (Reset)
          'border border-zinc-950/10 bg-transparent dark:border-white/10 dark:bg-transparent',
          // Focus
          'focus:outline-accent-600',
          // Invalid state
          'data-invalid:border-red-500 data-invalid:data-hover:border-red-500 data-invalid:dark:border-red-500 data-invalid:data-hover:dark:border-red-500',
          // Disabled
          'data-disabled:border-zinc-950/20 data-disabled:cursor-not-allowed dark:data-disabled:border-white/15 dark:data-disabled:bg-white/2.5 dark:data-disabled:text-zinc-400'
        )}
      />
    </span>
  )
}

export function InputGroup({ children, className }) {
  return (
    <span
      data-slot="group"
      className={clsx(
        className,
        'relative isolate block',
        '[&_svg]:pointer-events-none [&_svg]:absolute [&_svg]:z-10 [&_svg]:top-1/2 [&_svg]:-translate-y-1/2 [&_svg]:size-5 [&_svg]:text-zinc-500 [&_svg]:dark:text-zinc-400',
        '[&_svg:first-child]:left-3',
        '[&_svg:last-child]:right-3',
        'has-[svg:first-child]:[&_[data-slot=control]>input]:pl-10',
        'has-[svg:last-child]:[&_[data-slot=control]>input]:pr-10'
      )}
    >
      {children}
    </span>
  )
}
