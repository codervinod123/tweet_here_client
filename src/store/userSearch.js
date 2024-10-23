import { atom } from "recoil";

export const userSearch=atom({
    key: "userSearchText",
    default: "",
})