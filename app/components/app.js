import React from 'react';
import Rx from 'rxjs';
import { connect } from 'cycle-react-driver';

// import { TodoListComponent } from './todoList';
import { FooterComponent } from './footer';

const AppComponentInner = (props) => (
  <div>
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={props.sendToCycle}
        onChange={props.sendToCycle}
        autoFocus
      />
    </header>
    {/* <TodoListComponent /> */}
    <FooterComponent />
  </div>
);


AppComponentInner.propTypes = {
  sendToCycle: React.PropTypes.func,
};

export const AppComponent = connect()(AppComponentInner);

export const AppMain = () => ({
  react: Rx.Observable.of(
    { name: 'todosCount', value: 0 }
  ),
});
