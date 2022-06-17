import React from 'react'

function PreviousNext({previous,next}) {
  return (
    <div className="previousNextHolder">
      <button onClick={previous} className="previousIdButton">Previous</button>
      <button onClick={next} className="nextIdButton">Next</button>
    </div>
  )
}

export default PreviousNext