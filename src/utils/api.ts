import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "/users",
            providesTags: (result: any) =>
                result
                    ? [
                        ...result.map(({ id }: any) => ({ type: "User" as const, id })),
                        { type: "User" as const, id: "LIST" }
                    ]
                    : [{ type: "User" as const, id: "LIST" }],
        }),
        Courses: build.query({
            query: () => "/courses",
            providesTags: (result: any) =>
                result
                    ? [
                        ...result.map(({ id }: any) => ({ type: "User" as const, id })),
                        { type: "User" as const, id: "LIST" }
                    ]
                    : [{ type: "User" as const, id: "LIST" }],
        }),
        Codes: build.query({
            query: () => "/codes",
            providesTags: (result: any) =>
                result
                    ? [
                        ...result.map(({ id }: any) => ({ type: "User" as const, id })),
                        { type: "User" as const, id: "LIST" }
                    ]
                    : [{ type: "User" as const, id: "LIST" }],
        }),
        addUser: build.mutation({
            query(body: any) {
                return {
                    url: "/users",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
        Course: build.mutation({
            query(body: any) {
                return {
                    url: "/courses",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
        Code: build.mutation({
            query(body: any) {
                return {
                    url: "/code",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
        delUser: build.mutation({
            query(id: any) {
                return {
                    url: "/users/" + id,
                    method: "DELETE",
                };
            },
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
        updateUser: build.mutation({
            query(data: any) {
                const { id, ...body } = data;
                return {
                    url: "/users/" + id,
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useDelUserMutation,
    useUpdateUserMutation,
    useCodeMutation,
    useCourseMutation,
    useCoursesQuery,
    useCodesQuery
} = userApi;