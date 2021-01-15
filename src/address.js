import React, {Component} from "react";

class AddressEntry extends Component {

    render() {
        let {result} = this.props;
        return (
        <div class="result">
            <placeholder>Enter Address</placeholder>
            <button id="add" onClick={e => this.props.onClick(e.target.name)}>Add</button>
            <p>{result}</p>
            </div>
    );
        
    }
}


export default AddressEntry;
