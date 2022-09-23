import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSettingApi } from '../api/api';
import { reducerUtils } from '../common/utils/asyncUtils';

export const getUserSettingThunk = createAsyncThunk(
  'userSettingSlice/getUsersSettingThunk',
  async () => await getSettingApi()
);

const userSettingSlice = createSlice({
  name: 'usersSettingSlice',
  initialState: reducerUtils.initial(),
  extraReducers: {
    [getUserSettingThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserSettingThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getUserSettingThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default userSettingSlice.reducer;
