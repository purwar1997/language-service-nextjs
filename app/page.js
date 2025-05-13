'use client';

import { useEffect } from 'react';
import { LanguageService } from '@tx/language-service';
// import config from '../config.json';

export default function Home() {
  useEffect(() => {
    const getTranslationsFromS3 = async () => {
      try {
        // Fetch static asset config.json at the runtime
        const response = await fetch('./config.json');
        const config = await response.json();
        console.log('Config:', config);

        await LanguageService.initialize('hi-IN');
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

// Syntax => await ConfigService.initialize(sourceType, configFilePath, s3BucketURL);
// await ConfigService.initialize('env', '../../config.json');
