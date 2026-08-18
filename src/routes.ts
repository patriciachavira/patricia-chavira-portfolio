import { createBrowserRouter } from 'react-router'
import MainHome from './pages/MainHome'
import Home from './pages/Home'
import CaseStudy01 from './pages/CaseStudy01'
import CaseStudy02 from './pages/CaseStudy02'
import CaseStudy03 from './pages/CaseStudy03'
import CaseStudy04 from './pages/CaseStudy04'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainHome,
  },
  {
    path: '/work',
    Component: Home,
  },
  {
    path: '/case-study-01',
    Component: CaseStudy01,
  },
  {
    path: '/case-study-02',
    Component: CaseStudy02,
  },
  {
    path: '/case-study-03',
    Component: CaseStudy03,
  },
  {
    path: '/case-study-04',
    Component: CaseStudy04,
  },
])
