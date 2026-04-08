import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../util/createBaseQuery.ts";
import type {IUser} from "../types/IUser.ts";

//експортує юзерів в Redux
export const apiUsers = createApi({
    reducerPath: 'users',
    baseQuery: createBaseQuery("users"),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => '',
        }),
    })
});
//fetch дані з API
export const {
    useGetUsersQuery
}  = apiUsers;