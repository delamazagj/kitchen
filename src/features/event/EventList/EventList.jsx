import React, { Component } from "react";
import EventListItem from "./EventListItem";

//generates the list of orders
class EventList extends Component {
  render() {
    const { order, deleteEvent } = this.props;
    return (
      <div>
        {order &&
          order.map(order => (
            <EventListItem
              key={order.id}
              order={order}
              deleteEvent={deleteEvent}
            />
          ))}
      </div>
    );
  }
}
export default EventList;
