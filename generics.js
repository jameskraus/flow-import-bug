//@flow

type FirstGeneric<T> = {|
  a: T,
|}

export type SecondGeneric<T> = {|
  value: FirstGeneric<T>,
  error: ?string,
|}
