import styles from "./toolbar.component.module.css";
import {useRouter} from "next/router";
import React from "react";
import Link from "next/link";

export default function ToolbarComponent() {
  const {pathname} = useRouter();

  let locale: string = pathname.split('/')[1];

  const localeEmoji: any = {
    de: "🇩🇪",
    en: "🇬🇧",
    es: "🇪🇸",
    ru: "🇷🇺",
  }

  if (!locale || !localeEmoji[locale]) {
    locale = 'en';
  }

  const locales: any = [
    {
      locale: 'en',
      title: 'English',
      emoji: localeEmoji.en,
    },
    {
      locale: 'de',
      title: 'Deutsch',
      emoji: localeEmoji.de,
    },
    {
      locale: 'es',
      title: 'Español',
      emoji: localeEmoji.es,
    },
    {
      locale: 'ru',
      title: 'Русский',
      emoji: localeEmoji.ru,
    }
  ]

  return (
    <header className={styles.toolbar}>
      {/* The following logo belongs to the DeepL SE, it's only purpose is to make the site coherent with its color scheme. Remove before publishing! */}
      <Link href={'https://www.deepl.com'}>
        <img className={styles.logo} src="https://egress.storeden.net/gallery/5a2577c9ffe48e7e4b418464" alt="logo" />
      </Link>
      <div className={styles.dropdown}>
        <span>{localeEmoji[locale]}</span>
        <div className={styles.dropdownContent}>
          {locales.map((locale: any, index: number) => {
            return (
              <a key={index} href={`/${locale.locale}`}>
                {locale.emoji} {locale.title}
              </a>
            )
          }
          )}
        </div>
      </div>
    </header>
  )
}