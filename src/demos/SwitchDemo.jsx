import { useState } from 'react'
import { Field, Label, Description } from '../components/field'
import { Switch } from '../components/switch'
import { DemoLayout } from './DemoLayout'

export default function SwitchDemo() {
  const [enabled, setEnabled] = useState(true)

  return (
    <DemoLayout title="Switch Component Demo">
      {/* Basic Switch */}
      <Field className="flex flex-row items-center gap-2">
        <Switch checked={enabled} onChange={setEnabled} />
        <Label>Enable notifications</Label>
      </Field>

      {/* Switch with Description */}
      <Field className="flex flex-row items-start gap-2">
        <Switch defaultChecked className="mt-1" />
        <div className="grid">
          <Label>Public profile</Label>
          <Description>This will make your profile visible to everyone.</Description>
        </div>
      </Field>

      {/* Disabled Switch */}
      <Field disabled className="flex flex-row items-center gap-2">
        <Switch />
        <Label>Disabled option</Label>
      </Field>

      {/* Disabled Checked Switch */}
      <Field disabled className="flex flex-row items-center gap-2">
        <Switch defaultChecked />
        <Label>Disabled checked option</Label>
      </Field>
    </DemoLayout>
  )
}
