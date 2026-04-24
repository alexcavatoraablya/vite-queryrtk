import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import type {IRegister} from "../types/account/IRegister.ts";
import type {IRegisterResponse} from "../types/account/IRegisterResponse.ts";

//експортує юзерів в Redux
export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createAWSQuery("account"),
    endpoints: (builder) => ({
        // getUsers: builder.query<IUser[], void>({
        //     query: () => '',
        // }),
        register: builder.mutation<IRegisterResponse, IRegister>({
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