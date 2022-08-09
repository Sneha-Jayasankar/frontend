import { employeeApi } from "../../services/api"


const getEmployeeApi = employeeApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
          query: id => `employee/${id}`,
        }),
  }),
  overrideExisting: false,
})

export const { useGetEmployeeQuery } = getEmployeeApi