import { configureStore } from "@reduxjs/toolkit";
import slice from "./dataSlice";

export default configureStore({
  reducer: {
    slice,
  },
});
