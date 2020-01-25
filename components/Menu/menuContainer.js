import { connect } from 'react-redux';
import Menu from "./index"
const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
    }
}
export default connect(mapStateToProps)(Menu);