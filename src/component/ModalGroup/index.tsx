import React, { FC } from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { IModalProps } from "./types";
import FormGroup from "../FormGroup";

const MoadlGroup: FC<IModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  inputValues,
  setInputValues,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
    setInputValues({
      data: {
        name: "",
        prefix_url: "",
        secret: "",
        key: "",
      },
    });
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <FormGroup
          setInputValues={setInputValues}
          inputValues={inputValues}
          setIsModalVisible={setIsModalVisible}
        />
      </Modal>
    </div>
  );
};

export default MoadlGroup;
