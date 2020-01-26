import { connect } from "react-redux";
import DishDetail from "./index"
import { postFavorite } from "../../redux/actions/favorites"
const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        comments: state.comments.comments,
        favorites: state.favorites
    }
};
const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId))
})
export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
