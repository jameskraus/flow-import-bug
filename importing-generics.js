//@flow

import type {Generic} from './generics';

const myTrue: 'myTrue' = 'myTrue';
const myFalse: 'myFalse' = 'myFalse';

type MaybeWithExtraData<T> = {|
  ...Generic<T>,
  hasExtraData: typeof myTrue,
  extraData: string,
|}

type MaybeWithoutExtraData<T> = {|
  ...Generic<T>,
  hasExtraData: typeof myFalse,
|}

type MaybeExtraData<T> = MaybeWithExtraData<T> | MaybeWithoutExtraData<T>

// Should be fine
const WithExtraData: MaybeExtraData<number> = {
  value: 123,
  hasExtraData: myTrue,
  extraData: 'Happy!',
}

// Should be fine
const WithoutExtraData: MaybeExtraData<number> = {
  value: 123,
  hasExtraData: myFalse,
}
