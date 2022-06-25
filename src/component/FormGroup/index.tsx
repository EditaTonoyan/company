import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";

import "antd/dist/antd.css";

import { IFormProps } from "./types";

import { addCompany, updateCompany } from "../../store/actions/CompanyActions";

const FormGroup: FC<IFormProps> = ({
  setIsModalVisible,
  inputValues,
  setInputValues,
}) => {
  const companiesList: [] = useSelector(
    (state: { conpanies: [] }) => state.conpanies
  );
  const dispatch: any = useDispatch();

  const { id, name, prefix_url, secret, key } = inputValues.data;

  const onFinish = (values: {}) => {
    if (inputValues.data.name != "") {
      dispatch(updateCompany(id, values, companiesList));
    } else {
      dispatch(addCompany(values));
    }
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
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        initialValue={name}
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={prefix_url}
        label="Prefix Key"
        name="prefix_url"
        rules={[
          {
            required: true,
            message: "Please input your Prefix Key!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={key}
        label="Key"
        name="key"
        rules={[
          {
            required: true,
            message: "Please input your Key!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        initialValue={secret}
        label="Secret"
        name="secret"
        rules={[
          {
            required: true,
            message: "Please input your secret!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormGroup;
