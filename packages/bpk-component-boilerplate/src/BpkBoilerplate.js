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

import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './BpkBoilerplate.scss';

const getClassName = cssModules(STYLES);

type Props = {
  title: string,
  alternate: boolean,
  className: ?string,
};
const BpkBoilerplate = (props: Props) => {
  const { alternate, className, title, ...rest } = props;
  const classNames = getClassName(
    'bpk-boilerplate',
    alternate && 'bpk-boilerplate--alternate',
    className,
  );

  return (
    <div className={classNames} {...rest}>
      {title}
    </div>
  );
};

BpkBoilerplate.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  alternate: PropTypes.bool,
};

BpkBoilerplate.defaultProps = {
  className: null,
  alternate: false,
};

export default BpkBoilerplate;
