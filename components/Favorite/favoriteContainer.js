import { connect } from 'react-redux';
import Favorite from "./index"
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        favorites: state.favorites
    }
}
export default connect(mapStateToProps)(Favorite);