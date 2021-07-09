import MsgBox from "./../Misc/MsgBox";
import React from 'react';

class DevMsgBox extends React.Component {
  render() {
    if (this.props.reactDev || this.props.djangoDev) {
      return <MsgBox variant="danger"
                     content={"You are now in development version. React in dev: " + this.props.reactDev
                              + ". Django in dev: " + this.props.djangoDev}/>
    }
    return <div/>
  }
}

// ========================================
export default DevMsgBox;