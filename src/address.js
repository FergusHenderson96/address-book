import React, {Component} from "react";

class AddressEntry extends Component {

    render() {
        let {result} = this.props;
        return (
            <button id="add" onClick={e => this.props.onClick(e.target.name)}>Add</button>
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default AddressEntry;
