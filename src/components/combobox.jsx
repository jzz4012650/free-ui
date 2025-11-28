import { Combobox as HeadlessCombobox, ComboboxInput as HeadlessComboboxInput, ComboboxButton as HeadlessComboboxButton, ComboboxOptions as HeadlessComboboxOptions, ComboboxOption as HeadlessComboboxOption } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Fragment, useState, useMemo } from 'react';

export function Combobox({ options, displayValue, className, placeholder, children, ...props }) {
  const [query, setQuery] = useState('');

  const filteredOptions = useMemo(() => {
    if (!options) return [];
    if (query === '') return options;
    return options.filter((option) => {
      const value = displayValue ? displayValue(option) : String(option);
      return value.toLowerCase().includes(query.toLowerCase());
    });
  }, [options, query, displayValue]);

  return (
    <HeadlessCombobox as="div" className={clsx(className, 'relative')} onClose={() => setQuery('')} {...props}>
      <ComboboxInput
        displayValue={displayValue}
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
      >
        <ComboboxButton />
      </ComboboxInput>
      <ComboboxOptions anchor="bottom start" className="empty:invisible">
        {filteredOptions.map((option, index) => (
          <Fragment key={index}>
            {children(option)}
          </Fragment>
        ))}
      </ComboboxOptions>
    </HeadlessCombobox>
  );
}

export function ComboboxLabel({ className, ...props }) {
  return <span className={clsx(className, 'truncate')} {...props} />;
}

export function ComboboxInput({ className, children, ...props }) {
  return (
    <span
      data-slot="control"
      className={twMerge(
        clsx(
          // Basic layout
          'relative block w-full',
          // Background & Border
          'before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden',
          'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-accent-500',
          // Dark mode background
          'dark:bg-white/5 dark:rounded-lg',
          // Disabled
          'has-data-disabled:opacity-50 before:has-data-disabled:bg-zinc-950/5 before:has-data-disabled:shadow-none',
        )
      )}
    >
      <HeadlessComboboxInput
        className={twMerge(clsx(
          className,
          // Layout
          'relative block w-full appearance-none rounded-lg py-[calc(--spacing(2.5)-1px)] sm:py-[calc(--spacing(1.5)-1px)]',
          // Padding
          'pl-[calc(--spacing(3.5)-1px)] pr-10 sm:pl-[calc(--spacing(3)-1px)]',
          // Typography
          'text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white',
          // Background & Border (Reset)
          'border border-zinc-950/10 bg-transparent dark:border-white/10 dark:bg-transparent',
          // Focus
          'focus:outline-hidden',
          // Invalid state
          'data-invalid:border-red-500 data-invalid:data-hover:border-red-500 data-invalid:dark:border-red-500 data-invalid:data-hover:dark:border-red-500',
          // Disabled
          'data-disabled:border-zinc-950/20 data-disabled:cursor-not-allowed dark:data-disabled:border-white/15 dark:data-disabled:bg-white/2.5 dark:data-disabled:text-zinc-400'
        ))}
        {...props}
      />
      {children}
    </span>
  );
}

export function ComboboxButton({ className, ...props }) {
  return (
    <HeadlessComboboxButton
      className={twMerge(clsx(
        className,
        'group absolute inset-y-0 right-0 px-2.5'
      ))}
      {...props}
    >
      <ChevronUpDownIcon className="size-4 fill-zinc-500 group-hover:fill-zinc-700 dark:fill-zinc-400 dark:group-hover:fill-zinc-200" />
    </HeadlessComboboxButton>
  );
}

export function ComboboxOptions({ className, ...props }) {
  return (
    <HeadlessComboboxOptions
      transition
      className={twMerge(clsx(
        className,
        // Anchor positioning
        !props.anchor && 'absolute',
        // Anchor & Layout
        '[--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(4)] sm:data-[anchor~=start]:[--anchor-offset:-4px]',
        'isolate z-50 max-h-60 min-w-[calc(var(--input-width)+8px)]',
        'overflow-y-scroll overscroll-contain scroll-py-1',
        'rounded-xl p-1',
        // Colors & Styles
        'bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75',
        'shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset',
        'outline outline-transparent focus:outline-hidden select-none',
        // Transition
        'transition-opacity duration-100 ease-in data-leave:data-closed:opacity-0 data-transition:pointer-events-none',
        // Empty
        'empty:invisible'
      ))}
      {...props}
    />
  )
}

export function ComboboxOption({ className, children, ...props }) {
  return (
    <HeadlessComboboxOption
      className={twMerge(clsx(
        className,
        'group relative cursor-default select-none rounded-lg py-2 pl-3 pr-9 text-zinc-900 data-focus:bg-accent-500 data-focus:text-white dark:text-zinc-100'
      ))}
      {...props}
    >
      {({ selected, focus }) => (
        <>
          <span className={clsx('block truncate', selected && 'font-semibold')}>{children}</span>
          {selected && (
            <span
              className={clsx(
                'absolute inset-y-0 right-0 flex items-center pr-4',
                focus ? 'text-white' : 'text-accent-600'
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </HeadlessComboboxOption>
  );
}
