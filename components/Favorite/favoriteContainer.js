import { connect } from "react-redux";
import Favorite from "./index";
import { deleteFavorite } from "../../redux/actions/favorites";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    favorites: state.favorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  const deleteFavoriteDispatch = (dishId) => {
    dispatch(deleteFavorite(dishId));
  };
  return {
    deleteFavoriteDispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
