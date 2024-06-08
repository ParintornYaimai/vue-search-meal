import { serviceGet } from '../serviceApi';

export async function searchMeals({ commit }, keyword) {
  try {
    const response = await serviceGet(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
    if (response && response.meals) {
      commit('setSearchedMeals', response.meals);
      // console.log(response.meals);
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
}


export async function getDetail({commit},keyword){
  try {
    const response = serviceGet(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${keyword}`)
    commit('setGetDetail', response.meals);
    // console.log(response.meals);
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
}