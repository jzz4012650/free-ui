import { useState } from 'react'
import { Field, Label, Description } from '../components/field'
import { Checkbox } from '../components/checkbox'
import { DemoLayout } from './DemoLayout'

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(true)

  return (
    <DemoLayout title="Checkbox Component Demo">
      {/* Basic Checkbox */}
      <Field className="flex flex-row items-center gap-2">
        <Checkbox checked={checked} onChange={setChecked} />
        <Label>Enable notifications</Label>
      </Field>

      {/* Checkbox with Description */}
      <Field className="flex flex-row items-start gap-2">
        <Checkbox defaultChecked className="mt-1" />
        <div className="grid">
          <Label>Public profile</Label>
          <Description>This will make your profile visible to everyone.</Description>
        </div>
      </Field>

      {/* Disabled Checkbox */}
      <Field disabled className="flex flex-row items-center gap-2">
        <Checkbox />
        <Label>Disabled option</Label>
      </Field>

      {/* Disabled Checked Checkbox */}
      <Field disabled className="flex flex-row items-center gap-2">
        <Checkbox defaultChecked />
        <Label>Disabled checked option</Label>
      </Field>

      {/* Indeterminate Checkbox */}
      <Field className="flex flex-row items-center gap-2">
        <Checkbox indeterminate />
        <Label>Indeterminate option</Label>
      </Field>
    </DemoLayout>
  )
}
