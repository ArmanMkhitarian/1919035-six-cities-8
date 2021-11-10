import {Middleware} from 'redux';
import {ActionType} from '../action';
import {reducer} from '../reduser';
import browserHistory from '../../browser-history';
type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === ActionType.RedirectToRoute) {
          // eslint-disable-next-line no-console
          console.log('Попали в редирект3', action.payload);
          browserHistory.push(action.payload);
        }
        return next(action);
      };
