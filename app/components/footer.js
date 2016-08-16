import React from 'react';
import Rx from 'rxjs';
import classNames from 'classnames';
import { connect } from 'cycle-react-driver';

const activeTodosWord = count => (count === 0 || count > 1 ? 'todos' : 'todo');

const FooterComponentInner = (props) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{props.todosCount}</strong> {activeTodosWord(props.todosCount)} left
    </span>
    <ul className="filters">
      <li>
        <a
          href="#/"
          className={classNames({ selected: props.activeFilter === 'ALL_TODOS' })}
          onClick={() => props.sendToCycle({ type: 'ALL_TODOS' })}
        >
          All
        </a>
      </li>
      {' '}
      <li>
        <a
          href="#/"
          className={classNames({ selected: props.activeFilter === 'ACTIVE_TODOS' })}
          onClick={() => props.sendToCycle({ type: 'ACTIVE_TODOS' })}
        >
          Active
        </a>
      </li>
      {' '}
      <li>
        <a
          href="#/"
          className={classNames({ selected: props.activeFilter === 'COMPLETED_TODOS' })}
          onClick={() => props.sendToCycle({ type: 'COMPLETED_TODOS' })}
        >
          Completed
        </a>
      </li>
    </ul>
  </footer>
);
FooterComponentInner.propTypes = {
  todosCount: React.PropTypes.number,
  activeFilter: React.PropTypes.string,
  sendToCycle: React.PropTypes.func,
};

export const FooterComponent = connect(
  [
    'todosCount',
    'activeFilter',
  ],
  'sendToCycle'
)(FooterComponentInner);

export const FooterMain = ({ react }) => {
  const activeFilter$ = react.select(FooterComponentInner)
    .map(e => ({ name: 'activeFilter', value: e.type }))
    .startWith({ name: 'activeFilter', value: 'ALL_TODOS' });

  return {
    react: activeFilter$,
  };
};
