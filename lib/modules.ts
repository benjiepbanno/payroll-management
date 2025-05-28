export const modules: {
  title: string;
  description: string;
  href: string;
  accessKey: keyof ModuleAccess;
}[] = [
  {
    title: "Carded Payrolls",
    description: "View and remove carded payrolls.",
    href: "/carded-payrolls",
    accessKey: "carded_payrolls_access",
  },
  {
    title: "Employee Details",
    description: "View and compare employee details.",
    href: "/employee-details",
    accessKey: "employee_details_access",
  },
  {
    title: "Payroll Registers",
    description: "View general payroll registers.",
    href: "/payroll-registers",
    accessKey: "payroll_registers_access",
  },
];

export type ModuleAccess = {
  carded_payrolls_access: number;
  employee_details_access: number;
  payroll_registers_access: number;
};
