import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { UserDispatch, UserState } from "./storeUser";



export const useAppDispatch: () => UserDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<UserState> = useSelector;