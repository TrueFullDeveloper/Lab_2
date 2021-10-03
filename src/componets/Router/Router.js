import { routeConfig } from "config/router/routeConfig";
import React, { lazy, useMemo } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Router = () => {
  const isAuthenticated = true;
  const userRole = "user";

  const routes = useMemo(
    () =>
      routeConfig.map((routeItem) => {
        const { roles = [] } = routeItem;

        if (!routeItem.protected) {
          return routeItem;
        }

        if (isAuthenticated && roles.some((role) => role === userRole)) {
          return routeItem;
        }

        return {
          ...routeItem,
          component: lazy(() => import("pages/NotFound404")),
          exact: true,
        };
      }),
    [isAuthenticated, userRole]
  );

  return (
    <Switch>
      {routes.map((routeItem, routeIndex) => (
        <Route
          key={routeIndex}
          path={routeItem.path}
          exact={routeItem.exact}
          component={routeItem.component}
        />
      ))}
      <Redirect to="/404" />
    </Switch>
  );
};

export default Router;
