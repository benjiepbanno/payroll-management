export default function PayrollRegisterPeriodEmployee() {
  return (
    <div className="grid grid-cols-30 gap-x-1 text-sm border">
      <div className="">1</div>
      <div className="col-span-2">123456</div>
      <div className="col-span-3">Antoque, Khyn Harold Jay P.</div>

      <div className="col-span-5 bg-sky-500">
        <div>Basic Salary/Rate</div>
        <div>P.E.R.A</div>
        <div>Overtime Pay</div>
      </div>

      <div className="col-span-5 bg-sky-200">
        <div>LandBank Loan</div>
        <div>BDO Loan</div>
        <div>Pag-ibig addtl Contribution</div>
      </div>

      <div className="col-span-7 bg-sky-500">
        <div>Withholding Tax</div>
        <div>GSIS</div>
        <div>PhilHealth</div>
        <div>Pag-ibig</div>
        <div>State Insurance</div>
      </div>

      <div className="col-span-7 bg-sky-200">
        <div>Gross Earnings</div>
        <div>Other Deductions</div>
        <div>Statutory Deductions - Personal Share</div>
        <div>Statutory Deductions - Government Share</div>
        <div className="font-bold">Net Pay</div>
      </div>
    </div>
  );
}
