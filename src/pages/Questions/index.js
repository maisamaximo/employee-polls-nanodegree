import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../../actions/questions";

import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./style.css";

const Questions = ({ dispatch, authedUser, question, author }) => {
  const navigate = useNavigate();

  if (!authedUser || !question || !author) {
    return <Navigate to="/404" />;
  }

  const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  const calcPercentage = (option, question) => {
    const numberVotesTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return Math.round(
          (question.optionOne.votes.length / numberVotesTotal) * 100
        );
      case "optionTwo":
        return Math.round(
          (question.optionTwo.votes.length / numberVotesTotal) * 100
        );
      default:
        return "";
    }
  };

  return (
    <div className="questions">
      <div className="container m-auto mt-5 w-25 card p-4 text-center poll-container">
        <h2>
          Poll by <span>@{author.id}</span>
        </h2>

        <div>
          <Image
            className="card-avatar my-4"
            roundedCircle
            src={author?.avatarURL}
            alt="Profile"
          />
        </div>

        <div className="pb-4">
          <h2>Would you rather?</h2>
        </div>

        <div className="poll-buttons">
          <Button onClick={handleOptionOne} disabled={hasVoted}>
            <p>{question.optionOne.text}</p>
            {!hasVoted}
            {hasVoted && (
              <p>
                Total votes: {question.optionOne.votes.length}{" "}
                <ProgressBar
                  variant="success"
                  now={calcPercentage("optionOne", question)}
                  label={`${calcPercentage("optionOne", question)}%`}
                />
              </p>
            )}
          </Button>

          <Button onClick={handleOptionTwo} disabled={hasVoted}>
            <p>{question.optionTwo.text}</p>
            {!hasVoted}
            {hasVoted && (
              <p>
                Total votes: {question.optionTwo.votes.length}{" "}
                <ProgressBar
                  variant="success"
                  now={calcPercentage("optionTwo", question)}
                  label={`${calcPercentage("optionTwo", question)}%`}
                />
              </p>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().question_id
    );
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authedUser, question, author };
  } catch (e) {
    return <Navigate to="/404" />;
  }
};

export default connect(mapStateToProps)(Questions);