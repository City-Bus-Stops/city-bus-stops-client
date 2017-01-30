import faker from 'faker';

const geoJson = [
  {
    type: 'Feature',
    properties: {
      name: 'start point',
      type: 'start',
      popupContent: 'Some popup!',
    },
    geometry: {
      type: 'Point',
      coordinates: [23.79417658, 53.6729683],
    },
    info: {
      name: 'Фолюш',
      buses: [
        {
          id: faker.random.uuid(),
          number: '3',
          time: '2 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '23',
          time: '5 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '38',
          time: '7 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '7',
          time: '6 min',
          to: 'Ж/д вокзал',
        },
      ],
    },
  },
  {
    type: 'Feature',
    properties: {
      name: 'bus stop',
      type: 'bus_stop',
      popupContent: 'Some popup!',
    },
    geometry: {
      type: 'Point',
      coordinates: [23.78851175, 53.66706981],
    },
    info: {
      name: 'Фолюш',
      buses: [
        {
          id: faker.random.uuid(),
          number: '3',
          time: '2 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '23',
          time: '5 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '38',
          time: '7 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '7',
          time: '6 min',
          to: 'Ж/д вокзал',
        },
      ],
    },
  },
  {
    type: 'Feature',
    properties: {
      name: 'bus stop',
      type: 'bus_stop',
      popupContent: 'Some popup!',
    },
    geometry: {
      type: 'Point',
      coordinates: [23.78439188, 53.66429825],
    },
    info: {
      name: 'Фолюш',
      buses: [
        {
          id: faker.random.uuid(),
          number: '3',
          time: '2 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '23',
          time: '5 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '38',
          time: '7 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '7',
          time: '6 min',
          to: 'Ж/д вокзал',
        },
      ],
    },
  },
  {
    type: 'Feature',
    properties: {
      name: 'bus stop',
      type: 'bus_stop',
      popupContent: 'Some popup!',
    },
    geometry: {
      type: 'Point',
      coordinates: [23.78190279, 53.65911062],
    },
    info: {
      name: 'Фолюш',
      buses: [
        {
          id: faker.random.uuid(),
          number: '3',
          time: '2 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '23',
          time: '5 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '38',
          time: '7 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '7',
          time: '6 min',
          to: 'Ж/д вокзал',
        },
      ],
    },
  },
  {
    type: 'Feature',
    properties: {
      name: 'end point',
      type: 'end',
      popupContent: 'Some popup!',
    },
    geometry: {
      type: 'Point',
      coordinates: [23.78194571, 53.65791534],
    },
    info: {
      name: 'Фолюш',
      buses: [
        {
          id: faker.random.uuid(),
          number: '3',
          time: '2 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '23',
          time: '5 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '38',
          time: '7 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '7',
          time: '6 min',
          to: 'Ж/д вокзал',
        },
      ],
    },
  },
  {
    type: 'Feature',
    properties: {
      name: 'Lines',
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [23.79417658, 53.6729683],
        [23.78851175, 53.66706981],
        [23.78439188, 53.66429825],
        [23.78190279, 53.65911062],
        [23.78194571, 53.65791534]],
    },
    info: {
      name: 'Фолюш',
      buses: [
        {
          id: faker.random.uuid(),
          number: '3',
          time: '2 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '23',
          time: '5 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '38',
          time: '7 min',
          to: 'Ж/д вокзал',
        },
        {
          id: faker.random.uuid(),
          number: '7',
          time: '6 min',
          to: 'Ж/д вокзал',
        },
      ],
    },
  }];

export default geoJson;
