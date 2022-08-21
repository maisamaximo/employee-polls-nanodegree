import { connect } from "react-redux";

import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

import "./style.css";

const Leaderboard = ({ users }) => {
  return (
    <div className="p-5 container m-auto">
      <h1 className="mb-4 text-center">Leaderboard</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered questions</th>
            <th>Created by user</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800 ">
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <span>
                  <Image
                    className="card-avatar-leaderboard"
                    roundedCircle
                    src={user?.avatarURL}
                    alt={`Author: ${user?.name}`}
                  />{" "}
                  {user.name}
                </span>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
