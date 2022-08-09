import { employeeApi } from "../../services/api"


const createEmployeeApi = employeeApi.injectEndpoints({
    endpoints: (builder) => ({
        createEmployee: builder.mutation({
            query: newEmp =>  ({
            url: `employee/`,
            method: 'POST',
            body: newEmp
            }),
            invalidatesTags: ['employee'],
        }),
    }),
  overrideExisting: false,
})

export const { useCreateEmployeeMutation } = createEmployeeApi;