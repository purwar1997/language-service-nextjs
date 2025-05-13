'use client';

import { useEffect } from 'react';
import { LanguageService } from '@tx/language-service';

export default function Home() {
  useEffect(() => {
    const getTranslationsFromS3 = async () => {
      try {
        await LanguageService.initialize('de-DE');
        console.log('All translations:', LanguageService.translate);
        console.log('Signup page heading:', LanguageService.translate['signup_page_heading']);
      } catch (error) {
        console.log(error);
      }
    };

    getTranslationsFromS3();
  }, []);

  return <div>Home Page</div>;
}
