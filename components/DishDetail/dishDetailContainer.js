import { connect } from "react-redux";
import DishDetail from "./index"
const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        comments: state.comments.comments
    }
};
export default connect(mapStateToProps)(DishDetail);
