import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage}) {

  return (
    <div>
        {/* If we have a goto function, then render everything (This is how we use an if statement in react) */}
        {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
        {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}

