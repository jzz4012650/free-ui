import { Field, Label, Description } from '../components/field'
import { Select } from '../components/select'
import { DemoLayout } from './DemoLayout';

export default function SelectDemo() {
  return (
    <DemoLayout title="Radio Component Demo">
      <Field>
        <Label>Status</Label>
        <Description>The status of the order</Description>
        <Select name="status" aria-label="Project status">
          <option value="active">Active</option>
          <option value="paused">Paused</option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>
      </Field>

      <Field>
        <Label>Country</Label>
        <Select name="country" aria-label="Country">
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="mx">Mexico</option>
        </Select>
      </Field>

      <Field disabled>
        <Label>Disabled</Label>
        <Select name="disabled" aria-label="Disabled">
            <option value="1">Option 1</option>
        </Select>
      </Field>
    </DemoLayout>
  )
}
