import PageHeader from "@/components/page-header";
import SearchForm from "@/components/payroll-registers/search-form";





export default function Page() {
  return (
    <div className="space-y-16">
      <PageHeader title="Payroll Registers" />

      <SearchForm />
    </div>
  )
}