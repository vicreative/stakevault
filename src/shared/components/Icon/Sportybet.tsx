import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SportyBetLogo() {
  return (
    <Svg width={32} height={32} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.494 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zm0-3.278c7.026 0 12.721-5.696 12.721-12.722S23.52 3.278 16.494 3.278 3.772 8.974 3.772 16s5.696 12.722 12.722 12.722z"
        fill="#000"
      />
      <Path d="M7.735 15.47a7.735 7.735 0 100-15.47 7.735 7.735 0 000 15.47z" fill="#0CD664" />
    </Svg>
  );
}
export default SportyBetLogo;
