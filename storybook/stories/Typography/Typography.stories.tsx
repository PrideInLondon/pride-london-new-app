import { text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Em,
  Strong,
} from '../../../components/Typography/Typography'
import { Wrapper } from '../../../components/Wrapper/Wrapper'
const bodyVariants = {
  default: 'default',
  sm: 'sm',
} as const

storiesOf('Typography', module)
  .add('Headings', () => (
    <ScrollView scrollEnabled>
      <Wrapper p="md">
        <H1>{text('H1', 'H1 Lorem ipsum dolor')}</H1>
        <H2>{text('H2', 'H2 Lorem ipsum dolor')}</H2>
        <H3>{text('H3', 'H3 Lorem ipsum dolor')}</H3>
        <H4>{text('H4', 'H4 Lorem ipsum dolor')}</H4>
        <H5>{text('H5', 'H5 Lorem ipsum dolor')}</H5>
        <H6>{text('H6', 'H6 Lorem ipsum dolor')}</H6>
      </Wrapper>
    </ScrollView>
  ))
  .add('Body', () => (
    <Wrapper p="md">
      <P variant={select('Variant', bodyVariants, 'default')}>
        {text(
          'Paragraph',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias veniam sequi repellendus, sapiente eaque fugit, labore, eveniet nulla ullam tenetur doloribus quasi. Debitis, hic veniam? Officiis repellendus vel ratione?',
        )}
      </P>
      <Strong variant={select('Variant', bodyVariants, 'default')}>
        {text('Strong', 'Quod alias veniam sequi repellendus')}
      </Strong>
      <Em variant={select('Variant', bodyVariants, 'default')}>
        {text('Emphasis', 'Eveniet nulla ullam tenetur doloribus ')}
      </Em>
    </Wrapper>
  ))
