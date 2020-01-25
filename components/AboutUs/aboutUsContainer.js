import { connect } from "react-redux";
import AboutUs from "./index"
const mapStateToProps = state => {
    return {
        leaders: state.leaders.leaders
    }
};
export default connect(mapStateToProps)(AboutUs);
