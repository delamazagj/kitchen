import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { deleteEvent } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => ({
  events: state.events,
  loading: state.async.loading,
  order: state.firestore.ordered.order
});

const actions = {
  deleteEvent
};

//simple list of the orders and the button to set status
class EventDashBoard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
    /*const updatedEvents = this.state.events.filter(e => e.id !== eventId); //creates new array of events that dont match event id
    this.setState({
        events: updatedEvents
    })*/
  };
  render() {
    //const {selectedEvent} = this.state;
    const { order, events, loading } = this.props;
    console.log("dashboard");
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <div>
        <Grid>
          <Grid.Column width={16}>
            <EventList
              deleteEvent={this.handleDeleteEvent}
              events={events}
              order={order}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "order" }])(EventDashBoard));
