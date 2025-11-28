import { Description as HeadlessDescription, Field as HeadlessField, Label as HeadlessLabel } from '@headlessui/react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function Field({ className, ...props }) {
  return (
    <HeadlessField
      {...props}
      className={twMerge('flex flex-col gap-y-2', className)}
    />
  )
}

export function Label({ className, ...props }) {
  return (
    <HeadlessLabel
      {...props}
      className={twMerge(
        'text-sm/6 font-medium text-zinc-950 dark:text-white select-none data-disabled:opacity-50',
        className
      )}
    />
  )
}

export function Description({ className, ...props }) {
  return (
    <HeadlessDescription
      {...props}
      className={twMerge(
        'text-sm/6 text-zinc-500 dark:text-zinc-400',
        className
      )}
    />
  )
}

export function ErrorMessage({ className, ...props }) {
  return (
    <HeadlessDescription
      {...props}
      data-slot="error"
      className={twMerge(
        'text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500',
        className
      )}
    />
  )
}
