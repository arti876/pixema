import { createSlice } from '@reduxjs/toolkit';
import { IFilter, FilterData } from '../../components/Filter/Filter.type.';

interface IFilterState {
  filterData: IFilter;
}

const initialState: IFilterState = {
  filterData: FilterData,
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
