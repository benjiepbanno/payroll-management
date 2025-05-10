export default function PayrollRegisterTableHeaders() {
  return (
    <div className="grid grid-cols-30 gap-x-1 text-sm font-bold text-center border-b-2">
      <div className="font-bold">#</div>
      <div className="col-span-5">Claimant</div>
      <div className="col-span-5">Earnings</div>
      <div className="col-span-5">Other Deductions</div>
      <div className="col-span-7">Statutory Deductions</div>
      <div className="col-span-7">Summary</div>

      <div className="col-span-2 col-start-2">Cntrl #</div>
      <div className="col-span-3">Name</div>
      <div className="col-span-3">Description</div>
      <div className="col-span-2">Amount</div>
      <div className="col-span-3">Description</div>
      <div className="col-span-2">Amount</div>
      <div className="col-span-3">Description</div>
      <div className="col-span-2">Personal</div>
      <div className="col-span-2">Government</div>
      <div className="col-span-5">Description</div>
      <div className="col-span-2">Amount</div>
    </div>
  );
}
