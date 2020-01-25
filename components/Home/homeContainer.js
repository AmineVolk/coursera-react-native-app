import { connect } from "react-redux";
import Home from "./index"
const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        comments: state.comments.comments,
        promotions: state.promotions.promotions,
        leaders: state.leaders.leaders
    }
};
export default connect(mapStateToProps)(Home);
