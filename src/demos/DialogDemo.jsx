import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, DialogDescription, DialogActions } from '../components/dialog'
import { Button } from '../components/button'
import { DemoLayout } from './DemoLayout'

export default function DialogDemo() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <DemoLayout title="Dialog">
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel>
          <DialogTitle>Payment successful</DialogTitle>
          <DialogDescription>
            Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
          </DialogDescription>
          <DialogActions>
            <Button plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Got it, thanks!
            </Button>
          </DialogActions>
        </DialogPanel>
      </Dialog>
    </DemoLayout>
  )
}
