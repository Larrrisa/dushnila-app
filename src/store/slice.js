import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
  name: "data",
  initialState: { data: {} },
  reducers: {
    setData: (state, action) => {
      console.log(state, action);
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export const getData = () => (dispatch) => {
  axios
    .get("http://dushnila.gooddelo.com/data")
    .then((response) => {
      dispatch(setData(response.data));
      console.log(response.data);
    })
    .catch((error) => console.log(error));
};

export default dataSlice.reducer;

// export async function getData(dispatch) {
//   try {
//     const link = "http://dushnila.gooddelo.com/data";
//     const result = await fetch(link);
//     const data = await result.json();
//     dispatch(setData(data));
//   } catch {
//     console.log("ERROR");
//   }
// }
