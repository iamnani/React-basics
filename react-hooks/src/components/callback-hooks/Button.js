import React from 'react'

function Button(props) {
    const {clickHandler} = props;
    console.log("Rendering Button")
    return (
        <div>
            <button onClick={clickHandler}>{props.children}</button>
        </div>
    )
}

export default React.memo(Button)
