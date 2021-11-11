import React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {useSelector} from 'react-redux';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) : JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const {exact, path, render} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth ? render() : <Redirect to={AppRoute.Login}/>
      )}
    />
  );
}

export default PrivateRoute;
