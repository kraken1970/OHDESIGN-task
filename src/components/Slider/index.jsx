import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import SliderItems from "../SliderItems";

import "./Slider.scss";

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        indicators={false}
        interval={1500}
        className="SliderCarousel"
      >
        <Carousel.Item>
          <SliderItems className="d-block w-100" />
        </Carousel.Item>

        <Carousel.Item>
          <div className="Slide2">
            <h3>Second slide label</h3>
            <p>Слайдер выполнен с одним слайдом.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="Slide2">
            <h3>Third slide label</h3>
            <p>Слайдер выполнен с одним слайдом.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
