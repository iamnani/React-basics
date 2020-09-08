import React from 'react'

function Title({titleName}) {
    console.log("Rendering Title")
    return (
        <div>
            {titleName}
        </div>
    )
}

export default React.memo(Title)
