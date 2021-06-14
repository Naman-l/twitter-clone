import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducer.js";

import { Spin, Space } from "antd";

const App = lazy(() => import("./App"));

const NewPage = lazy(() => import("./NewPage"));

export default function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense
            fallback={
              <div style={{ width: "100%", textAlign: "center" }}>
                <Space size="middle">
                  <Spin />
                </Space>
                loading twitter for redhunt
              </div>
            }
          >
            <Route exact path="/">
              <App />
            </Route>
          </Suspense>
        </Switch>
        <Switch>
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Space size="large">
                  <Spin />
                </Space>
                Loading twitter for redhunt
              </div>
            }
          >
            <Route exact path="/new">
              <NewPage />
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  );
}
