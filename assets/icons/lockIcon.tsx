import Svg, { Path, Circle, Rect } from "react-native-svg";

const LockIcon = () => {
  return (
    <Svg width="17" height="23" viewBox="0 0 17 23" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.9421 5C11.6995 3.30385 10.2408 2 8.47758 2C6.71434 2 5.25564 3.30385 5.01302 5H3C3.25261 2.19675 5.60856 0 8.47758 0C11.3466 0 13.7025 2.19675 13.9552 5H11.9421Z" fill="black" />
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C0.895431 6 0 6.89543 0 8V21C0 22.1046 0.89543 23 2 23H15C16.1046 23 17 22.1046 17 21V8C17 6.89543 16.1046 6 15 6H2ZM4 8C2.89543 8 2 8.89543 2 10V19C2 20.1046 2.89543 21 4 21H13C14.1046 21 15 20.1046 15 19V10C15 8.89543 14.1046 8 13 8H4Z" fill="black" />
      <Circle cx="8.5" cy="13.5" r="3.5" fill="black" />
      <Rect x="7" y="14" width="3" height="5" rx="1.5" fill="black" />
    </Svg>
  );
};

export default LockIcon;
