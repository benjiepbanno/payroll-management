export type AccountingEmployeeDetails = {
  empno: string;
  lastname: string;
  firstname: string;
  middlename: string;
  dob: string;
  gender: string;
  address: string;
  agency_tin: string;
  agency_gsis: string;
  agency_pagibig: string;
  agency_philhealth: string;
  agency_sss: string;
  appt: string;
  rate: string;
  date_hired: string;
  date_retired: string;
  office: string;
  charges: string;
  account: string;
};

export type HumanResourceEmployeeDetails = {
  employeeNumber: string;
  employee: {
    firstName: string;
    lastName: string;
    middleName: string;
  };
  birthDate: string;
  sex: string;
  currentAppointment: {
    employmentType: string;
    officeName: string;
    position: string;
    programCode: string;
    program: string;
    expenseCode: string;
    division: string;
  };
  currentEmployment: {
    dateFrom: string;
    dateTo: string;
    rate: string;
    actualSalaryAnnual: string;
    actualSalaryMonthly: string;
    statusAppointment: string;
    remarksAppointment: string;
  };
  philHealth: string;
  originalAppointmentDate: string;
};
