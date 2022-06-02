/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 * @emails oncall+relay
 */

'use strict';

import type {AstrologicalSignID} from '../AstrologicalSignUtils';
import type {QueryAllAstrologicalSignsResolver$key} from './__generated__/QueryAllAstrologicalSignsResolver.graphql';

const {HOUSE_ORDER} = require('../AstrologicalSignUtils');

const {graphql} = require('relay-runtime');
const {readFragment} = require('relay-runtime/store/ResolverFragments');

/**
 * @RelayResolver
 * @fieldName all_astrological_signs
 * @rootFragment QueryAllAstrologicalSignsResolver
 * @onType Query
 * @edgeTo [AstrologicalSign]
 *
 * A client edge to a plural client object
 */
function astrologicalSignSelf(
  rootKey: QueryAllAstrologicalSignsResolver$key,
): $ReadOnlyArray<AstrologicalSignID> {
  readFragment(
    graphql`
      fragment QueryAllAstrologicalSignsResolver on Query {
        me {
          __typename
        }
      }
    `,
    rootKey,
  );

  return [...HOUSE_ORDER];
}

module.exports = astrologicalSignSelf;