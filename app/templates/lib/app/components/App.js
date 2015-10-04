import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div id="app-view">
        <h1>My App</h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
};

export default App;
