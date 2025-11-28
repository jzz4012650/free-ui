import { Field, Label, Description, ErrorMessage } from '../components/field'
import { Input, InputGroup } from '../components/input'
import { MagnifyingGlassIcon, CalendarIcon } from '@heroicons/react/16/solid'
import { DemoLayout } from './DemoLayout'

export default function InputDemo() {
  return (
    <DemoLayout title="Input Component Demo">
      
      {/* Basic Input */}
      <Field>
        <Label>Email address</Label>
        <Input name="email" type="email" placeholder="you@example.com" />
        <Description>We'll never share your email with anyone else.</Description>
      </Field>

      {/* Input with Icon */}
      <Field>
        <Label>Search</Label>
        <InputGroup>
          <MagnifyingGlassIcon />
          <Input name="search" placeholder="Search&hellip;" aria-label="Search" />
        </InputGroup>
      </Field>

      {/* Input with Icon at end */}
      <Field>
        <Label>Date</Label>
        <InputGroup>
          <Input name="date" placeholder="YYYY-MM-DD" />
          <CalendarIcon />
        </InputGroup>
      </Field>

      {/* Disabled Input */}
      <Field disabled>
        <Label>Disabled Input</Label>
        <Input name="disabled" placeholder="Cannot type here" disabled />
        <Description>This input is disabled.</Description>
      </Field>

      {/* Input with Error */}
      <Field>
        <Label>Invalid Input</Label>
        <Input name="invalid" type="email" defaultValue="invalid-email" invalid />
        <ErrorMessage>Please enter a valid email address.</ErrorMessage>
      </Field>

      {/* Input with default value */}
      <Field>
        <Label>Website</Label>
        <Input name="website" defaultValue="https://example.com" />
      </Field>
    </DemoLayout>
  )
}
