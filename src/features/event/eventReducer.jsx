import { createReducer } from '../../app/common/util/reducerUtil'
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT } from './eventConstants'

const initialState = []/*[
    {
      id: '1',
      title: 'Spaghetti',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Tasty Spaghetti',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        }
      ]
    }
  ]*/

export const createEvent = (state, payload) => {
      return [...state, Object.assign({}, payload.event)]
  }

export const updateEvent = (state, payload) => {
    return [...state.filter(event => event.id !== payload.event.id), //filters out current id, then we emplace new version of current id
            Object.assign({}, payload.event) //passing back in new version of id here 
    ]
}

export const deleteEvent = (state, payload) => {
    return [...state.filter(event => event.id !== payload.eventId)]
}

export const fetchEvents = (state, payload) =>{
  return payload.events
}

export default createReducer(initialState, {
    [CREATE_EVENT] : createEvent,
    [UPDATE_EVENT] : updateEvent,
    [DELETE_EVENT] : deleteEvent,
    [FETCH_EVENT] : fetchEvents 
})
