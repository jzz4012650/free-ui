import { Field, Label, Description, ErrorMessage } from '../components/field'
import { Textarea } from '../components/textarea'
import { DemoLayout } from './DemoLayout'

export default function TextareaDemo() {
  return (
    <DemoLayout title="Textarea Component Demo">
      
      {/* Basic Textarea */}
      <Field>
        <Label>Comment</Label>
        <Textarea name="comment" placeholder="Add your comment&hellip;" />
        <Description>Please be respectful to others.</Description>
      </Field>

      {/* Textarea with rows */}
      <Field>
        <Label>Message</Label>
        <Textarea name="message" rows={4} placeholder="Type your message here..." />
      </Field>

      {/* Non-resizable Textarea */}
      <Field>
        <Label>Bio (Fixed size)</Label>
        <Textarea name="bio" resizable={false} rows={3} placeholder="Tell us about yourself" />
      </Field>

      {/* Disabled Textarea */}
      <Field disabled>
        <Label>Disabled Textarea</Label>
        <Textarea name="disabled" placeholder="Cannot type here" disabled />
        <Description>This textarea is disabled.</Description>
      </Field>

      {/* Invalid Textarea */}
      <Field>
        <Label>Invalid Textarea</Label>
        <Textarea name="invalid" defaultValue="Too short" invalid />
        <ErrorMessage>The comment is too short.</ErrorMessage>
      </Field>

    </DemoLayout>
  )
}
