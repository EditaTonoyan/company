import { useEffect } from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { setToken } from "../../store/actions/CompanyActions";
import { useNavigate, Link } from "react-router-dom";
import { AppDispatch } from "../..";

const LoginForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAutenticated = localStorage.getItem("token");

  const navigate = useNavigate();

  const onFinish = (values: string) => {
    setToken(values, navigate);
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
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* <Link to="/"> */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {/* </Link> */}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
