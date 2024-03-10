import { createSlice } from '@reduxjs/toolkit';
import { IFormFilter, FormFilterData } from '../../components/Filter/Filter.type';

interface IFilterState {
  filterData: IFormFilter;
}

const initialState: IFilterState = {
  filterData: FormFilterData,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    recordFilterData: (state, action) => {
      state.filterData = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchFilmIdThunk.pending, (state) => {
  //     state.status = 'loading';
  //     state.error = null;
  //   });
  //   builder.addCase(fetchFilmIdThunk.fulfilled, (state, action) => {
  //     state.status = 'resolved';
  //     state.film = action.payload;
  //   });
  //   builder.addCase(fetchFilmIdThunk.rejected, (state, action) => {
  //     state.status = 'rejected';
  //     state.error = action.payload;
  //   });
  // },
});

export const { recordFilterData } = filterSlice.actions;

export default filterSlice.reducer;
