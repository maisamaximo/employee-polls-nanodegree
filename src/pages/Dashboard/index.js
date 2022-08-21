import { connect } from "react-redux";
import DashboardCard from "../../components/DashboardCard";

import "./style.css";

const Dashboard = ({ authedUser, questions, users }) => {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  return (
    <div className="p-5 dashboard container m-auto">
      <h1 className="text-3xl font-bold mt-9 text-center" data-testid="heading">
        Dashboard
      </h1>

      <h4 className="pt-3">New Questions</h4>
      <hr />
      <ul>
        {questions.filter(unanswered).map((question) => (
          <li key={question.id}>
            <DashboardCard
              question={question}
              author={users[question.author]}
            />
          </li>
        ))}
      </ul>

      <h4 className="pt-3">Answered Questions</h4>
      <hr />
      <ul>
        {questions.filter(answered).map((question) => (
          <li key={question.id}>
            <DashboardCard
              question={question}
              author={users[question.author]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
