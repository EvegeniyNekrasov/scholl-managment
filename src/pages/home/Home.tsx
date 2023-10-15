import React from 'react'

const Home = (): React.JSX.Element => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">This is a home page</h1>
    </div>
  )
}

export default React.memo(Home)
