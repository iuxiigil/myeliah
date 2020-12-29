import { HOMECOMPONENTS } from "../variables";

export const addHomePageComponents = (components) => ({
  type: HOMECOMPONENTS.GET_HOME_PAGE_COMPONENTS,
  components,
});

export const removeHomePageComponents = () => ({
  type: HOMECOMPONENTS.CLEAR_HOME_PAGE_COMPONENTS,
});
