import axios from 'axios';
import * as consts from '../consts';
import Auth from '../utils/Auth';

export const fetchRoute = (from, to) => {
  return axios.get(`${consts.SERVER_URL}/route/searchRoute`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    params: {
      from,
      to
    }
  });
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => { resolve(position); },
      (err) => { reject(err); },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
};

export const getAddress = (lat, lon) => {
  return axios.get(`${consts.SERVER_URL}/address`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    params: {
      lat,
      lon
    }
  });
};

export const SignUp = (data) => {
  return axios.post(`${consts.SERVER_URL}/auth/signup`, data);
};

export const LogIn = (data) => {
  // return fetch(`${consts.SERVER_URL}/auth/login`, config);
  return axios.post(`${consts.SERVER_URL}/auth/login`, data);
};

export const secretRequest = () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `qwerty ${Auth.getToken()}`
    }
  };
  return fetch(`${consts.SERVER_URL}/api/dashboard`, config);
};

export const getBusScheduleByBusstop = (params) => {
  return axios.get(`${consts.SERVER_URL}/bus-schedule/${params.id}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    params: {
      firstPoint: params.firstPointName,
      lastPoint: params.lastPointName
    }
  });
};
