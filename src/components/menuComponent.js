import React, { Component, Fragment } from "react";
import {
  Media,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay
} from "reactstrap";
import { DISHES } from "../shared/dishes";
import DishDetail from "./dishDetailsComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      dishes: DISHES
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card className="col-12 col-md-5 col-sm-12 m-1 border-0">
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody className="cardBody">
            {/* <CardTitle>
              <strong>{dish.name}</strong>
            </CardTitle> */}
            {/* <CardText>{dish.description}</CardText> */}
            <DishDetail
              className="cardBody"
              selectedDish={this.state.selectedDish}
            />
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }
  renderComments(dish) {
    if (dish != null) {
      return (
        <ul className="list-unstyled ml-1">
          <div className="col-12 col-md-10">
            <li>
              <strong>Comments</strong>
            </li>
            {dish.comments.map((item, id) => (
              <div key={id} className="mt-1">
                <div className="mb-2">{item.comment}</div>
                <li>
                  {" "}
                  <div>
                    -- {item.author}, {item.date}
                  </div>
                </li>
              </div>
            ))}
          </div>
        </ul>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
          {this.renderDish(this.state.selectedDish)}
          {this.renderComments(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;
