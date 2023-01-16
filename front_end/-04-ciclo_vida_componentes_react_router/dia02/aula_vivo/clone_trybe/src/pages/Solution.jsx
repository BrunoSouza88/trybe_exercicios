import React from "react";

class Solution extends React.Component {
  render() {

    const { anyUrl } = this.props.match.params

    return (
      <h1> {anyUrl} </h1>
    );
  }
}

export default Solution;
