import { toastr } from "react-redux-toastr";
import {
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_EVENT
} from "./eventConstants";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mockApi";

export const fetchEvents = events => {
  return {
    type: FETCH_EVENT,
    payload: events
  };
};

export const createEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success("Success!", "Event has been created");
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
    }
  };
};

export const prepareOrder = order => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    order.ready = true;
    try {
      await firestore.update(`order/${order.id}`, order);
    } catch (error) {
      console.log(error);
      toastr.error("Opps", "Something Went Wrong");
    }
  };
};

export const submitCompleted = order => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(order);
    let completedOrder;
    if (order.orderNotes) {
      completedOrder = {
        TableID: order.TableID,
        orderNotes: order.orderNotes,
        items: order.items,
        ready: order.ready
      };
    } else {
      completedOrder = {
        TableID: order.TableID,
        items: order.items,
        ready: order.ready
      };
    }

    try {
      await firestore.add("completed", completedOrder);
      await firestore.delete(`order/${order.id}`, order);
    } catch (error) {
      console.log(error);
      toastr.error("Oops", "Something Went Wrong with Adding");
    }
  };
};

export const setReady = table => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(table);
    table.ready = true;
    try {
      await firestore.update(`TableStatus/${table.id}`, table);
    } catch (error) {
      toastr.error("Oops", "Something Went Wrong with Table status");
    }
  };
};

export const updateEvent = event => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_EVENT,
        payload: {
          event
        }
      });
      toastr.success("Success!", "Event has been updated");
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleData();
      dispatch(fetchEvents(events));
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
