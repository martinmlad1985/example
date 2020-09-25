import React from "react";


class Status extends React.Component {
    state = {
        editMode: false,
        text: this.props.status
    }

    activateEditMode() {
        this.setState( {
            editMode: true
        } );
    }
    deactivateEditMode() {
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.state.text)
    }
    setTextInLocalState(event) {
        this.setState({
            text: event.target.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.status !== this.props.status)
        this.setState({
            text: this.props.status
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status || '@@@@@@@@@'}</span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input  onChange={this.setTextInLocalState.bind(this)} autoFocus={true}
                            onBlur={ this.deactivateEditMode.bind(this) } value= {this.state.text}/>
                </div>
                }
            </div>
        )
    }
}

export default Status;