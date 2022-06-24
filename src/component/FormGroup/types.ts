export interface IFormProps {
  setIsModalVisible: (val: boolean) => void;
  inputValues: {
    data: {
      id: number | null;
      name: string;
      prefix_url: string;
      key: string;
      secret: string;
    };
  };
  setInputValues: (data: any) => void;
}
