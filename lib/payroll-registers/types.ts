export type PayrollRegisterDetails = {
  check_details: CheckDetails;
  claimant: string;
  reference_number: string;
  periods: PeriodDetails[]
}

export type CheckDetails = {
  number: number;
  date: string;
  amount: number
}


export type PeriodDetails = {
  period: string;
  employees: EmployeeDetails[];
  period_summary: PeriodSummary;
};

export type EmployeeDetails = {
  employee_number: string;
  employee_name: string;
  earnings: EarningDetails[];
  statutory_deductions: DeductionDetails[];
  other_deductions: DeductionDetails[];
  employee_summary: EmployeeSummary;
};

export type EarningDetails = {
  type: string;
  code_name: string;
  amount: number;
};

export type DeductionDetails = {
  type: string;
  code: string;
  code_name: string;
  personal: number;
  govt: number;
};

export type EmployeeSummary = {
  gross_earnings: number;
  other_deductions: number;
  statutory_deductions_personal: number;
  statutory_deductions_govt: number;
  net_pay: number;
};

export type PeriodSummary = {
  number_of_employees: number;
  earnings: EarningDetails[];
  statutory_deductions: DeductionDetails[];
  other_deductions: DeductionDetails[];
  summary: EmployeeSummary;
};
