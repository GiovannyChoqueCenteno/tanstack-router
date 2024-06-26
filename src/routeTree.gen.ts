/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as RegrucIndexImport } from './routes/regruc/index'
import { Route as FacturaclientIndexImport } from './routes/facturaclient/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RegrucIndexRoute = RegrucIndexImport.update({
  path: '/regruc/',
  getParentRoute: () => rootRoute,
} as any)

const FacturaclientIndexRoute = FacturaclientIndexImport.update({
  path: '/facturaclient/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/facturaclient/': {
      preLoaderRoute: typeof FacturaclientIndexImport
      parentRoute: typeof rootRoute
    }
    '/regruc/': {
      preLoaderRoute: typeof RegrucIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  FacturaclientIndexRoute,
  RegrucIndexRoute,
])

/* prettier-ignore-end */
