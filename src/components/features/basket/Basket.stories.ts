import type { Meta, StoryObj } from '@storybook/react';
import {ReduxStoreProviderDecorator} from '../../../common/decorators/reduxStoreProviderDecorator';
import {Basket} from './Basket';


const meta = {
  title: 'OnlineShop/Basket',
  component: Basket,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator],

} satisfies Meta<typeof Basket>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasketStory: Story = {};

