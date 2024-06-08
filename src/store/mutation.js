import {searchMeals,getDetailss} from '../store/actions'

export function setSearchedMeals(state, meal) {
    state.searchedMeals = meal;
}

export function setGetDetail(state,MealDetails){
    state.getDetails = MealDetails;
}