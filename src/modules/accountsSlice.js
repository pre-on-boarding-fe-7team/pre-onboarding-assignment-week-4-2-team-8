import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccountsApi } from '../api/api';
import { reducerUtils } from '../common/utils/asyncUtils';

//action Fn
export const getAccountsThunk = createAsyncThunk(
  'accountsSlice/getAccountsThunk',
  async () => await getAccountsApi()
);

//slice
const accountsSlice = createSlice({
  name: 'accounts',
  initialState: reducerUtils.initial(),
  extraReducers: {
    [getAccountsThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getAccountsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAccountsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default accountsSlice.reducer;
