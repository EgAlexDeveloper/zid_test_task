import React, { Suspense } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Toast from "../shared/components/Toast";
import Layout from '../shared/components/Layout/Layout';

import ProfileRoutes from '../modules/Profile/routes';

import { RouterModel } from "../shared/types";
import { useSelector } from './store';
import { AppState } from "./types";
import { CanAccess } from "../shared/redux/types";

import NotFound from "../shared/components/NotFound";

const publicRoutes: RouterModel[] = [
  {
    path: '*',
    component: NotFound,
    isCenteredContent: true,
    isBoxedLayout: true,
    isPublic: true
  },
];

export const routes = [
  ...ProfileRoutes,
  ...publicRoutes
];

const AppRoutes = () => {
  const errors: string[] = useSelector((state: AppState) => state.shared.errors);

  return (
    <>
      {
        errors && errors.length > 0 &&
        <div aria-live="polite" aria-atomic="true" className="position-fixed top-5 end-0 p-3" style={{ zIndex: 2 }}>
          {
            errors.map((error: string, i: number) => <Toast key={i} index={i} msg={error} type="danger" />)
          }
        </div>
      }
      <Routes>
        <Route path="/" element={<Layout />}>

          {
            routes.map((route: RouterModel, i: number) => {
              if (!route.isPublic) {
                return <Route
                  key={i}
                  path={`${route.params ? `${route.path} /${route.params}` : `${route.path}`}`}
                  element={
                    <Suspense fallback={<>...</>}>
                      <route.component />
                    </Suspense>
                  }
                />
              }
            })
          }

          <Route
            path="/"
            element={<Navigate to="/" />}
          />

          {
            routes.map((route: RouterModel, i: number) => {
              if (route.isPublic) {
                return <Route
                  key={i}
                  path={route.path}
                  element={
                    <Suspense fallback={<>...</>}>
                      <route.component />
                    </Suspense>
                  }
                />
              }
            })
          }

        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;