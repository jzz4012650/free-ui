import { useState } from 'react'
import { Combobox, ComboboxLabel, ComboboxOption } from '../components/combobox'
import { DemoLayout } from './DemoLayout'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudia Gardner' },
  { id: 10, name: 'Cody Fisher' },
  { id: 11, name: 'Tony Simmons' },
  { id: 12, name: 'Brian Hurst' },
  { id: 13, name: 'Crysta Wise' },
  { id: 14, name: 'Autumn Flynn' },
  { id: 15, name: 'Leonard Bartlett' },
]

export default function ComboboxDemo() {
  const [selected, setSelected] = useState(people[0])

  return (
    <DemoLayout title="Combobox Component Demo">
      <div className="w-full max-w-md">
        <Combobox
          name="user"
          options={people}
          displayValue={(person) => person?.name}
          value={selected}
          onChange={setSelected}
          aria-label="Assigned to"
        >
          {(person) => (
            <ComboboxOption value={person}>
              <ComboboxLabel>{person.name}</ComboboxLabel>
            </ComboboxOption>
          )}
        </Combobox>
      </div>
    </DemoLayout>
  )
}
