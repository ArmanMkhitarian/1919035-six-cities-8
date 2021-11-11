import React from 'react';
import {changeCity} from '../../store/action';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import {getCurrentCity} from '../../store/offers-data/selectors';
import {useSelector, useDispatch} from 'react-redux';

type Setting = {
  cities: string[],
}

function CityList(props: Setting) : JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useSelector(getCurrentCity);
  const onChangeCity = (city: string) => {
    dispatch(changeCity(city));
  };
  const {cities} = props;
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

export default CityList;
