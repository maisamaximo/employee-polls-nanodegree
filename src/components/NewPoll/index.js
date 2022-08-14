import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import './style.css';
import '../../styles.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewPoll = () => {
    const [OptionA, setOptionA] = useState("");
    const [OptionB, setOptionB] = useState("");

    const navigate = useNavigate();

    const handleOptionAChange = (e) => {
        const value = e.target.value;
        setOptionA(value);
    };

    const handleOptionBChange = (e) => {
        const value = e.target.value;
        setOptionB(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className="pt-5">
            <h1>New Poll</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="OptionA">
                    <Form.Label>First Option</Form.Label>
                    <Form.Control type="text" placeholder="Enter the first option..." value={OptionA}
                    onChange={handleOptionAChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="OptionB">
                    <Form.Label>Second Option</Form.Label>
                    <Form.Control type="text" placeholder="Enter the second option..." value={OptionB}
                    onChange={handleOptionBChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default connect()(NewPoll);
