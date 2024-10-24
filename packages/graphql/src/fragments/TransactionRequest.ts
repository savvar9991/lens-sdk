import type { FragmentOf } from 'gql.tada';
import { graphql } from '../graphql';

const Eip1559TransactionRequest = graphql(`
  fragment Eip1559TransactionRequest on Eip1559TransactionRequest {
    __typename
    type
    to
    nonce
    gasLimit
    maxPriorityFeePerGas
    maxFeePerGas
    data
    value
    chainId
  }
`);
export type Eip1559TransactionRequest = FragmentOf<typeof Eip1559TransactionRequest>;

export const TransactionRequest = graphql(
  `
  fragment TransactionRequest on TransactionRequest {
    __typename
    encoded
    raw {
      ...Eip1559TransactionRequest
    }
  }
`,
  [Eip1559TransactionRequest],
);
export type TransactionRequest = FragmentOf<typeof TransactionRequest>;