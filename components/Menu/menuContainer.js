import { connect } from 'react-redux';
import Menu from "./index"
const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        erreMess: state.dishes.erreMess
    }
}
export default connect(mapStateToProps)(Menu);