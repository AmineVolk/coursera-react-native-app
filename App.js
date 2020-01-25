import React from "react";
import Main from "./components/Main/mainContainer";
import { Provider } from "react-redux"
import { ConfigureStore } from "./redux/ConfigureStore"
const store = ConfigureStore();
export default class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Main />
    </Provider>);
  }
}
