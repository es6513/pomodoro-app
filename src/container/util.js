import { lazy } from "react";

//lazy load

export const lazyLoadComponent = (componentPath) => {
  return lazy(() => import(componentPath));
};
