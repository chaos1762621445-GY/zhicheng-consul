import type { Locale } from "./config";
import { zh } from "@/messages/zh";
import { en } from "@/messages/en";
import { ja } from "@/messages/ja";
import type { Dictionary } from "@/messages/zh";

const dicts: Record<Locale, Dictionary> = { zh: zh as unknown as Dictionary, en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dicts[locale] ?? dicts.zh;
}

export type { Dictionary };
