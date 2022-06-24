interface ICompanyData {
  id: number;
  key: string;
  name: string;
  prefix_url: string;
  secret: string;
}

export interface CompanyState {
  companies: [];
}

export enum CompanyActionEnum {
  SET_DATA = "SET_DATA",
  ADD_DATA = "ADD_DATA",
  SET_USER = "SET_USER",
  UPDATE_DATA = "UPDATE_DATA",
  DELETE_COMPANY = "DELETE_COMPANY",
}

interface IFetchData {
  type: CompanyActionEnum.SET_DATA;
  payload: ICompanyData;
}

interface IDeleteCompany {
  type: CompanyActionEnum.DELETE_COMPANY;
  payload: ICompanyData;
}

interface IAddData {
  type: CompanyActionEnum.ADD_DATA;
  payload: [];
}

interface IUpdateData {
  type: CompanyActionEnum.UPDATE_DATA;
  payload: [];
}

export type CompanyAction =
  | IFetchData
  | IAddData
  | IUpdateData
  | IDeleteCompany;
