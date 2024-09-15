import Svg, { Path, G } from "react-native-svg";

const CheckMarkIcon = () => {
  return (
    <Svg width="20px" height="20px" viewBox="0 0 32 32" fill="#000000" stroke="#000000">
      <G id="SVGRepo_bgCarrier" strokeWidth="0" />
      <G id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <G id="SVGRepo_iconCarrier">
        <G id="Page-1" strokeWidth="0.00032" fill="none" fillRule="evenodd">
          <G id="Icon-Set-Filled" transform="translate(-102.000000, -1141.000000)" fill="#dd5fc2">
            <Path d="M124.393,1151.43 C124.393,1151.43 117.335,1163.73 117.213,1163.84 C116.81,1164.22 116.177,1164.2 115.8,1163.8 L111.228,1159.58 C110.85,1159.18 110.871,1158.54 111.274,1158.17 C111.677,1157.79 112.31,1157.81 112.688,1158.21 L116.266,1161.51 L122.661,1150.43 C122.937,1149.96 123.548,1149.79 124.027,1150.07 C124.505,1150.34 124.669,1150.96 124.393,1151.43 L124.393,1151.43 Z M118,1141 C109.164,1141 102,1148.16 102,1157 C102,1165.84 109.164,1173 118,1173 C126.836,1173 134,1165.84 134,1157 C134,1148.16 126.836,1141 118,1141 L118,1141 Z" id="checkmark-circle" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default CheckMarkIcon;
