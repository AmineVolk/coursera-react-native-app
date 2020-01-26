import { connect } from "react-redux";
import Home from "./index"
const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        comments: state.comments.comments,
        promotions: state.promotions.promotions,
        leaders: state.leaders.leaders,
        isLoading: state.leaders.isLoading,
        erreMess: state.leaders.erreMess
    }
};
export default connect(mapStateToProps)(Home);
