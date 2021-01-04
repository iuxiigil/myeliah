import { HOMECOMPONENTS } from "../variables";

export const addHomePageComponents = (
  selectDestination,
  selectSource,
  pageName
) => ({
  type: HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS,
  selectDestination,
  selectSource,
  pageName,
});

export const updateSourceComponents = (selectSource, pageName) => ({
  type: HOMECOMPONENTS.UPDATE_SOURCE_COMPONENTS,
  selectSource,
  pageName,
});

export const updateDestinationComponents = (selectDestination, pageName) => ({
  type: HOMECOMPONENTS.UPDATE_DESTINATION_COMPONENTS,
  selectDestination,
  pageName,
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
