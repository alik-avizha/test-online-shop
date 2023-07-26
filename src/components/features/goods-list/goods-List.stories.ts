import type {Meta, StoryObj} from '@storybook/react';
import {ReduxStoreProviderDecorator} from '../../../common/decorators/reduxStoreProviderDecorator';
import {GoodsList} from './goods-list';


const meta = {
  title: 'OnlineShop/GoodsList',
  component: GoodsList,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator],

} satisfies Meta<typeof GoodsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GoodsListStory: Story = {};

