import React, {Component} from 'react';
import {Api} from "../api/Api";
import {IssueItem} from "./IssueItem";

export  class IssueList extends Component {

    state = {
        issues: [],
        name: '',
        description: '',
        tags: [],
        ownerId: 0,
        assignmentId: 0
    };

    getAll = async () => {
        try {

            const response = await Api.getAll();
            if (!response.ok) {
            }
            const data = await response.json();
            this.setState({items: data});
        } catch (e) {
            console.error(e);
        }
    };

    handleRemove = async (id) => {
        try {
            const response = await Api.removeById(id);
            if (!response.ok) {
            }

            this.getAll();
        } catch (e) {
            console.error(e);
        }
    };

    handleAdd = async (event) => {
        event.preventDefault();
        try {
            const response = await Api.add(
                this.state.name,
                this.state.description,
                this.state.tags,
                this.state.ownerId,
                this.state.assignmentId);
            if (!response.ok) {
            }
            this.setState({
                name: '',
                description: '',
                tags: '',
                ownerId: '',
                assignmentId: ''
            });
            this.getAll();
        } catch (e) {
            console.error(e);
        }
    };

    handleInput = (event) => {
        const name = event.target.value;
        const description = event.target.value;
        const tags = event.target.tags;
        const ownerId = event.target.ownerId;
        const assignmentId = event.target.assignmentId;
        this.setState({
            name: name,
            description: description,
            tags: [tags],
            ownerId: ownerId,
            assignmentId: assignmentId
        });
    };

    componentDidMount() {
        this.getAll();
    }

    render() {
        const items = this.state.issues;
        const name = this.state.name;
        const description = this.state.description;
        const tags = this.state.tags;
        const ownerId = this.state.ownerId;
        const assignmentId = this.state.assignmentId;
        return (
            <div>
                <h1>Issues</h1>
                <form onSubmit={this.handleAdd}>
                    <div className="form-row">
                        <div className="col-8">
                            <input type="text" className="form-control" value={name} onChange={this.handleInput}/>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" value={description} onChange={this.handleInput}/>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" value={tags} onChange={this.handleInput}/>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" value={ownerId} onChange={this.handleInput}/>
                        </div>
                        <div className="col-8">
                            <input type="text" className="form-control" value={assignmentId} onChange={this.handleInput}/>
                        </div>
                        <div className="col">
                            <button className='btn btn-block btn-primary'>Add</button>
                        </div>
                    </div>
                </form>
                <ul className='list-group mt-3'>
                    {items.map(o => <IssueItem key={o.id} item={o} onRemove={this.handleRemove}/>)}
                </ul>
            </div>
        );
    }
}