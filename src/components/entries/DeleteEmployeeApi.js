import { employeeApi } from "../../services/api"


const deleteEmployeeApi = employeeApi.injectEndpoints({
    endpoints: (builder) => ({
        deleteEmployee: builder.mutation({
                query: id =>  ({
                  url: `employee/${id}`,
                  method: 'DELETE'
                }),
              }),
    }),
  overrideExisting: false,
})

export const { useDeleteEmployeeMutation } = deleteEmployeeApi;