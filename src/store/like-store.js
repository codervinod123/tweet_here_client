import { atom } from "recoil";

export const likeCountStore=atom({
   key: "likeCountStore",
   default: 0,
});