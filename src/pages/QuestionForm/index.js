import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../../actions/questions";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./style.css";

const QuestionForm = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div className="p-5 new-poll container m-auto">
      <h1 className="text-3xl font-bold mt-9 text-center">New Poll</h1>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="optionA">
          <Form.Label>Option One</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first option"
            value={firstOption}
            name="optionA"
            onChange={handleFirstOptionChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="optionB">
          <Form.Label>Option Two</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter second option"
            value={secondOption}
            name="optionB"
            onChange={handleSecondOptionChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default connect()(QuestionForm);
