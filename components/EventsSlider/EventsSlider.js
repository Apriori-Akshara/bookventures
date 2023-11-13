import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from '../../styles/eventspage/eventpage.module.css'

export default class EventsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    console.warn(this.props.event[0].images[0])
    return (
      <div>
        <Slider
        className={styles.slider}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[0]} width={1200} height={600}/></div>
          </div>
          <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[1]} width={1200} height={600}/></div>
          </div>
          <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[2]} width={1200} height={600}/></div>
          </div>
          <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[3]} width={1200} height={600}/></div>
          </div>
          {this.props.event[0].images[4] ? <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[4]} width={1200} height={600}/></div>
          </div> : ''}
          {this.props.event[0].images[5] ? <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[5]} width={1200} height={600}/></div>
          </div> : ''}
          {this.props.event[0].images[6] ? <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[6]} width={1200} height={600}/></div>
          </div> : ''}
          {this.props.event[0].images[7] ? <div>
            <div className={styles.bigimgcont}><Image className={styles.bigimage} src={this.props.event[0].images[7]} width={1200} height={600}/></div>
          </div> : ''}
        </Slider>
        <div className={styles.slidercontainer}><Slider
        className={styles.smallslider}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.props.event[0].images[0] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[0]} width={300} height={200}/></div>
            </div> : ''}
          {this.props.event[0].images[1] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[1]} width={300} height={200}/></div>
            </div> : ''}
          {this.props.event[0].images[2] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[2]} width={300} height={200}/></div>
            </div> : ''}
          {this.props.event[0].images[3] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[3]} width={300} height={200}/></div>
            </div> : ''}
          {this.props.event[0].images[4] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[4]} width={300} height={200}/></div>
          </div> : ''}
          {this.props.event[0].images[5] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[5]} width={300} height={200}/></div>
          </div> : ''}
          {this.props.event[0].images[6] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[6]} width={300} height={200}/></div>
          </div> : ''}
          {this.props.event[0].images[7] ? <div>
            <div><Image className={styles.smallimg} src={this.props.event[0].images[7]} width={300} height={200}/></div>
          </div> : ''}
        </Slider></div>

      </div>
    );
  }
}