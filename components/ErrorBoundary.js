import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, info) {
    console.error(`--- error ${JSON.stringify(error, null, 2)}`);
    console.error(`--- info ${JSON.stringify(info.componentStack, null, 2)}`);
  }

  render() {
    return this.state.hasError ? <p>Something broke</p> : this.props.children;
  }
}
