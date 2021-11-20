import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function BetKingLogo() {
  return (
    <Svg width={44} height={16} fill="none">
      <Path fill="url(#prefix__pattern0)" d="M.364 0H44v16H.364z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0_71:235" transform="scale(.00833 .02273)" />
        </Pattern>
        <Image
          id="prefix__image0_71:235"
          width={120}
          height={44}
          xlinkHref={
            'data:image/png;base64,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' as any
          }
        />
      </Defs>
    </Svg>
  );
}

export default BetKingLogo;
