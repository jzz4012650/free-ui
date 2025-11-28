import { Dialog as HeadlessDialog, DialogPanel as HeadlessDialogPanel, DialogTitle as HeadlessDialogTitle, DialogBackdrop, Description as HeadlessDescription } from '@headlessui/react'
import { clsx } from 'clsx'

export function Dialog({ open, onClose, children, className, ...props }) {
  return (
    <HeadlessDialog open={open} onClose={onClose} className={clsx("relative z-50", className)} {...props}>
      <DialogBackdrop
        transition
        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25 px-2 py-2 transition duration-100 focus:outline-0 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-zinc-950/50"
      />
      <div className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
        <div className="grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4">
            {children}
        </div>
      </div>
    </HeadlessDialog>
  )
}

export function DialogPanel({ children, className, ...props }) {
  return (
    <HeadlessDialogPanel
      transition
      className={clsx(
        "sm:max-w-lg row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:mb-auto sm:rounded-2xl dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline transition duration-100 will-change-transform data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:data-closed:translate-y-0 sm:data-closed:data-enter:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </HeadlessDialogPanel>
  )
}

export function DialogTitle({ children, className, ...props }) {
  return (
    <HeadlessDialogTitle
      as="h3"
      className={clsx("text-lg/6 font-semibold text-balance text-zinc-950 sm:text-base/6 dark:text-white", className)}
      {...props}
    >
      {children}
    </HeadlessDialogTitle>
  )
}

export function DialogDescription({ children, className, ...props }) {
    return (
        <HeadlessDescription className={clsx("mt-2 text-pretty text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400", className)} {...props}>
            {children}
        </HeadlessDescription>
    )
}

export function DialogBody({ children, className, ...props }) {
    return (
        <div className={clsx("mt-6", className)} {...props}>
            {children}
        </div>
    )
}

export function DialogActions({ children, className, ...props }) {
    return (
        <div className={clsx("mt-8 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:flex-row sm:*:w-auto", className)} {...props}>
            {children}
        </div>
    )
}
