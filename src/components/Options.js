import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                <button type="button" onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ul>
                {
                    this.props.options.map((option) => <Option key={option} option={option} />) 
                }
                </ul>
            </div>
        );
    }
}