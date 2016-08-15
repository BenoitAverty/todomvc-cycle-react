import React from 'react';
import { connect } from 'cycle-react-driver';

const AppComponentInner = (props) => <h1 onClick={props.sendToCycle}>Counter: {props.count}</h1>;
AppComponentInner.propTypes = {
  count: React.PropTypes.number,
  sendToCycle: React.PropTypes.func,
};

export const AppComponent = connect(['count'], 'sendToCycle')(AppComponentInner);

export const AppMain = ({ react }) => ({
  react: react.select(AppComponentInner)
    .mapTo(1)
    .scan((a, b) => a+b)
    .startWith(1)
    .map(c => ({ name: 'count', value: c })),
});
