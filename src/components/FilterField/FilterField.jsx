import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  StyledInputBase,
  SearchIconWrapper,
} from './FielterField.styled';

export const FilterField = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
      />
    </Search>
  );
};
