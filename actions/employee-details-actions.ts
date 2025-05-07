"use server";

type FetchResponse = {
  body: any;
  error: string | null;
};

export async function fetchAccountingEmployeeDetails(values: {
  primary: string;
  search_by: string;
  employee_number: string;
  last_name: string;
  first_name: string;
  middle_name: string;
}): Promise<FetchResponse> {
  try {
    const { primary, search_by, employee_number, last_name, first_name, middle_name } = values;

    const baseUrl = search_by === "employee-number" ? `http://127.0.0.1:8000/api/payroll-management/employee-details/accounting/${employee_number}` : `http://127.0.0.1:8000/api/payroll-management/employee-details/accounting`;

    const url = new URL(baseUrl);

    if (search_by === "employee-name") {
      if (last_name) {
        url.searchParams.append("last_name", last_name);
      }
      if (first_name) {
        url.searchParams.append("first_name", first_name);
      }
      if (middle_name) {
        url.searchParams.append("middle_name", middle_name);
      }
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: {},
        error: "An error occurred while fetching data",
      };
    }

    const data = await response.json();
    console.log(
      "Employee Details Actions fetchAccountingEmployeeDetails response:",
      data
    );

    return {
      body: data,
      error: null,
    };
  } catch (error) {
    return {
      body: {},
      error: "Server error. Please check the API connection.",
    };
  }
}

export async function fetchHumanResourceEmployeeDetails(values: {
  primary: string;
  search_by: string;
  employee_number: string;
  last_name: string;
  first_name: string;
  middle_name: string;
}): Promise<FetchResponse> {

  try {
    const { primary, search_by, employee_number, last_name, first_name, middle_name } = values;

    const baseUrl = search_by === "employee-number" ? `http://127.0.0.1:8000/api/payroll-management/employee-details/human-resource/${employee_number}` : `http://127.0.0.1:8000/api/payroll-management/employee-details/human-resource`;

    const url = new URL(baseUrl);

    if (search_by === "employee-name") {
      if (last_name) {
        url.searchParams.append("last_name", last_name);
      }
      if (first_name) {
        url.searchParams.append("first_name", first_name);
      }
      if (middle_name) {
        url.searchParams.append("middle_name", middle_name);
      }
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        body: {},
        error: "An error occurred while fetching data",
      };
    }

    const data = await response.json();
    console.log(
      "Employee Details Actions fetchEmployeeDetails response:",
      data
    );

    return {
      body: data,
      error: null,
    };
  } catch (error) {
    return {
      body: {},
      error: "Server error. Please check the API connection.",
    };
  }
}
