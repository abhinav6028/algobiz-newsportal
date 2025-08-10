import React from 'react';
import EntertainmentImage from '../../assets/images/entertainment.svg';
import SuryaImage from '../../assets/images/surya.jpg';
import RecommendedImage1 from '../../assets/images/enertainment_recommended1.jpg';
import RecommendedImage2 from '../../assets/images/entertainmentcontent1.jpg';
import RecommendedImage3 from '../../assets/images/entertainment_content2.png';
import contentImage1 from '../../assets/images/entertainmentcontent_3.jpg';
import contentImage2 from '../../assets/images/entertainmentcontent_4.jpg';
import contentImage3 from '../../assets/images/entertainmentcontent_5.png';
import NewsSection from './NewSection';

interface NewsItem {
  id: number; // add id for keys
  type: 'featured' | 'recommended' | 'content';
  image: string;
  mainTitle: string;
  title: string;
  description?: string;
  content?: string;
  timeContent?: string;
  time?: string;
}

const newsData: NewsItem[] = [
  // Featured news
  {
    id: 1,
    type: 'featured',
    image: SuryaImage,
    mainTitle: "ENTERTAINMENT NEWS",
    title: '51 ഡോക്ടര്‍മാര്‍, 1800 ഓളം എഞ്ചിനീയർമാർ; എല്ലാത്തിനും കാരണമായ',
    content: "അഗരം ഫൗണ്ടേഷന്റെ 15-ാം വാർഷികത്തോട് അനുബന്ധിച്ചാണ് ഇവരെല്ലാം ഒരുവേദിയിൽ ഒത്തു കൂടിയത്.",
    description: 'അമ്പതിലധികം ദക്ഷിണേന്ത്യൻ ജില്ലകളിൽ റിലീസ്.',
    timeContent: "ഫസ്റ്റ്എഡിഷൻ  നെറ്റ്‌വർക്ക്",
    time: '3 minute read',
  },

  // Recommended news
  {
    id: 2,
    type: 'recommended',
    image: RecommendedImage1,
    mainTitle: "ENTERTAINMENT NEWS",
    title: 'ദുബായിൽ ഡ്രൈവിങ് ലൈസൻസിനുള്ള ഫീസിൽ വർദ്ധനവുമായി ആർടിഎ',
  },
  {
    id: 3,
    type: 'recommended',
    image: RecommendedImage2,
    mainTitle: "ENTERTAINMENT NEWS",
    title: "പൃഥ്വിരാജിന് പുരസ്‌കാരം ലഭിക്കാതെ പോയത് 'എമ്പുരാൻ' കാരണം",
  },
  {
    id: 4,
    type: 'recommended',
    image: RecommendedImage3,
    mainTitle: "ENTERTAINMENT NEWS",
    title: "പുതിയ സിനിമ റിലീസുകൾ അടുത്ത മാസം",
  },

  // Content news
  {
    id: 5,
    type: 'content',
    image: contentImage1,
    mainTitle: "ENTERTAINMENT NEWS",
    title: "സിനിമയിൽ പുതിയ ട്രെൻഡുകൾ",
  },
  {
    id: 6,
    type: 'content',
    image: contentImage2,
    mainTitle: "ENTERTAINMENT NEWS",
    title: "തിയേറ്ററിൽ നിന്ന് ഓൺലൈൻ വരവേൽപ്പ്",
  },
  {
    id: 7,
    type: 'content',
    image: contentImage3,
    mainTitle: "ENTERTAINMENT NEWS",
    title: "സിനിമയുടെ ചരിത്രം പുതിയ വെളിച്ചത്തിൽ",
  },
];

