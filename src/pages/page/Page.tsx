import React from 'react'
// import pageStyles from 'components/page/Page.module.scss'
import './Page.css'

interface PageProps {
  children: React.ReactNode | React.ReactNode[]
}

const Page = ({ children }: PageProps): JSX.Element => {
  return <div className="page">{children}</div>
}

export default Page
