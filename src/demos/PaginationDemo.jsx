import { Pagination, PaginationPrevious, PaginationNext, PaginationList, PaginationPage, PaginationGap } from '../components/pagination'
import { DemoLayout } from './DemoLayout'

export default function PaginationDemo() {
  return (
    <DemoLayout title="Pagination Component Demo">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default Pagination</h2>
        <Pagination>
          <PaginationPrevious href="#?page=2" />
          <PaginationList>
            <PaginationPage href="#?page=1">1</PaginationPage>
            <PaginationPage href="#?page=2">2</PaginationPage>
            <PaginationPage href="#?page=3" current>3</PaginationPage>
            <PaginationPage href="#?page=4">4</PaginationPage>
            <PaginationGap />
            <PaginationPage href="#?page=65">65</PaginationPage>
            <PaginationPage href="#?page=66">66</PaginationPage>
          </PaginationList>
          <PaginationNext href="#?page=4" />
        </Pagination>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">First Page</h2>
        <Pagination>
          <PaginationPrevious disabled />
          <PaginationList>
            <PaginationPage href="#?page=1" current>1</PaginationPage>
            <PaginationPage href="#?page=2">2</PaginationPage>
            <PaginationPage href="#?page=3">3</PaginationPage>
            <PaginationPage href="#?page=4">4</PaginationPage>
            <PaginationGap />
            <PaginationPage href="#?page=10">10</PaginationPage>
          </PaginationList>
          <PaginationNext href="#?page=2" />
        </Pagination>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Last Page</h2>
        <Pagination>
          <PaginationPrevious href="#?page=9" />
          <PaginationList>
            <PaginationPage href="#?page=1">1</PaginationPage>
            <PaginationGap />
            <PaginationPage href="#?page=7">7</PaginationPage>
            <PaginationPage href="#?page=8">8</PaginationPage>
            <PaginationPage href="#?page=9">9</PaginationPage>
            <PaginationPage href="#?page=10" current>10</PaginationPage>
          </PaginationList>
          <PaginationNext disabled />
        </Pagination>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Simple (Previous/Next only)</h2>
        <Pagination>
          <PaginationPrevious href="#?page=1" />
          <PaginationNext href="#?page=3" />
        </Pagination>
      </section>
    </DemoLayout>
  )
}
