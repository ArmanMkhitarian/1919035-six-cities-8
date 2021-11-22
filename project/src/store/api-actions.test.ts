import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/state';
import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {APIRoute, AppRoute, AuthorizationStatus, DataStatus} from '../const';
import {
  fetchCommentsAction,
  fetchNearByOffersAction,
  fetchOfferAction,
  fetchOffersAction, getFavoriteOffers,
  loginAction,
  logoutAction, postCommentAction, sendFavoriteOffer
} from './api-actions';
import {
  getCurrentLogin, getCurrentOffer, getNearbyOffers, getReviews,
  offersLoad, postDataStatusAction, postReviewAction, redirectToRouter,
  requireAuthorization,
  requireLogout, setFavoritesOffers
} from './action';
import {createAPI} from '../services/api';
import {AuthData} from '../types/auth-data';
import {getOfferMock, getOffersMock, getReviewsMock, userCommentPost} from '../services/mocks';
import {adaptToClient, adaptToReview} from '../types/Offers';

const offerId = '1';
const mockOffers = getOffersMock();
const mockReviews = getReviewsMock();
const mockCommentPost = userCommentPost;

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = {login: 'user@mail.ru', password: '8888888888'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      getCurrentLogin(fakeUser.login),
      requireAuthorization(AuthorizationStatus.Auth),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();

    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual(
      [
        requireLogout(),
        getCurrentLogin(''),
      ]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch fetchOffersAction when GET /hotels', async () => {
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);

    const store = mockStore();
    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      offersLoad(mockOffers.map((item: unknown) => adaptToClient(item))),
    ]);
  });

  it('should dispatch fetchOfferAction when GET /hotels/:id error', async () => {
    mockAPI
      .onGet(`${APIRoute.Offer}${offerId}`)
      .networkError();

    const store = mockStore();
    await store.dispatch(fetchOfferAction(offerId));

    expect(store.getActions()).toEqual([
      redirectToRouter(AppRoute.NotFound),
    ]);
  });

  it('should dispatch fetchOfferAction when GET /hotels/:id', async () => {
    const mockOffer = getOfferMock();
    mockAPI
      .onGet(`${APIRoute.Offer}${offerId}`)
      .reply(200, mockOffer);

    const store = mockStore();
    await store.dispatch(fetchOfferAction(offerId));

    expect(store.getActions()).toEqual([
      getCurrentOffer(adaptToClient(mockOffer)),
    ]);
  });

  it('should dispatch fetchNearbyOffersAction when GET /hotels/:id/nearby', async () => {
    mockAPI
      .onGet(`${APIRoute.Offers}/${offerId}/nearby`)
      .reply(200, mockOffers);

    const store = mockStore();
    await store.dispatch(fetchNearByOffersAction(offerId));

    expect(store.getActions()).toEqual([
      getNearbyOffers(mockOffers.map((item: unknown) => adaptToClient(item))),
    ]);
  });

  it('should dispatch fetchOfferCommentsAction when GET /comments/:id', async () => {
    mockAPI
      .onGet(`${APIRoute.Comments}/${offerId}`)
      .reply(200, mockReviews);

    const store = mockStore();
    await store.dispatch(fetchCommentsAction(offerId));

    expect(store.getActions()).toEqual([
      getReviews(mockReviews.map((item: unknown) => adaptToReview(item))),
    ]);
  });

  it('should dispatch fetchFavoritesAction when GET /favorite/:id/:(1 | 0)', async () => {
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, mockOffers);

    const store = mockStore();
    await store.dispatch(getFavoriteOffers());

    expect(store.getActions()).toEqual([
      setFavoritesOffers(mockOffers.map((item: unknown) => adaptToClient(item))),
    ]);
  });
});
