import { PeriodDetails } from "@/lib/payroll-registers/types";

type EarningsSummaryItem = {
  code_name: string;
  amount: number;
};

function getEarningsSummaryByType(periodDetails: PeriodDetails): EarningsSummaryItem[] {
  const summaryMap: {
    [type: string]: { code_name: string; amount: number };
  } = {};

  for (const employee of periodDetails.employees) {
    for (const earning of employee.earnings) {
      if (!summaryMap[earning.type]) {
        summaryMap[earning.type] = {
          code_name: earning.code_name, // capture the first code_name seen for this type
          amount: 0,
        };
      }
      summaryMap[earning.type].amount += earning.amount;
    }
  }

  return Object.values(summaryMap);
}
