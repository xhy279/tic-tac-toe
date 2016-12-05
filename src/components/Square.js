import React from 'react';

/*export default class Square extends React.Component {

    // replace the square with 'X' when click on it
    clickHandler() {
        // onClick is passed from parent Board as props
        this.props.onClick();
    }

    render() {
        return (
            <button className="square" onClick={this.clickHandler.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}
*/

// square is just a functional(stateless component)
export default (props) => (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
