import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const storeUser = configureStore({
    reducer: {
        userSlice

    }
})
export type UserState = ReturnType<typeof storeUser.getState>;
export type UserDispatch = typeof storeUser.dispatch;
export default storeUser;