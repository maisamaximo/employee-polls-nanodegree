import {connect} from "react-redux";
import './style.css';

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Dashboard);
