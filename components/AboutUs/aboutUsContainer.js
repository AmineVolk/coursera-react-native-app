import { connect } from "react-redux";
import AboutUs from "./index";
const mapStateToProps = (state) => {
  return {
    leaders: state.leaders.leaders,
    isLeadersLoading: state.leaders.isLoading,
    errMess: state.leaders.errMess,
  };
};
export default connect(mapStateToProps)(AboutUs);
