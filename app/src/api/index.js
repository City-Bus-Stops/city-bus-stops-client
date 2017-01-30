import * as consts from '../consts';
import Auth from '../utils/Auth';

export const fetchRoute = (from, to) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      from,
      to,
    }),
  };

  return fetch(`${consts.SERVER_URL}/route/searchRoute`, config);
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => { resolve(position); },
      (err) => { reject(err); },
      { enableHighAccuracy: true, timeout: 10000 });
  });
};

export const getAddress = (location) => {
  const url = new URL(`${consts.SERVER_URL}/address`);
  const params = {
    lat: location.coords.latitude,
    lon: location.coords.longitude,
  }; const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  };

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url, config);
};

export const SignUp = (data) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(data),
  };

  return fetch(`${consts.SERVER_URL}/auth/signup`, config);
};

export const LogIn = (data) => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(data),
  };

  return fetch(`${consts.SERVER_URL}/auth/login`, config);
};

export const secretRequest = () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `qwerty ${Auth.getToken()}`,
    },
  };
  return fetch(`${consts.SERVER_URL}/api/dashboard`, config);
};

export const getPointInfo = (latlng) => {
  const url = new URL(`${consts.SERVER_URL}/route/pointInfo`);
  const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  };

  Object.keys(latlng).forEach(key => url.searchParams.append(key, latlng[key]));
  return fetch(url, config);
};
