import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M2 14.4c0 .9.6 1.6 1.4 1.6h11.2c.8 0 1.4-.7 1.4-1.6V14H2v.4zM15.4 4H14V3H4v7.9C4 12.1 5.2 13 6.5 13h4.9c1.3 0 2.5-.9 2.5-2 1.7-.2 3-1.6 3-3.3V5.4c.1-.9-.6-1.4-1.5-1.4zm.6 3.7c0 1.2-.9 2.1-2 2.3V5h1.4c.2 0 .6 0 .6.4v2.3z" /></svg>;
  }

}