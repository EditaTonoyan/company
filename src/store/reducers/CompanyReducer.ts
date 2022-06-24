import { CompanyAction, CompanyActionEnum, CompanyState } from "../types";

const initialState: CompanyState = {
  companies: [],
};
export const CompanyReducer = (state = initialState, action: CompanyAction) => {
  switch (action.type) {
    case CompanyActionEnum.SET_DATA:
      return {
        ...state,
        conpanies: action.payload,
      };

    case CompanyActionEnum.DELETE_COMPANY:
      return {
        ...state,
        conpanies: action.payload,
      };

    case CompanyActionEnum.ADD_DATA:
      return {
        ...state,
        companies: action.payload,
      };
    default:
      return state;
  }
};
