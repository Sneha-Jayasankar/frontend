import { employeeApi } from "../../services/api"


const getAllEmployeesApi = employeeApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
        query: () => `employee/`,
        providesTags: ['employee'],
      }),
  }),
  overrideExisting: false,
})

export const { useGetAllEmployeesQuery } = getAllEmployeesApi