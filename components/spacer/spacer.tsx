import { FC } from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

interface SpacerProps {
  width: string,
  height: string
}

type SpacerPropsExcludeWidth = PartialBy<SpacerProps, 'width'>
type SpacerPropsExcludeHeight = PartialBy<SpacerPropsExcludeWidth, 'height'>

const Spacer: FC<SpacerPropsExcludeHeight> = ({width = '0px', height = '0px'}) =>
  <div style={{ width, height}} />;

export default Spacer;