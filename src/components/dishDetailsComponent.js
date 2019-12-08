import React, { Component } from "react";
import {
  Media,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
  Button
} from "reactstrap";
import { DISHES } from "../shared/dishes";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedDish: null
      dishes: DISHES
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card width="100%" className="border-0">
          <CardBody>
            {/* <CardImg object src={dish.image} alt={dish.name} /> */}
            <CardTitle>
              <strong>{dish.name}</strong>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const itemsDetials = this.state.dishes.map(dish => {
      return (
        <Card onClick={() => this.onDishSelect(dish)}>
          <div key={dish.id} className="col-12 col-md m-1">
            <CardTitle>
              {" "}
              <strong>{dish.name}</strong>
            </CardTitle>
            <p>{dish.description}</p>
          </div>{" "}
        </Card>
      );
    });

    return (
      <div className="container">
        <div className="row">{this.renderDish(this.props.selectedDish)}</div>
      </div>
    );
  }
}

export default DishDetail;
