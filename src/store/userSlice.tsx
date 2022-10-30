import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iListUser, iUser } from "../models/interfaceUser";


const stateInitialUser: iListUser = {
    list_users: [],
    user: {
        createdAt: "",
        first_name: "",
        avatar: "",
        second_name: "",
        email: "",
        id: ""
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: stateInitialUser,
    reducers: {
        setUsers(state, action: PayloadAction<iUser[]>) {
            state.list_users = action.payload;
        },
        setUser(state, action: PayloadAction<iUser|null>) {
            
            state.user = action.payload;

        }
    }
})

export default userSlice.reducer
export const { setUsers, setUser } = userSlice.actions