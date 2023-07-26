import type {Meta, StoryObj} from '@storybook/react';
import {ReduxStoreProviderDecorator} from '../../../../common/decorators/reduxStoreProviderDecorator';
import {CardGood} from './card';


const meta = {
  title: 'OnlineShop/CardGood',
  component: CardGood,
  tags: ['autodocs'],
  decorators: [ReduxStoreProviderDecorator],

} satisfies Meta<typeof CardGood>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardGoodStory: Story = {
  args: {
    good: {id: '1', inCart: 0, price: 100, title: 'Milk', description: 'Описание'}
  }
};

