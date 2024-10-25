import { atom } from "recoil";

export const commentCountStore=atom({
   key: "commentCountStore",
   default: 0,
});