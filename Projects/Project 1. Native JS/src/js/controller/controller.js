import {getCatPromise} from "../api/catsApi";
import {catState, factsState, mealState} from "../state";
import {getFactPromise} from "../api/numbersApi";
import {getMealPromise} from "../api/mealApi";

export const setCatLoaderState = (loaderState) => {
    catState.isLoading = loaderState
};

export const setCatDataState = () => {
    getCatPromise().then(response => {
        catState.data = response;
    });
};

export const setFactLoaderState = (loaderState) => {
    factsState.isLoading = loaderState
};

export const setFactDataState = (number) => {
    getFactPromise(number).then(response => {
        factsState.data = response;
    });
};

export const setMealLoaderState = (loaderState) => {
    mealState.isLoading = loaderState
};

export const setMealDataState = (meal) => {
    getMealPromise(meal).then(arrayOfMeal =>
        mealState.data = arrayOfMeal);
};
