import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import type {IPost} from "../types/IPost.ts";
import type {ICreatePost} from "../types/ICreatePost.ts";
//import type {IUser} from "../types/IUser.ts";

//експортує юзерів в Redux
export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createAWSQuery("account"),
    endpoints: (builder) => ({
        // getUsers: builder.query<IUser[], void>({
        //     query: () => '',
        // }),
        register: builder.mutation<IPost, ICreatePost>({
            query: (body) => ({
                url: "register",
                method: "POST",
                body
            })
        })
    })
});
//fetch дані з API
export const {
    useRegisterMutation
}  = apiAccount;