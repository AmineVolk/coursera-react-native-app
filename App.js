import React from "react";
import Main from "./components/Main/mainContainer";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import Loading from "./components/LoadingComponent";
const { store, persistor } = ConfigureStore();
import ErrorBoundary from "./components/ErrorBoundary";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <ErrorBoundary>
            <Main />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    );
  }
}
