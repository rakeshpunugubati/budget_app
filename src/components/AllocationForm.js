import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { currency, dispatch, remaining } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
        if (cost > remaining) {
            alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
            setCost('');
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                        </div>
                        <select
                            className="custom-select"
                            id="inputGroupSelect01"
                            onChange={(event) => setName(event.target.value)}
                        >
                            <option defaultValue>Choose...</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            <option value="Finance">Finance</option>
                            <option value="HR">HR</option>
                            <option value="IT">IT</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                        </div>
                        <select
                            className="custom-select"
                            id="inputGroupSelect02"
                            onChange={(event) => setAction(event.target.value)}
                        >
                            <option value="Add">Add</option>
                            <option value="Reduce">Reduce</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 mb-3 d-flex align-items-center">
                    <label className="mr-2">{currency}</label>
                    <input
                        required
                        type='number'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        className="form-control w-75"
                        style={{border: '1px solid black', borderRadius: 0,  boxShadow: 'none' }}
                    />
                </div>
                <div className="col-md-3 col-sm-6 mb-3">
                    <button className="btn btn-primary" onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
