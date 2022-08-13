import { Text } from "react-native";
import styled from "styled-components/native";
import { colors, sizes } from "../../../utils/variables";
import PayIcon from "../../Icons/PayIcon";

const PayButton = () => {
  return (
    <Container>
      <PayIcon />
      <PayText>PAGAR</PayText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray2};
`;
const PayText = styled.Text`
  font-size: 10px;
  margin-top: ${sizes.spacePx};
`;

export default PayButton;
