import React from "react";

class TestComponentClass extends React.Component {
    render () {
        const titleColor = {
            color : 'red',
        };
        return (
            <>
                <h2 style={titleColor}>Test Component Class</h2>
            </>
        );
    }
}

export default TestComponentClass;