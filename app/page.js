'use client';

import { useEffect } from 'react';
import { LanguageService } from '@tx/language-service';
import { ENV } from '@/lib/env';
import config from '../config.json';

export default function Home() {
  useEffect(() => {
    const getTranslationsFromS3 = async () => {
      try {
        console.log('ENV:', ENV);
        console.log('Config:', config);

        await LanguageService.initialize();
        const allTranslations = LanguageService.translate;
        console.log('All translations:', allTranslations);
        console.log('Signup heading:', allTranslations['signup_page_heading']);
      } catch (error) {
        console.log(error);
      }
    };

    getTranslationsFromS3();
  }, []);

  return <div>Home Page</div>;
}
