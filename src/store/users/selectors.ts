import { StoreState } from "..";

export const selectUsers = (state: StoreState) => state.users.users;