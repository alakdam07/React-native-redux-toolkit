import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import ActionSheet from '@expo/react-native-action-sheet/lib/typescript/ActionSheet';


export const fetchDatas = createAsyncThunk(
  `users/fetchDatas`,
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data
  }
)

interface ICat {
  loading: boolean;
  message: string;
  error: boolean;
  cats: string[];
}

const initialState: ICat = { loading: false, message: "", error: false, cats: [] }

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    // loadState(state) {
    //   state.loading = true;
    //   state.message = "";
    //   state.error = false;
    //   state.cats = [];
    // },
    // fetchData(state, action: PayloadAction<ICat["cats"]>) {
    //   state.loading = false;
    //   state.message = "";
    //   state.error = false;
    //   state.cats = action.payload;
    // },
    // failLoad(state, action: PayloadAction<string>) {
    //   state.loading = false;
    //   state.message = action.payload;
    //   state.error = true;
    //   state.cats = [];
    // }
  },
  extraReducers: (i) => {
    i.addCase(fetchDatas.pending, (state) => (
      {
        ...state,
        "loading": true
      }
    ));
    i.addCase(fetchDatas.fulfilled, (state, { payload }) => (
      {
        ...state,
        "cats": payload
      }
    ));
    i.addCase(fetchDatas.rejected, (state, { error }) => (
      {
        ...state,
        error: true,
        message: error?.message

      }
    ));

  }

})

//export const { loadState, failLoad, fetchData } = catSlice.actions;
export default catSlice.reducer;


// export const fetchDatas = (): AppThunk => async (dispatch) => {
//   try {
//     dispatch(loadState());
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     // const users = data.slice(0, 3).map(({ id, name }) => ({ id, name }));
//     dispatch(fetchData(data));

//   } catch (er) {
//     dispatch(failLoad(`jjjjjj`));
//   }
// };
