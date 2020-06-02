import React from "react";

class CustomWrapper extends React.PureComponent {
    render() {
        return (
            <div className="ptr-map-wrapper">
                <div style={{background: 'white', position: 'absolute', bottom: 0, left: 0, zIndex: 2}}>
                    {this.props.view && this.props.view.center.lat}
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default CustomWrapper;