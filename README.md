# ReactSSR

SSR with a React App

## Build

Webpack base config merged into seperate dev config and client config.

## Technologies

Webpack v3, Babel v6, Express v4, React v16, Redux v3

## Branches

1. master
    * basic webpack + babel boilerplate
    * DRY webpack config for server and client
    * isomorphic javascript
    * basic server setup

1. routing
    *  react-router
    *  handling routes on backend with StaticRouter
    *  html mismatch
    *  routing tiers

1. redux
    *  integrating support for redux
    *  client-side and server-side store
    *  server-side data loading with react-router-config
    *  page components
    *  state sanitizing with serialize-javascript

1. auth
    *  cookie authentication via proxy
    *  set up of express http proxy
    *  custom axios instances for server and client
    *  nested routes with react-router-config
    *  touch of styling with materializecss

1. error
    *  404 not found page
    *  StaticRouter context
    *  handling Promise.all failures
    *  requireAuth HOC

1. seo
    * react-helmet in an ssr env
    * ogp
    * dynamic title tags
    * RenderToString vs RenderToNodeStream
    


