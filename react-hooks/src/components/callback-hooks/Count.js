import React from 'react'

function Count({text}) {
    //const {text} = props;
    console.log(`Rendering Count for ${text}`);
    return (
        <div>
            {text}
        </div>
    )
}

export default React.memo(Count)
