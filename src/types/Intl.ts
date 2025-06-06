import * as messagesImport from '../../messages/en.json' assert { type: 'json' };

export const messages = messagesImport as typeof messagesImport;

export type Messages = typeof messages;

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5];

type Leaves<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? K | Join<K, Leaves<T[K], Prev[D]>>
          : K
        : never;
    }[keyof T]
  : '';

export type MessageKeys = Leaves<Messages>;
