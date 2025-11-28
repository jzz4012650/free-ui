import { clsx } from 'clsx'
import { Button } from './button'

export function Pagination({ className, children, ...props }) {
  return (
    <nav
      aria-label="Pagination"
      className={clsx('flex justify-between gap-x-2', className)}
      {...props}
    >
      {children}
    </nav>
  )
}

export function PaginationPrevious({ href = null, className, children = 'Previous', ...props }) {
  return (
    <span className={clsx('grow basis-0', className)}>
      <Button
        {...(href ? { href } : {})}
        plain
        aria-label="Previous page"
        {...props}
      >
        <svg className="size-4 stroke-current" data-slot="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10.25 3.75L5.75 8.25L10.25 12.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {children}
      </Button>
    </span>
  )
}

export function PaginationNext({ href = null, className, children = 'Next', ...props }) {
  return (
    <span className={clsx('flex grow basis-0 justify-end', className)}>
      <Button
        {...(href ? { href } : {})}
        plain
        aria-label="Next page"
        {...props}
      >
        {children}
        <svg className="size-4 stroke-current" data-slot="icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M5.75 3.75L10.25 8.25L5.75 12.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
    </span>
  )
}

export function PaginationList({ className, children, ...props }) {
  return (
    <span
      className={clsx('hidden items-baseline gap-x-2 sm:flex', className)}
      {...props}
    >
      {children}
    </span>
  )
}

export function PaginationPage({ href = null, className, current = false, children, ...props }) {
  return (
    <Button
      {...(href ? { href } : {})}
      plain
      aria-label={`Page ${children}`}
      aria-current={current ? 'page' : undefined}
      className={clsx(
        'min-w-9 before:hidden hover:bg-zinc-950/5 dark:hover:bg-white/10',
        current && 'bg-zinc-950/5 dark:bg-white/10',
        !current && 'font-normal text-zinc-950/60 dark:text-white/60',
        className
      )}
      {...props}
    >
      <span className={clsx('-mx-0.5', current && 'text-zinc-950 dark:text-white')}>
        {children}
      </span>
    </Button>
  )
}

export function PaginationGap({ className, children = <>&hellip;</>, ...props }) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        'w-9 select-none text-center text-sm/6 font-semibold text-zinc-950/50 dark:text-white/50',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
