import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class IssueItem extends Component {
    handleRemove = () => {
        this.props.onRemove(this.props.item.id);
    };

    render() {
        const issue = this.props.item;
        return (
            <li className='list-group-item'>{issue.name} <button className='btn btn-sm btn-danger float-right' onClick={this.handleRemove}>Remove</button></li>
        );
    }
}

IssueItem.propTypes = {
    item: PropTypes.object,
    onRemove: PropTypes.func
};