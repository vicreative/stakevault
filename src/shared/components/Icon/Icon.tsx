import * as React from 'react';
import SportyBetLogo from './Sportybet';
import Bet9jaLogo from './Bet9ja';
import BetWayLogo from './Betway';
import BetKingLogo from './Betking';
import MissingLogo from './Missing';

type KeyOf<T extends object> = Extract<keyof T, string>;

const iconMap = {
  sportybet: <SportyBetLogo />,
  bet9ja: <Bet9jaLogo />,
  betway: <BetWayLogo />,
  betking: <BetKingLogo />,
  missing: <MissingLogo />,
};

type IconProps = {
  name: KeyOf<typeof iconMap>;
};

function Icon({ name }: IconProps) {
  return iconMap.hasOwnProperty(name) ? iconMap[name] : iconMap['missing'];
}

export default Icon;
