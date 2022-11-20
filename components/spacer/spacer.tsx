import { FC } from "react";
import PartialBy from "../../models/PartialBy";

interface SpacerProps {
  width: string,
  height: string
}

type SpacerPropsExcludeWidth = PartialBy<SpacerProps, 'width'>
type SpacerPropsExcludeHeight = PartialBy<SpacerPropsExcludeWidth, 'height'>

const Spacer: FC<SpacerPropsExcludeHeight> = ({width = '0px', height = '0px'}) =>
  <div style={{ width, height}} />;

export default Spacer;