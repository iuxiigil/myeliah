import { HOMECOMPONENTS } from "../variables";

export const addHomePageComponents = (selectDestination, selectSource) => ({
  type: HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS,
  selectDestination,
  selectSource,
});

export const updateSourceComponents = (selectSource) => ({
  type: HOMECOMPONENTS.UPDATE_SOURCE_COMPONENTS,
  selectSource,
});

export const updateDestinationComponents = (selectDestination) => ({
  type: HOMECOMPONENTS.UPDATE_DESTINATION_COMPONENTS,
  selectDestination,
});

export const removeHomePageComponents = () => ({
  type: HOMECOMPONENTS.CLEAR_HOME_PAGE_COMPONENTS,
});

export const setFilterCategory = (category) => ({
  type: HOMECOMPONENTS.SET_FILTER_CATEGORY_COMPONENTS,
  category,
});

export const resetFilter = () => ({
  type: HOMECOMPONENTS.RESET_FILTER_COMPONENTS,
});
