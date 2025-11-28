import { Button } from '../components/button'
import { DemoLayout } from './DemoLayout'

export default function ButtonDemo() {
  return (
    <DemoLayout title="Button Component Demo">
      
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Solid Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default (Dark)</Button>
          <Button color="white">White</Button>
          <Button color="zinc">Zinc</Button>
          <Button color="indigo">Indigo</Button>
          <Button color="cyan">Cyan</Button>
          <Button color="red">Red</Button>
          <Button color="accent">Accent</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Outline Variant</h2>
        <div className="flex flex-wrap gap-4">
          <Button outline>Outline Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Plain Variant</h2>
        <div className="flex flex-wrap gap-4">
          <Button plain>Plain Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button color="indigo" disabled>Disabled Color</Button>
        </div>
      </section>
    </DemoLayout>
  )
}
