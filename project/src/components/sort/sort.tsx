import React, {useState} from 'react';
import {SortType} from '../../const';
import {changeSort} from '../../store/action';
import {getCurrentSortType} from '../../store/offers-data/selectors';
import {useSelector, useDispatch} from 'react-redux';

function Sort(): JSX.Element {
  const dispatch = useDispatch();
  const currentSortType = useSelector(getCurrentSortType);
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const sortTypes = Object.values(SortType);
  const onSortTypeChange = (sortType: SortType) => {
    dispatch(changeSort(sortType));
  };

  const onSortType = (sortType: SortType): void => {
    if (sortType !== currentSortType) {
      onSortTypeChange(sortType);
    }
    setDropDownState(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() =>setDropDownState(!dropDownState)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${dropDownState ? 'places__options--opened' : 'places__options--closed'}`}>
        {
          sortTypes.map((x) => (
            <li key={x}
              className='places__option'
              tabIndex={0}
              onClick={() => onSortType(x)}
            >{x}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
export default Sort;
