import React, { Component, PureComponent } from 'react'

 class RegularComp extends PureComponent {
    render() {
        console.log("Regular comp render");
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComp
