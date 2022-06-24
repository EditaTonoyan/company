import { AnyAction, Dispatch } from "redux";
import { AxiosInstance } from "../../utils/AxiosInstance";
import authHeader from "../../utils/authHeader";
import { CompanyActionEnum } from "../types";

export const setToken = async (
  params: {},
  navigate: (value: string) => void
) => {
  try {
    const { data } = await AxiosInstance.post(`login`, params);

    const { token, user } = data.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const setCompanies = () => async (dispatch: Dispatch) => {
  try {
    AxiosInstance.defaults.headers.common["Authorization"] = authHeader();
    const { data } = await AxiosInstance.get("owner/companies");

    dispatch({
      type: CompanyActionEnum.SET_DATA,
      payload: data?.data,
    });
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export const addCompany = (params: {}) => async (dispatch: Dispatch) => {
  try {
    AxiosInstance.defaults.headers.common["Authorization"] = authHeader();
    const { data } = await AxiosInstance.post("owner/companies", params);
    dispatch({
      type: CompanyActionEnum.ADD_DATA,
      payload: data?.data,
    });
  } catch (error: any) {
    console.log(error.response.data.error.prefix_url);
  }
};

export const deleteCompany =
  (id: number, companiesList: []) => async (dispatch: Dispatch) => {
    try {
      AxiosInstance.defaults.headers.common["Authorization"] = authHeader();

      const { data } = await AxiosInstance.delete(`owner/companies/ ${id}`);

      const newData = companiesList.filter(
        (item: { id: number }) => item.id != data?.data.id
      );

      dispatch({
        type: CompanyActionEnum.DELETE_COMPANY,
        payload: newData,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateCompany = (id: number | null, params: {}) => async () => {
  try {
    AxiosInstance.defaults.headers.common["Authorization"] = authHeader();
    await AxiosInstance.put(`owner/companies/ ${id}`, params);
  } catch (error) {
    console.log(error);
  }
};
