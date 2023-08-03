export const fallbackLng = 'en'
export const languages = [fallbackLng, 'de' , 'ar' , 'fr' , 'it']
export const defaultNS = 'translation'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}


export type TranslationOptions = (lng?: string, ns?: string)=> {
    supportedLngs: string[];
    fallbackLng: string;
    lng: string;
    fallbackNS: string;
    defaultNS: string;
    ns: string;
}



