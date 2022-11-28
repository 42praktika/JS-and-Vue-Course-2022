import { MODALS_TYPES } from "../const";

export default {
    openedModalType: MODALS_TYPES.NONE,
};
export const stateImageDogs = {
    imageDogs: '',
}
export const stateInfoRickAndMorty = {
    data: {
        name: 'name',
        status: 'status',
        species: 'species',
        gender: 'gender',
    },
    url: {
        imageRickAndMorty: '',
    }
}
export const stateGetApiInfo = {
    data: {
        city: 'city',
        region: 'region',
        country: 'country',
        continent: 'continent',
        timezone: 'timezone',
    }
}