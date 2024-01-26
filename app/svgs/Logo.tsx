import { Svg, Path, Stop, Defs, LinearGradient } from "react-native-svg";
export const Logo = () => {
  return (
    <Svg
      width="32"
      height="35"
      viewBox="0 0 28 27"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M11.0381 2.36347C11.8676 0.926819 13.5891 0.32625 15.099 0.857573C15.858 1.11076 16.531 1.63186 16.9625 2.37932L26.5751 19.0289C28.1366 21.7334 27.21 25.1916 24.5055 26.7531C23.9646 27.0653 23.2729 26.88 22.9606 26.3391L13.9958 10.8115L5.04001 26.3233C4.72774 26.8642 4.03609 27.0495 3.49518 26.7372C0.790688 25.1758 -0.135953 21.7175 1.42549 19.013L11.0381 2.36347Z"
        fill="#06C149"
      />
      <Path
        d="M14.0116 26.9034C15.8853 26.9034 17.4043 25.3844 17.4043 23.5107C17.4043 21.637 15.8853 20.118 14.0116 20.118C12.1379 20.118 10.6189 21.637 10.6189 23.5107C10.6189 25.3844 12.1379 26.9034 14.0116 26.9034Z"
        fill="#06C149"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1576_4541"
          x1="27.3337"
          y1="26.9047"
          x2="-4.31647"
          y2="17.5782"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#06C149" />
          <Stop offset="1" stop-color="#06C149" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1576_4541"
          x1="27.3337"
          y1="26.9047"
          x2="-4.31647"
          y2="17.5782"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#06C149" />
          <Stop offset="1" stop-color="#06C149" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
