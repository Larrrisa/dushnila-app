import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataSlice = createSlice({
  name: "data",
  initialState: { data: {}, status: "", message: "" },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      if (state.data.temp <= 27 || state.data.co2 <= 800) {
        state.status = "good";
        state.message = "Душнила доволен вами";
      } else {
        state.status = "bad";
        state.message = "Душнила не доволен вами";
      }
    },
  },
});

export const { setData, setStatus, setMessage } = dataSlice.actions;

export const getData = () => (dispatch) => {
  axios
    .get("http://dushnila.gooddelo.com/data")
    .then((response) => {
      dispatch(setData(response.data));
    })
    .catch((error) => console.log(error));
};

export default dataSlice.reducer;
