import React, { Component } from "react";
import { Segment, Item, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { prepareOrder, submitCompleted, setReady } from "../eventActions";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => ({
  sayTable: state.firestore.ordered.TableStatus,
  loading: state.async.loading
});

const actions = {
  prepareOrder,
  submitCompleted,
  setReady
};

//generates each order in the list
class EventListItem extends Component {
  //selects the right table
  selectTable = num => {
    let selected = this.props.sayTable.filter(table => {
      return table.TableID === num;
    });
    console.log(selected);
    this.props.setReady(selected[0]);
    console.log(selected[0]);
  };

  //handles the complete order event
  completeOrder = order => {
    console.log(order);
    const or = order.TableID;
    this.selectTable(or);
    console.log(order);
    this.props.submitCompleted(order);
  };

  //renders each order
  render() {
    const { order, sayTable } = this.props; //destructor, alternative to call an element
    //would be {this.props.event.someElement like hostPhotoURL}

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>Table No. {order.TableID}</Item.Header>
                {order.items.map(item => (
                  <Segment>
                    {item.name}
                    <br />
                    {item.notes}
                  </Segment>
                ))}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment clearing>
          <span>{order.orderNotes}</span>
          {order.ready && (
            <Button
              onClick={() => this.completeOrder(order)}
              as="a"
              color="red"
              floated="right"
              content="Complete"
            />
          )}
          {order.ready === false && (
            <Button
              onClick={() => this.props.prepareOrder(order)}
              as="a"
              color="teal"
              floated="right"
              content="Prepare"
            />
          )}
        </Segment>
      </Segment.Group>
    );
  }
}
export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "TableStatus" }])(EventListItem));
