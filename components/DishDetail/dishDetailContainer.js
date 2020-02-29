import { connect } from "react-redux";
import DishDetail from "./index"
import { postFavorite } from "../../redux/actions/favorites"
import { postComment } from "../../redux/actions/comments"

const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        comments: state.comments.comments,
        favorites: state.favorites
    }
};
const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (comment) => dispatch(postComment(comment))
})
export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
