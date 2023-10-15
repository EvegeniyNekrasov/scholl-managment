import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import PageLoading from 'components/page-loading/PageLoading'
import Page from 'pages/page/Page'

import paths from 'routes/paths'
import NavBar from 'components/navbar/NavBar'

const Home = lazy(async () => {
  const module = await import('pages/home/Home')
  return module
})

const Admin = lazy(async () => {
  const module = await import('pages/admin/Admin')
  return module
})

const PageNotFound = lazy(async () => {
  const module = await import('pages/not-found/PageNotFound')
  return module
})

interface Routes {
  path: string
  element: React.ReactNode
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<PageLoading />}>
    <Page>
      <NavBar />
      <Component />
    </Page>
  </Suspense>
)

const routes: Routes[] = [
  { path: paths.HOME, element: getRouteElement(Home) },
  { path: paths.ADMIN, element: getRouteElement(Admin) },
  { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) }
]

export default createBrowserRouter(routes)
