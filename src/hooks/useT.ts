import { useTranslations as useTranslationsOriginal } from 'next-intl';
import type { Messages } from '../types';

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type AllKeys<T> = {
  [K in keyof T & string]: T[K] extends object ? K | Join<K, AllKeys<T[K]>> : K;
}[keyof T & string];

type PathValue<T, Path extends string> = Path extends ''
  ? T
  : Path extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : never
  : Path extends keyof T
  ? T[Path]
  : never;

type NestedKeys<T> = {
  [K in keyof T & string]: T[K] extends object
    ? K | Join<K, NestedKeys<T[K]>>
    : K;
}[keyof T & string];

type KeysForNamespace<N extends string> = NestedKeys<PathValue<Messages, N>>;

interface TypedTranslation<N extends string> {
  (key: KeysForNamespace<N>, ...args: unknown[]): string;
  raw<T = unknown>(key: KeysForNamespace<N>): T;
}

export function useT<N extends AllKeys<Messages> | ''>(
  namespace: N
): TypedTranslation<N> {
  const t = useTranslationsOriginal(namespace);
  return t as unknown as TypedTranslation<N>;
}
