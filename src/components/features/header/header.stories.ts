import type { Meta, StoryObj } from '@storybook/react';
import {ReduxStoreProviderDecorator} from '../../../common/decorators/reduxStoreProviderDecorator';
import {Header} from './Header';


const meta = {
  title: 'OnlineShop/header',
  component: Header,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator],

} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {};

