/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react-native';

import ArticleItem from './index';

storiesOf('ArticleItem', module).add('default', () => <ArticleItem />);

