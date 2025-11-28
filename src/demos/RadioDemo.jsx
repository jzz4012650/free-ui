import { useState } from 'react'
import { Radio, RadioGroup } from '../components/radio'
import { Field, Label, Description } from '../components/field'
import { DemoLayout } from './DemoLayout'

const plans = [
  { name: 'Startup', description: '12GB/6CPUs', value: 'startup' },
  { name: 'Business', description: '16GB/8CPUs', value: 'business' },
  { name: 'Enterprise', description: '32GB/12CPUs', value: 'enterprise' },
]

export default function RadioDemo() {
  const [selected, setSelected] = useState(plans[0].value)

  return (
    <DemoLayout title="Radio Component Demo">
      <div className="w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected} className="space-y-4">
          {plans.map((plan) => (
            <Field key={plan.value} className="flex flex-row items-start gap-3">
              <Radio value={plan.value} className="mt-1" />
              <div className="grid">
                <Label>{plan.name}</Label>
                <Description>{plan.description}</Description>
              </div>
            </Field>
          ))}
        </RadioGroup>
      </div>
      
      <div className="mt-8 border-t pt-8">
        <h2 className="text-lg font-semibold mb-4">Simple Radio Group</h2>
        <RadioGroup defaultValue="1" className="flex gap-6">
            <Field className="flex flex-row items-center gap-2">
                <Radio value="1" />
                <Label>Option 1</Label>
            </Field>
            <Field className="flex flex-row items-center gap-2">
                <Radio value="2" />
                <Label>Option 2</Label>
            </Field>
        </RadioGroup>
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-lg font-semibold mb-4">Disabled Radio</h2>
        <RadioGroup defaultValue="1" className="flex gap-6">
            <Field disabled className="flex flex-row items-center gap-2">
                <Radio value="1" />
                <Label>Disabled Option</Label>
            </Field>
             <Field className="flex flex-row items-center gap-2">
                <Radio value="2" disabled />
                <Label>Disabled Radio Only</Label>
            </Field>
        </RadioGroup>
      </div>
    </DemoLayout>
  )
}
