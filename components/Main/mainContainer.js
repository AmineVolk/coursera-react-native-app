import { connect } from 'react-redux';
import { fetchComments } from '../../redux/actions/comments';
import { fetchDishes } from '../../redux/actions/dishes';
import { fetchLeaders } from '../../redux/actions/leader';
import { fetchPromos } from '../../redux/actions/promotions';

import Main from "./index"

const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        comments: state.comments.comments,
        promotions: state.promotions.promotions,
        leaders: state.leaders.leaders
    }
}

const mapDispatchToProps = dispatch => {
    const fetchDishesDispatch = () => {
        dispatch(fetchDishes())
    };
    const fetchCommentsDispatch = () => {
        dispatch(fetchComments());
    }
    const fetchPromosDispatch = () => {
        dispatch(fetchPromos());
    }
    const fetchLeadersDispatch = () => {
        dispatch(fetchLeaders());
    }
    return {
        fetchDishesDispatch,
        fetchCommentsDispatch,
        fetchPromosDispatch,
        fetchLeadersDispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);