import React, {useState} from 'react';
import {SortType} from '../../const';
import {State} from '../../types/state';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions, changeSort} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({currentSortType}: State) => ({
  currentSortType,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortTypeChange: function (sortType: SortType) {
    dispatch(changeSort(sortType));
  },
});
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Sort({currentSortType, onSortTypeChange}: PropsFromRedux): JSX.Element {
  const [dropDownState, setDropDownState] = useState<boolean>(false);
  const sortTypes = Object.values(SortType);

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

export {Sort};
export default connector(Sort);
