import { createSlice } from '@reduxjs/toolkit';
import { IFilter, FilterData } from '../../components/Filter/Filter.type.';
import { fetchFilmFilterThunk } from '../Thunk/fetchFilmFilterThunk';

interface IFilterState {
  filterData: IFilter;
  status: string | null;
  error: string | null | unknown;
  page: number;
}

const initialState: IFilterState = {
  filterData: FilterData,
  status: null,
  error: null,
  page: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    recordFilterData: (state, action) => {
      console.log(action.payload);
      state.filterData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmFilterThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchFilmFilterThunk.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.filterData = action.payload;
    });
    builder.addCase(fetchFilmFilterThunk.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const { recordFilterData } = filterSlice.actions;

export default filterSlice.reducer;
