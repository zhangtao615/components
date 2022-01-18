import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from './button'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button { ...args }></Button>

export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary',
  size: 'small',
  label: 'Primary',
}

export const Default = Template.bind({})
Default.args = {
  btnType: 'default',
  size: 'small',
  label: 'Default',
}


export const Danger = Template.bind({})
Danger.args = {
  btnType: 'danger',
  size: 'small',
  label: 'Danger',
}

export const Link = Template.bind({})
Link.args = {
  btnType: 'link',
  size: 'small',
  label: 'Link',
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  btnType: 'default',
  size: 'large',
  label: 'LargeButton'
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  btnType: 'default',
  size: 'small',
  label: 'SmallButton'
}
