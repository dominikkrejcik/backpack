/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';
import BpkBoilerplate from './BpkBoilerplate';

describe('BpkBoilerplate', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<BpkBoilerplate title="Hello world" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with the "alternate" prop', () => {
    const tree = renderer
      .create(<BpkBoilerplate title="Hello world" alternate />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should support custom class names', () => {
    const tree = renderer
      .create(
        <BpkBoilerplate title="Hello world" className="custom-classname" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should support arbitrary props', () => {
    const tree = renderer
      .create(<BpkBoilerplate title="Hello world" testID="123" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
