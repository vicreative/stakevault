import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function Bet9jaLogo() {
  return (
    <Svg width={36} height={11} fill="none">
      <Path fill="url(#prefix__pattern0)" d="M0 0h36v11H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0_54:156" transform="matrix(.00606 0 0 .01983 0 -.016)" />
        </Pattern>
        <Image
          id="prefix__image0_54:156"
          width={165}
          height={52}
          xlinkHref={
            'data:image/png;base64,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' as any
          }
        />
      </Defs>
    </Svg>
  );
}

export default Bet9jaLogo;
