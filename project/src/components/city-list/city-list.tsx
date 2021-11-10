import React from 'react';
import {State} from '../../types/state';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions, changeCity} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import cn from 'classnames';
import { Link } from 'react-router-dom';

type Setting = {
  cities: string[],
}

const mapStateToProps = ({ currentCity, offers }: State) => ({
  currentCity,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & Setting;

function CityList(props: ConnectedComponentProps) : JSX.Element {
  const {cities, currentCity, onChangeCity} = props;
  return (
    <div>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => {
              const classNameActive = cn({
                'tabs__item--active': city === currentCity,
              });
              return (
                <li className="locations__item" key={city}>
                  <Link to="/"
                    className={ `locations__item-link tabs__item
                      ${classNameActive}` }
                    onClick={() => onChangeCity(city)}
                  >
                    <span>{city}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export {CityList};
export default connector(CityList);
