import { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MoadlGroup from "../../component/ModalGroup";

import { setCompanies } from "../../store/actions/CompanyActions";
import { deleteCompany } from "../../store/actions/CompanyActions";

interface IData {
  data: {
    id: number | null;
    name: string;
    prefix_url: string;
    secret: string;
    key: string;
  };
}

const CompanyList = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<IData>({
    data: {
      id: null,
      name: "",
      prefix_url: "",
      secret: "",
      key: "",
    },
  });

  const [deleted, setDeleted] = useState(false);

  const companiesList: [] = useSelector(
    (state: { conpanies: [] }) => state.conpanies
  );

  const isAutenticated = localStorage.getItem("token");

  const navigate = useNavigate();

  const dispatch: any = useDispatch();

  useEffect(() => {
    !isAutenticated && navigate("/login");
    dispatch(setCompanies());
  }, [dispatch, isAutenticated, navigate, deleted, isModalVisible]);

  const deleteComp = (id: number) => {
    dispatch(deleteCompany(id, companiesList));
    setDeleted(!deleted);
  };

  const updateData = (id: number) => {
    const data: any = companiesList.find(
      (item: { id: number }) => item.id == id
    );

    setInputValues({ data });

    setIsModalVisible(true);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const data1 = companiesList?.map(({ id, key, name }) => {
    return (
      <div key={id} style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h2>{name}</h2>
          <p>{key}</p>
        </div>
        <div>
          <Button onClick={() => deleteComp(id)} style={{ marginLeft: "10px" }}>
            Delete
          </Button>
          <Button onClick={() => updateData(id)} style={{ marginLeft: "10px" }}>
            Update
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Button onClick={showModal}>Add Company</Button>
      <h1>Company List</h1>
      {data1}

      {isModalVisible && (
        <MoadlGroup
          inputValues={inputValues}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setInputValues={setInputValues}
        />
      )}
    </div>
  );
};

export default CompanyList;
