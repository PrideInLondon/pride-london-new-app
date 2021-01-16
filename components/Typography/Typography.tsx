import styled from 'styled-components/native'
import {
  compose,
  color,
  space as spacing,
  typography,
  layout,
  flexbox,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  TypographyProps,
  LayoutProps,
  variant,
} from 'styled-system'
import { Theme } from '../../theme/theme'
import { fontSizes } from '../../theme/fontSizes'
import { lineHeights } from '../../theme/lineHeights'

type TypoProps<T = Theme> = ColorProps<T> &
  SpaceProps<T> &
  FlexboxProps<T> &
  TypographyProps<T> &
  LayoutProps<T>

const typoUtils = compose(color, spacing, typography, layout, flexbox)

const typoProps: TypoProps = {
  color: 'indigo',
  fontFamily: 'headingExtraBold',
}

export const H1 = styled.Text<TypoProps>`
  ${typoUtils}
`

H1.defaultProps = {
  fontSize: 'h1',
  marginBottom: 'md',
  ...typoProps,
}

export const H2 = styled.Text<TypoProps>`
  ${typoUtils}
`

H2.defaultProps = {
  fontSize: 'h2',
  marginBottom: 'md',
  ...typoProps,
}

export const H3 = styled.Text<TypoProps>`
  ${typoUtils}
`

H3.defaultProps = {
  fontSize: 'h3',
  marginBottom: 'md',
  ...typoProps,
}

export const H4 = styled.Text<TypoProps>`
  ${typoUtils}
`

H4.defaultProps = {
  fontSize: 'h4',
  marginBottom: 'sm',
  ...typoProps,
}

export const H5 = styled.Text<TypoProps>`
  ${typoUtils}
`

H5.defaultProps = {
  fontSize: 'h5',
  marginBottom: 'sm',
  ...typoProps,
}

export const H6 = styled.Text<TypoProps>`
  ${typoUtils}
`

H6.defaultProps = {
  fontSize: 'h6',
  marginBottom: 'sm',
  ...typoProps,
}

interface BodyProps extends TypoProps {
  variant?: 'default' | 'sm'
}

const bodyProps: BodyProps = {
  color: 'indigo',
  variant: 'default',
}

export const P = styled.Text<BodyProps>`
  ${typoUtils}
  ${variant({
    variants: {
      default: {
        fontSize: fontSizes.body,
        marginBottom: fontSizes.body / 2,
        lineHeight: fontSizes.body * lineHeights.body,
      },
      sm: {
        fontSize: fontSizes.bodySmall,
        marginBottom: fontSizes.bodySmall / 2,
        lineHeight: fontSizes.bodySmall * lineHeights.body,
      },
    },
  })}
`

P.defaultProps = {
  ...bodyProps,
}

export const Strong = styled(P)`
  ${typoUtils}
`

Strong.defaultProps = {
  fontFamily: 'bodyBold',
  ...bodyProps,
}

export const Em = styled(P)`
  ${typoUtils}
`

Em.defaultProps = {
  fontFamily: 'bodyItalic',
  ...bodyProps,
}
