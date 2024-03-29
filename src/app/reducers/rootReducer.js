import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import eventReducer from '../../features/event/eventReducer'
import asyncReducer from '../../features/async/asyncReducer'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    events: eventReducer,
    form : FormReducer,
    async: asyncReducer,
    toastr: toastrReducer
})

export default rootReducer