export interface IModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
  setInputValues: (data: any) => void;
  inputValues: {
    data: {
      id: number | null;
      name: string;
      prefix_url: string;
      key: string;
      secret: string;
    };
  };
}
