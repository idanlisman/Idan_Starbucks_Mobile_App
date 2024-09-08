import Svg, { Path } from "react-native-svg";

const UserIcon = () => {
  return (
    <Svg width={17} height={32} viewBox="0 0 17 32" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M17 21.5C17 22.0093 16.9706 22.5101 16.9139 23H0.0860768C0.0293508 22.5101 0 22.0093 0 21.5C0 15.701 3.80558 11 8.5 11C13.1944 11 17 15.701 17 21.5ZM8.5 32L8.48206 32H8.51794L8.5 32ZM3.00032 20.4286H13.9997C13.9673 16.8716 11.5174 14 8.5 14C5.4826 14 3.03273 16.8716 3.00032 20.4286Z" fill="black" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 13C12.0898 13 15 10.0898 15 6.5C15 2.91016 12.0898 0 8.5 0C4.91016 0 2 2.91016 2 6.5C2 10.0898 4.91016 13 8.5 13ZM8.5 10C10.433 10 12 8.433 12 6.5C12 4.567 10.433 3 8.5 3C6.56702 3 5 4.567 5 6.5C5 8.433 6.56702 10 8.5 10Z" fill="black" />
    </Svg>
  );
};

export default UserIcon;
