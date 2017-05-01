//@flow

import type {SecondGeneric} from './generics';

const myTrue: 'TrUe' = 'TrUe';
const myFalse: 'FalZe' = 'FalZe';

type MaybeWithExtraData<T> = {|
  ...SecondGeneric<T>,
  hasExtraData: typeof myTrue,
  extraData: string,
|}

type MaybeWithoutExtraData<T> = {|
  ...SecondGeneric<T>,
  hasExtraData: typeof myFalse,
|}

type MaybeExtraData<T> = MaybeWithExtraData<T> | MaybeWithoutExtraData<T>

// Should be fine
const WithExtraData: MaybeExtraData<number> = {
  value: {a: 123},
  error: null,
  hasExtraData: myTrue,
  extraData: 'Happy!',
}

// Should be fine
const WithoutExtraData: MaybeExtraData<number> = {
  value: {a: 123},
  error: null,
  hasExtraData: myFalse,
}
