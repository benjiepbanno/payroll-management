export default function PayrollRegisterSummaryTableHeaders() {
  return (
    <div className="grid grid-cols-30 gap-x-1 text-sm font-bold text-center">
      <div className="font-bold bg-sky-200">#</div>
      <div className="col-span-6 bg-sky-500">Claimant</div>
      <div className="col-span-5 bg-sky-200">Earnings</div>
      <div className="col-span-5 bg-sky-500">Other Deductions</div>
      <div className="col-span-7 bg-sky-200">Statutory Deductions</div>
      <div className="col-span-6 bg-sky-500">Summary</div>

      <div className="col-span-6 col-start-2 bg-sky-500">Number of Personnel</div>
      <div className="col-span-3 bg-sky-500">Description</div>
      <div className="col-span-2 bg-sky-200">Amount</div>
      <div className="col-span-3 bg-sky-500">Description</div>
      <div className="col-span-2 bg-sky-200">Amount</div>
      <div className="col-span-3 bg-sky-500">Description</div>
      <div className="col-span-2 bg-sky-200">Personal</div>
      <div className="col-span-2 bg-sky-200">Government</div>
      <div className="col-span-4 bg-sky-500">Description</div>
      <div className="col-span-2 bg-sky-200">Amount</div>
    </div>
  );
}
