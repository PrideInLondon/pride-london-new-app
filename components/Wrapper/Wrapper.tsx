import styled from 'styled-components/native'
import {
  compose,
  space,
  layout,
  flexbox,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system'

type WrapperProps = SpaceProps & LayoutProps & FlexboxProps
export const Wrapper = styled.View<WrapperProps>`
  ${compose(space, layout, flexbox)}
`