const moviesReviewData: NewsItem[] = [
  // Featured news
  {
    id: 1,
    type: 'featured',
    image: SuryaImage,
    mainTitle: "MOVIES REVIEW",
    title: '51 ഡോക്ടര്‍മാര്‍, 1800 ഓളം എഞ്ചിനീയർമാർ; എല്ലാത്തിനും കാരണമായ',
    content: "അഗരം ഫൗണ്ടേഷന്റെ 15-ാം വാർഷികത്തോട് അനുബന്ധിച്ചാണ് ഇവരെല്ലാം ഒരുവേദിയിൽ ഒത്തു കൂടിയത്.",
    description: 'അമ്പതിലധികം ദക്ഷിണേന്ത്യൻ ജില്ലകളിൽ റിലീസ്.',
    timeContent: "ഫസ്റ്റ്എഡിഷൻ  നെറ്റ്‌വർക്ക്",
    time: '3 minute read',
  },

  // Recommended news
  {
    id: 2,
    type: 'recommended',
    image: RecommendedImage1,
    mainTitle: "MOVIES REVIEW",
    title: 'ദുബായിൽ ഡ്രൈവിങ് ലൈസൻസിനുള്ള ഫീസിൽ വർദ്ധനവുമായി ആർടിഎ',
  },
  {
    id: 3,
    type: 'recommended',
    image: RecommendedImage2,
    mainTitle: "MOVIES REVIEW",
    title: "പൃഥ്വിരാജിന് പുരസ്‌കാരം ലഭിക്കാതെ പോയത് 'എമ്പുരാൻ' കാരണം",
  },
  {
    id: 4,
    type: 'recommended',
    image: RecommendedImage3,
    mainTitle: "MOVIES REVIEW",
    title: "പുതിയ സിനിമ റിലീസുകൾ അടുത്ത മാസം",
  },

  // Content news
  {
    id: 5,
    type: 'content',
    image: contentImage1,
    mainTitle: "MOVIES REVIEW",
    title: "സിനിമയിൽ പുതിയ ട്രെൻഡുകൾ",
  },
  {
    id: 6,
    type: 'content',
    image: contentImage2,
    mainTitle: "MOVIES REVIEW",
    title: "തിയേറ്ററിൽ നിന്ന് ഓൺലൈൻ വരവേൽപ്പ്",
  },
  {
    id: 7,
    type: 'content',
    image: contentImage3,
    mainTitle: "MOVIES REVIEW",
    title: "സിനിമയുടെ ചരിത്രം പുതിയ വെളിച്ചത്തിൽ",
  },
];

const moviesChatData: NewsItem[] = [
  // Featured news
  {
    id: 1,
    type: 'featured',
    image: SuryaImage,
    mainTitle: "MOVIES CHAT",
    title: '51 ഡോക്ടര്‍മാര്‍, 1800 ഓളം എഞ്ചിനീയർമാർ; എല്ലാത്തിനും കാരണമായ',
    content: "അഗരം ഫൗണ്ടേഷന്റെ 15-ാം വാർഷികത്തോട് അനുബന്ധിച്ചാണ് ഇവരെല്ലാം ഒരുവേദിയിൽ ഒത്തു കൂടിയത്.",
    description: 'അമ്പതിലധികം ദക്ഷിണേന്ത്യൻ ജില്ലകളിൽ റിലീസ്.',
    timeContent: "ഫസ്റ്റ്എഡിഷൻ  നെറ്റ്‌വർക്ക്",
    time: '3 minute read',
  },

  // Recommended news
  {
    id: 2,
    type: 'recommended',
    image: RecommendedImage1,
    mainTitle: "MOVIES CHAT",
    title: 'ദുബായിൽ ഡ്രൈവിങ് ലൈസൻസിനുള്ള ഫീസിൽ വർദ്ധനവുമായി ആർടിഎ',
  },
  {
    id: 3,
    type: 'recommended',
    image: RecommendedImage2,
    mainTitle: "MOVIES CHAT",
    title: "പൃഥ്വിരാജിന് പുരസ്‌കാരം ലഭിക്കാതെ പോയത് 'എമ്പുരാൻ' കാരണം",
  },
  {
    id: 4,
    type: 'recommended',
    image: RecommendedImage3,
    mainTitle: "MOVIES CHAT",
    title: "പുതിയ സിനിമ റിലീസുകൾ അടുത്ത മാസം",
  },

  // Content news
  {
    id: 5,
    type: 'content',
    image: contentImage1,
    mainTitle: "MOVIES CHAT",
    title: "സിനിമയിൽ പുതിയ ട്രെൻഡുകൾ",
  },
  {
    id: 6,
    type: 'content',
    image: contentImage2,
    mainTitle: "MOVIES CHAT",
    title: "തിയേറ്ററിൽ നിന്ന് ഓൺലൈൻ വരവേൽപ്പ്",
  },
  {
    id: 7,
    type: 'content',
    image: contentImage3,
    mainTitle: "MOVIES CHAT",
    title: "സിനിമയുടെ ചരിത്രം പുതിയ വെളിച്ചത്തിൽ",
  },
];


const NewsDetailPage: React.FC = () => {

  return (
    <>
    <NewsSection
      sectionTitle="ENTERTAINMENT NEWS"
      newsData={newsData}
      iconImage={EntertainmentImage}
    />
    <NewsSection
      sectionTitle="MOVIE REVIEW"
      newsData={moviesReviewData}
      iconImage={EntertainmentImage}
    />
    <NewsSection
      sectionTitle="MOVIE CHAT"
      newsData={moviesChatData}
      iconImage={EntertainmentImage}
    />
    </>
  );
};

export default NewsDetailPage;
