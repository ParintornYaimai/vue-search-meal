import { serviceGet } from '../serviceApi';

export async function searchMeals({ commit }, keyword) {
  try {
    const response = await serviceGet(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
    if (response && response.meals) {
      commit('setSearchedMeals', response.meals);
    } 
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
}


export async function getDetailss({commit},id){
  try {
    if(id){
      const response = await serviceGet(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      if(response && response.meals){
        commit('setGetDetail', response.meals);
      }
    }
  } catch (error) {
    console.error('Error fetching meals:', error);
  }
}