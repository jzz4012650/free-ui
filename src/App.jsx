import InputDemo from './demos/InputDemo'
import TextareaDemo from './demos/TextareaDemo'
import ButtonDemo from './demos/ButtonDemo'
import CheckboxDemo from './demos/CheckboxDemo'
import RadioDemo from './demos/RadioDemo'
import SwitchDemo from './demos/SwitchDemo'
import SelectDemo from './demos/SelectDemo'
import ComboboxDemo from './demos/ComboboxDemo'
import PaginationDemo from './demos/PaginationDemo'
import DialogDemo from './demos/DialogDemo'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <InputDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <SelectDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <ComboboxDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <TextareaDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <CheckboxDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <RadioDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <SwitchDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <ButtonDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <DialogDemo />
      <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
      <PaginationDemo />
    </div>
  )
}

export default App
