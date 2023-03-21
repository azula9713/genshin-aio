import React from "react";

class LazyBackground extends React.Component {
  state = { src: null };
  props = { placeholder: "", src: "", children: [], className: "" };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    return (
      <div
        {...this.props}
        style={{
          backgroundImage: `url(${this.state.src || this.props.placeholder})`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default LazyBackground;
