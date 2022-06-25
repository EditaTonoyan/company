import { Dispatch } from "redux";
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
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

export const updateCompany =
  (id: number | null, params: {}, companiesList: []) =>
  async (dispatch: Dispatch) => {
    try {
      AxiosInstance.defaults.headers.common["Authorization"] = authHeader();
      const { data } = await AxiosInstance.put(
        `owner/companies/ ${id}`,
        params
      );

      const dataIndex = companiesList.findIndex(
        (item: { id: number }) => item.id == data.data.id
      );

      companiesList.splice(dataIndex, 1, data.data as never);

      dispatch({
        type: CompanyActionEnum.UPDATE_DATA,
        payload: companiesList,
      });
    } catch (error) {
      console.log(error);
    }
  };
