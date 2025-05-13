export type PeriodDetails = {
  period: string;
  employees: EmployeeDetails[];
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
