import { Button as HeadlessButton } from '@headlessui/react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const styles = {
  base: [
    // Base
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold',
    // Focus
    'focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500',
    // Disabled
    'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
    // Sizing (default)
    'px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6',
  ],
  solid: [
    // Optical border
    'border-transparent',
    // 3D effect
    'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white/10 before:shadow-[inset_0_1px_0_white/15]',
    // Active state
    'data-[active]:before:bg-black/10',
  ],
  outline: [
    'border-zinc-950/10 text-zinc-950 data-[hover]:bg-zinc-950/[2.5%] data-[active]:bg-zinc-950/5',
    'dark:border-white/15 dark:text-white dark:data-[hover]:bg-white/5 dark:data-[active]:bg-white/10',
  ],
  plain: [
    'border-transparent text-zinc-950 data-[hover]:bg-zinc-950/5 data-[active]:bg-zinc-950/10',
    'dark:text-white dark:data-[hover]:bg-white/10 dark:data-[active]:bg-white/20',
  ],
  colors: {
    dark: [
      'bg-zinc-900 text-white data-[hover]:bg-zinc-800 data-[active]:bg-zinc-900',
      'dark:bg-zinc-100 dark:text-zinc-950 dark:data-[hover]:bg-zinc-200 dark:data-[active]:bg-zinc-100',
    ],
    white: [
      'bg-white text-zinc-950 ring-1 ring-inset ring-zinc-950/10 data-[hover]:bg-zinc-50 data-[active]:bg-zinc-100',
      'dark:bg-zinc-800 dark:text-white dark:ring-white/10 dark:data-[hover]:bg-zinc-700 dark:data-[active]:bg-zinc-800',
    ],
    zinc: [
      'bg-zinc-600 text-white data-[hover]:bg-zinc-500 data-[active]:bg-zinc-600',
      'dark:bg-zinc-700 dark:data-[hover]:bg-zinc-600 dark:data-[active]:bg-zinc-700',
    ],
    indigo: [
      'bg-indigo-600 text-white data-[hover]:bg-indigo-500 data-[active]:bg-indigo-600',
      'dark:bg-indigo-500 dark:data-[hover]:bg-indigo-400 dark:data-[active]:bg-indigo-500',
    ],
    cyan: [
      'bg-cyan-600 text-white data-[hover]:bg-cyan-500 data-[active]:bg-cyan-600',
      'dark:bg-cyan-500 dark:data-[hover]:bg-cyan-400 dark:data-[active]:bg-cyan-500',
    ],
    red: [
      'bg-red-600 text-white data-[hover]:bg-red-500 data-[active]:bg-red-600',
      'dark:bg-red-500 dark:data-[hover]:bg-red-400 dark:data-[active]:bg-red-500',
    ],
    accent: [
      'bg-accent-600 text-white data-[hover]:bg-accent-500 data-[active]:bg-accent-600',
      'dark:bg-accent-500 dark:data-[hover]:bg-accent-400 dark:data-[active]:bg-accent-500',
    ],
  }
}

export function Button({ color = 'dark', outline, plain, className, children, ...props }) {
  let classes = twMerge(
    clsx(
      styles.base,
      outline
        ? styles.outline
        : plain
        ? styles.plain
        : clsx(styles.solid, styles.colors[color]),
      className
    )
  )

  return (
    <HeadlessButton {...props} className={classes}>
      {children}
    </HeadlessButton>
  )
}
