/* ==========================================================================
   The Old Veda — i18n
   - Dictionary of UI strings in 8 Indian languages
   - Detects: localStorage > browser language > IP geolocation > English
   - Apply via [data-i18n="key"] (text) or [data-i18n-html="key"] (allows <em> etc.)
   ========================================================================== */

const LANG_NAMES = {
  en: { native: 'English',   short: 'EN' },
  hi: { native: 'हिन्दी',     short: 'हि' },
  bn: { native: 'বাংলা',      short: 'বা' },
  gu: { native: 'ગુજરાતી',   short: 'ગુ' },
  mr: { native: 'मराठी',      short: 'म' },
  ta: { native: 'தமிழ்',      short: 'த' },
  te: { native: 'తెలుగు',    short: 'తె' },
  pa: { native: 'ਪੰਜਾਬੀ',     short: 'ਪੰ' }
};

// Indian state → language mapping (for IP geolocation fallback)
const STATE_TO_LANG = {
  'west bengal': 'bn', 'tripura': 'bn',
  'gujarat': 'gu', 'daman and diu': 'gu', 'dadra and nagar haveli': 'gu',
  'maharashtra': 'mr', 'goa': 'mr',
  'tamil nadu': 'ta', 'puducherry': 'ta',
  'andhra pradesh': 'te', 'telangana': 'te',
  'punjab': 'pa', 'chandigarh': 'pa'
};

const TRANSLATIONS = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.vitiligo': 'Vitiligo Treatment',
    'nav.sexualHealth': 'Sexual Health',
    'nav.results': 'Results',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'header.callDoctor': 'Call Dr. Pravesh',
    'lang.choose': 'Choose language',

    'cta.eyebrow': 'Speak Directly to the Doctor',
    'cta.headline': 'Your call is the <em>first medicine.</em>',
    'cta.lede': 'Every case is different. Pick up the phone, share your story, and let Dr. Pravesh decide what is right for you.',
    'cta.phoneSub': 'Available 9 AM – 8 PM, all days',
    'cta.callNow': 'Call now',
    'cta.whatsapp': 'WhatsApp',

    'footer.phoneLabel': 'Speak with the Doctor',
    'footer.brand.tag': 'Ayurvedic Healing · Dr. Pravesh Singh',
    'footer.col.visit': 'Visit the Clinic',
    'footer.col.treatments': 'Treatments',
    'footer.col.clinic': 'Clinic',
    'footer.col.connect': 'Connect',
    'footer.hoursLabel': 'Hours:',
    'footer.hoursValue': '9 AM – 8 PM, all days',
    'footer.copy': '© 2026 The Old Veda. All rights reserved.',

    'hero.eyebrow': 'Authentic Ayurveda · Since the Vedas',
    'hero.headline': 'Ancient <em>wisdom</em> for skin that <em>heals itself.</em>',
    'hero.lede': 'Vedic remedies, prepared individually — not from a shelf. Dr. Pravesh Singh personally reviews every case of vitiligo and confidential sexual health concerns to formulate medicine made for you alone.',
    'hero.btnCall': 'Call Dr. Pravesh now',
    'hero.btnWhatsapp': 'WhatsApp',
    'hero.trustYears': 'Years of practice',
    'hero.trustPatients': 'Patients treated',
    'hero.trustFormulations': 'Vedic formulations',
    'hero.visualCaption': '— Treating mind & body, the way our forefathers did.'
  },

  hi: {
    'nav.home': 'मुख्य पृष्ठ',
    'nav.about': 'हमारे बारे में',
    'nav.vitiligo': 'सफ़ेद दाग का इलाज',
    'nav.sexualHealth': 'यौन स्वास्थ्य',
    'nav.results': 'परिणाम',
    'nav.testimonials': 'मरीज़ों की राय',
    'nav.contact': 'संपर्क',
    'header.callDoctor': 'डॉ. प्रवेश को कॉल करें',
    'lang.choose': 'भाषा चुनें',

    'cta.eyebrow': 'सीधे डॉक्टर से बात करें',
    'cta.headline': 'आपकी कॉल ही है <em>पहली दवा।</em>',
    'cta.lede': 'हर मरीज़ अलग है। फ़ोन उठाइए, अपनी बात कहिए, और डॉ. प्रवेश को तय करने दीजिए कि आपके लिए क्या सही है।',
    'cta.phoneSub': 'सुबह 9 से रात 8 बजे तक, सभी दिन',
    'cta.callNow': 'अभी कॉल करें',
    'cta.whatsapp': 'व्हाट्सऐप',

    'footer.phoneLabel': 'डॉक्टर से बात करें',
    'footer.brand.tag': 'आयुर्वेदिक चिकित्सा · डॉ. प्रवेश सिंह',
    'footer.col.visit': 'क्लिनिक पर आइए',
    'footer.col.treatments': 'उपचार',
    'footer.col.clinic': 'क्लिनिक',
    'footer.col.connect': 'संपर्क करें',
    'footer.hoursLabel': 'समय:',
    'footer.hoursValue': 'सुबह 9 – रात 8, सभी दिन',
    'footer.copy': '© 2026 दि ओल्ड वेद। सर्वाधिकार सुरक्षित।',

    'hero.eyebrow': 'प्रामाणिक आयुर्वेद · वेदों के समय से',
    'hero.headline': 'प्राचीन <em>ज्ञान</em>, ऐसी त्वचा के लिए जो <em>स्वयं ठीक हो।</em>',
    'hero.lede': 'वैदिक दवाइयाँ — हर मरीज़ के लिए अलग से तैयार, बाज़ार से नहीं। डॉ. प्रवेश सिंह हर सफ़ेद दाग और यौन स्वास्थ्य के मामले को व्यक्तिगत रूप से देखते हैं और सिर्फ़ आपके लिए दवा बनाते हैं।',
    'hero.btnCall': 'डॉ. प्रवेश को अभी कॉल करें',
    'hero.btnWhatsapp': 'व्हाट्सऐप',
    'hero.trustYears': 'वर्षों का अनुभव',
    'hero.trustPatients': 'मरीज़ों का इलाज',
    'hero.trustFormulations': 'वैदिक नुस्ख़े',
    'hero.visualCaption': '— मन और शरीर का इलाज, उसी तरह जैसे हमारे पूर्वज करते थे।'
  },

  bn: {
    'nav.home': 'হোম',
    'nav.about': 'পরিচিতি',
    'nav.vitiligo': 'শ্বেতী চিকিৎসা',
    'nav.sexualHealth': 'যৌন স্বাস্থ্য',
    'nav.results': 'ফলাফল',
    'nav.testimonials': 'রোগীর কথা',
    'nav.contact': 'যোগাযোগ',
    'header.callDoctor': 'ডা. প্রবেশকে কল করুন',
    'lang.choose': 'ভাষা নির্বাচন করুন',

    'cta.eyebrow': 'সরাসরি ডাক্তারের সাথে কথা বলুন',
    'cta.headline': 'আপনার ফোনই হলো <em>প্রথম ওষুধ।</em>',
    'cta.lede': 'প্রতিটি রোগীর সমস্যা আলাদা। ফোন তুলুন, আপনার কথা বলুন, এবং ডা. প্রবেশকে ঠিক করতে দিন আপনার জন্য কী সঠিক।',
    'cta.phoneSub': 'সকাল ৯টা – রাত ৮টা, সব দিন',
    'cta.callNow': 'এখনই কল করুন',
    'cta.whatsapp': 'হোয়াটসঅ্যাপ',

    'footer.phoneLabel': 'ডাক্তারের সাথে কথা বলুন',
    'footer.brand.tag': 'আয়ুর্বেদিক চিকিৎসা · ডা. প্রবেশ সিং',
    'footer.col.visit': 'ক্লিনিকে আসুন',
    'footer.col.treatments': 'চিকিৎসা',
    'footer.col.clinic': 'ক্লিনিক',
    'footer.col.connect': 'যোগাযোগ',
    'footer.hoursLabel': 'সময়:',
    'footer.hoursValue': 'সকাল ৯ – রাত ৮, সব দিন',
    'footer.copy': '© ২০২৬ দি ওল্ড বেদ। সর্বস্বত্ব সংরক্ষিত।',

    'hero.eyebrow': 'প্রকৃত আয়ুর্বেদ · বেদের যুগ থেকে',
    'hero.headline': 'প্রাচীন <em>জ্ঞান</em> এমন ত্বকের জন্য যা <em>নিজেই সুস্থ হয়।</em>',
    'hero.lede': 'বৈদিক চিকিৎসা — প্রতিটি রোগীর জন্য আলাদাভাবে তৈরি, দোকানের তাক থেকে নয়। ডা. প্রবেশ সিং প্রতিটি শ্বেতী এবং গোপনীয় যৌন স্বাস্থ্যের কেস ব্যক্তিগতভাবে দেখেন এবং শুধু আপনার জন্য ওষুধ তৈরি করেন।',
    'hero.btnCall': 'ডা. প্রবেশকে এখন কল করুন',
    'hero.btnWhatsapp': 'হোয়াটসঅ্যাপ',
    'hero.trustYears': 'বছরের অভিজ্ঞতা',
    'hero.trustPatients': 'রোগী চিকিৎসিত',
    'hero.trustFormulations': 'বৈদিক ওষুধ',
    'hero.visualCaption': '— মন ও শরীরের চিকিৎসা, ঠিক যেমন আমাদের পূর্বপুরুষরা করতেন।'
  },

  gu: {
    'nav.home': 'હોમ',
    'nav.about': 'અમારા વિશે',
    'nav.vitiligo': 'કોઢનો ઈલાજ',
    'nav.sexualHealth': 'જાતીય આરોગ્ય',
    'nav.results': 'પરિણામો',
    'nav.testimonials': 'દર્દીઓના અભિપ્રાય',
    'nav.contact': 'સંપર્ક',
    'header.callDoctor': 'ડૉ. પ્રવેશને કૉલ કરો',
    'lang.choose': 'ભાષા પસંદ કરો',

    'cta.eyebrow': 'સીધા ડૉક્ટર સાથે વાત કરો',
    'cta.headline': 'તમારો કૉલ જ છે <em>પહેલી દવા.</em>',
    'cta.lede': 'દરેક દર્દી અલગ છે. ફોન ઉપાડો, તમારી વાત કહો, અને ડૉ. પ્રવેશને નક્કી કરવા દો કે તમારા માટે શું યોગ્ય છે.',
    'cta.phoneSub': 'સવારે ૯ થી રાત્રે ૮, બધા દિવસ',
    'cta.callNow': 'હમણાં કૉલ કરો',
    'cta.whatsapp': 'વૉટ્સએપ',

    'footer.phoneLabel': 'ડૉક્ટર સાથે વાત કરો',
    'footer.brand.tag': 'આયુર્વેદિક ઉપચાર · ડૉ. પ્રવેશ સિંહ',
    'footer.col.visit': 'ક્લિનિક પર આવો',
    'footer.col.treatments': 'ઉપચાર',
    'footer.col.clinic': 'ક્લિનિક',
    'footer.col.connect': 'જોડાઓ',
    'footer.hoursLabel': 'સમય:',
    'footer.hoursValue': 'સવારે ૯ – રાત્રે ૮, બધા દિવસ',
    'footer.copy': '© ૨૦૨૬ ધ ઓલ્ડ વેદ. સર્વ હક અનામત.',

    'hero.eyebrow': 'અસલી આયુર્વેદ · વેદોના સમયથી',
    'hero.headline': 'પ્રાચીન <em>જ્ઞાન</em>, એવી ત્વચા માટે જે <em>પોતે જ સાજી થાય.</em>',
    'hero.lede': 'વૈદિક દવાઓ — દરેક દર્દી માટે અલગથી તૈયાર, છાજલીમાંથી નહીં. ડૉ. પ્રવેશ સિંહ દરેક કોઢ અને ગુપ્ત જાતીય આરોગ્ય કેસને વ્યક્તિગત રીતે જુએ છે અને ફક્ત તમારા માટે દવા બનાવે છે.',
    'hero.btnCall': 'ડૉ. પ્રવેશને હમણાં કૉલ કરો',
    'hero.btnWhatsapp': 'વૉટ્સએપ',
    'hero.trustYears': 'વર્ષોનો અનુભવ',
    'hero.trustPatients': 'દર્દીઓની સારવાર',
    'hero.trustFormulations': 'વૈદિક રેસિપી',
    'hero.visualCaption': '— મન અને શરીરનો ઉપચાર, જે રીતે આપણા પૂર્વજો કરતા હતા.'
  },

  mr: {
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याविषयी',
    'nav.vitiligo': 'पांढरे डाग उपचार',
    'nav.sexualHealth': 'लैंगिक आरोग्य',
    'nav.results': 'परिणाम',
    'nav.testimonials': 'रुग्णांचे मत',
    'nav.contact': 'संपर्क',
    'header.callDoctor': 'डॉ. प्रवेशला कॉल करा',
    'lang.choose': 'भाषा निवडा',

    'cta.eyebrow': 'थेट डॉक्टरांशी बोला',
    'cta.headline': 'तुमचा कॉलच आहे <em>पहिले औषध.</em>',
    'cta.lede': 'प्रत्येक रुग्ण वेगळा आहे. फोन उचला, तुमची गोष्ट सांगा, आणि डॉ. प्रवेशला ठरवू द्या तुमच्यासाठी काय योग्य आहे.',
    'cta.phoneSub': 'सकाळी ९ – रात्री ८, सर्व दिवस',
    'cta.callNow': 'आत्ता कॉल करा',
    'cta.whatsapp': 'व्हॉट्सऍप',

    'footer.phoneLabel': 'डॉक्टरांशी बोला',
    'footer.brand.tag': 'आयुर्वेदिक उपचार · डॉ. प्रवेश सिंह',
    'footer.col.visit': 'क्लिनिकला भेट द्या',
    'footer.col.treatments': 'उपचार',
    'footer.col.clinic': 'क्लिनिक',
    'footer.col.connect': 'संपर्क',
    'footer.hoursLabel': 'वेळ:',
    'footer.hoursValue': 'सकाळी ९ – रात्री ८, सर्व दिवस',
    'footer.copy': '© २०२६ द ओल्ड वेद. सर्व हक्क राखीव.',

    'hero.eyebrow': 'अस्सल आयुर्वेद · वेदांच्या काळापासून',
    'hero.headline': 'प्राचीन <em>ज्ञान</em>, अशा त्वचेसाठी जी <em>स्वतःच बरी होते.</em>',
    'hero.lede': 'वैदिक औषधे — प्रत्येक रुग्णासाठी वेगळी तयार केलेली, दुकानातून नाही. डॉ. प्रवेश सिंह प्रत्येक पांढरे डाग आणि गुप्त लैंगिक आरोग्य प्रकरण वैयक्तिकरित्या पाहतात आणि फक्त तुमच्यासाठी औषध बनवतात.',
    'hero.btnCall': 'डॉ. प्रवेशला आत्ता कॉल करा',
    'hero.btnWhatsapp': 'व्हॉट्सऍप',
    'hero.trustYears': 'वर्षांचा अनुभव',
    'hero.trustPatients': 'रुग्णांवर उपचार',
    'hero.trustFormulations': 'वैदिक औषधे',
    'hero.visualCaption': '— मन आणि शरीराचे उपचार, ज्या पद्धतीने आपले पूर्वज करत होते.'
  },

  ta: {
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.vitiligo': 'வெண்தோல் சிகிச்சை',
    'nav.sexualHealth': 'பாலியல் ஆரோக்கியம்',
    'nav.results': 'முடிவுகள்',
    'nav.testimonials': 'நோயாளிகளின் கருத்து',
    'nav.contact': 'தொடர்பு',
    'header.callDoctor': 'டாக்டர் பிரவேஷ்வை அழைக்கவும்',
    'lang.choose': 'மொழியைத் தேர்வு செய்க',

    'cta.eyebrow': 'நேரடியாக மருத்துவரிடம் பேசுங்கள்',
    'cta.headline': 'உங்கள் அழைப்புதான் <em>முதல் மருந்து.</em>',
    'cta.lede': 'ஒவ்வொரு நோயாளியும் வேறுபட்டவர். ஃபோன் எடுங்கள், உங்கள் கதையைப் பகிருங்கள், டாக்டர் பிரவேஷ் உங்களுக்கு என்ன சரியானது என்பதைத் தீர்மானிக்கட்டும்.',
    'cta.phoneSub': 'காலை 9 – இரவு 8, அனைத்து நாட்களும்',
    'cta.callNow': 'இப்போது அழைக்கவும்',
    'cta.whatsapp': 'வாட்ஸ்அப்',

    'footer.phoneLabel': 'மருத்துவரிடம் பேசுங்கள்',
    'footer.brand.tag': 'ஆயுர்வேத சிகிச்சை · டாக்டர் பிரவேஷ் சிங்',
    'footer.col.visit': 'கிளினிக்கிற்கு வாருங்கள்',
    'footer.col.treatments': 'சிகிச்சைகள்',
    'footer.col.clinic': 'கிளினிக்',
    'footer.col.connect': 'தொடர்பு',
    'footer.hoursLabel': 'நேரம்:',
    'footer.hoursValue': 'காலை 9 – இரவு 8, அனைத்து நாட்களும்',
    'footer.copy': '© 2026 தி ஓல்ட் வேதா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',

    'hero.eyebrow': 'உண்மையான ஆயுர்வேதம் · வேதங்களின் காலத்திலிருந்து',
    'hero.headline': 'பழமையான <em>ஞானம்</em>, தன்னைத்தானே <em>குணப்படுத்தும்</em> தோலுக்கு.',
    'hero.lede': 'வேத மருந்துகள் — ஒவ்வொரு நோயாளிக்கும் தனித்தனியாகத் தயாரிக்கப்படுபவை, அலமாரியிலிருந்து அல்ல. டாக்டர் பிரவேஷ் சிங் ஒவ்வொரு வெண்தோல் மற்றும் ரகசிய பாலியல் ஆரோக்கிய வழக்கையும் நேரடியாகப் பார்த்து உங்களுக்காக மட்டும் மருந்து தயாரிக்கிறார்.',
    'hero.btnCall': 'டாக்டர் பிரவேஷ்வை இப்போது அழைக்கவும்',
    'hero.btnWhatsapp': 'வாட்ஸ்அப்',
    'hero.trustYears': 'ஆண்டுகள் அனுபவம்',
    'hero.trustPatients': 'நோயாளிகளுக்கு சிகிச்சை',
    'hero.trustFormulations': 'வேத மருந்துகள்',
    'hero.visualCaption': '— உடல், மனம் — நம் முன்னோர்கள் செய்த அதே வழியில்.'
  },

  te: {
    'nav.home': 'హోమ్',
    'nav.about': 'మా గురించి',
    'nav.vitiligo': 'తెల్ల మచ్చల చికిత్స',
    'nav.sexualHealth': 'లైంగిక ఆరోగ్యం',
    'nav.results': 'ఫలితాలు',
    'nav.testimonials': 'రోగుల అభిప్రాయాలు',
    'nav.contact': 'సంప్రదించండి',
    'header.callDoctor': 'డా. ప్రవేష్కు కాల్ చేయండి',
    'lang.choose': 'భాష ఎంచుకోండి',

    'cta.eyebrow': 'నేరుగా డాక్టర్‌తో మాట్లాడండి',
    'cta.headline': 'మీ కాల్ ఈ <em>మొదటి మందు.</em>',
    'cta.lede': 'ప్రతి రోగి భిన్నంగా ఉంటారు. ఫోన్ తీసుకోండి, మీ కథను చెప్పండి, మీకు ఏది సరైనది అనేది డా. ప్రవేష్ నిర్ణయించనివ్వండి.',
    'cta.phoneSub': 'ఉదయం 9 – రాత్రి 8, అన్ని రోజులు',
    'cta.callNow': 'ఇప్పుడే కాల్ చేయండి',
    'cta.whatsapp': 'వాట్సాప్',

    'footer.phoneLabel': 'డాక్టర్‌తో మాట్లాడండి',
    'footer.brand.tag': 'ఆయుర్వేద చికిత్స · డా. ప్రవేష్ సింగ్',
    'footer.col.visit': 'క్లినిక్‌కి రండి',
    'footer.col.treatments': 'చికిత్సలు',
    'footer.col.clinic': 'క్లినిక్',
    'footer.col.connect': 'సంప్రదించండి',
    'footer.hoursLabel': 'సమయం:',
    'footer.hoursValue': 'ఉదయం 9 – రాత్రి 8, అన్ని రోజులు',
    'footer.copy': '© 2026 ది ఓల్డ్ వేద. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',

    'hero.eyebrow': 'అసలైన ఆయుర్వేదం · వేదాల కాలం నుండి',
    'hero.headline': 'ప్రాచీన <em>జ్ఞానం</em>, తనను తాను <em>నయం చేసుకునే</em> చర్మం కోసం.',
    'hero.lede': 'వేద ఔషధాలు — ప్రతి రోగికి విడిగా తయారు చేయబడినవి, షెల్ఫ్ నుండి కాదు. డా. ప్రవేష్ సింగ్ ప్రతి తెల్ల మచ్చల మరియు రహస్య లైంగిక ఆరోగ్య కేసును వ్యక్తిగతంగా పరిశీలించి మీ కోసం మాత్రమే మందులు తయారు చేస్తారు.',
    'hero.btnCall': 'డా. ప్రవేష్కు ఇప్పుడే కాల్ చేయండి',
    'hero.btnWhatsapp': 'వాట్సాప్',
    'hero.trustYears': 'సంవత్సరాల అనుభవం',
    'hero.trustPatients': 'రోగులకు చికిత్స',
    'hero.trustFormulations': 'వేద ఔషధాలు',
    'hero.visualCaption': '— శరీరం, మనస్సు — మన పూర్వీకులు చేసిన విధానంలోనే.'
  },

  pa: {
    'nav.home': 'ਹੋਮ',
    'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
    'nav.vitiligo': 'ਚਿੱਟੇ ਦਾਗ਼ ਦਾ ਇਲਾਜ',
    'nav.sexualHealth': 'ਜਿਨਸੀ ਸਿਹਤ',
    'nav.results': 'ਨਤੀਜੇ',
    'nav.testimonials': 'ਮਰੀਜ਼ਾਂ ਦੀ ਰਾਏ',
    'nav.contact': 'ਸੰਪਰਕ',
    'header.callDoctor': 'ਡਾ. ਪ੍ਰਵੇਸ਼ ਨੂੰ ਕਾਲ ਕਰੋ',
    'lang.choose': 'ਭਾਸ਼ਾ ਚੁਣੋ',

    'cta.eyebrow': 'ਸਿੱਧੇ ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ',
    'cta.headline': 'ਤੁਹਾਡੀ ਕਾਲ ਹੀ ਹੈ <em>ਪਹਿਲੀ ਦਵਾਈ।</em>',
    'cta.lede': 'ਹਰ ਮਰੀਜ਼ ਵੱਖਰਾ ਹੈ। ਫ਼ੋਨ ਚੁੱਕੋ, ਆਪਣੀ ਗੱਲ ਦੱਸੋ, ਅਤੇ ਡਾ. ਪ੍ਰਵੇਸ਼ ਨੂੰ ਫ਼ੈਸਲਾ ਕਰਨ ਦਿਓ ਕਿ ਤੁਹਾਡੇ ਲਈ ਕੀ ਠੀਕ ਹੈ।',
    'cta.phoneSub': 'ਸਵੇਰੇ 9 – ਰਾਤ 8, ਸਾਰੇ ਦਿਨ',
    'cta.callNow': 'ਹੁਣੇ ਕਾਲ ਕਰੋ',
    'cta.whatsapp': 'ਵਟਸਐਪ',

    'footer.phoneLabel': 'ਡਾਕਟਰ ਨਾਲ ਗੱਲ ਕਰੋ',
    'footer.brand.tag': 'ਆਯੁਰਵੈਦਿਕ ਇਲਾਜ · ਡਾ. ਪ੍ਰਵੇਸ਼ ਸਿੰਘ',
    'footer.col.visit': 'ਕਲੀਨਿਕ ਆਓ',
    'footer.col.treatments': 'ਇਲਾਜ',
    'footer.col.clinic': 'ਕਲੀਨਿਕ',
    'footer.col.connect': 'ਸੰਪਰਕ',
    'footer.hoursLabel': 'ਸਮਾਂ:',
    'footer.hoursValue': 'ਸਵੇਰੇ 9 – ਰਾਤ 8, ਸਾਰੇ ਦਿਨ',
    'footer.copy': '© 2026 ਦ ਓਲਡ ਵੇਦ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ।',

    'hero.eyebrow': 'ਅਸਲੀ ਆਯੁਰਵੇਦ · ਵੇਦਾਂ ਦੇ ਸਮੇਂ ਤੋਂ',
    'hero.headline': 'ਪ੍ਰਾਚੀਨ <em>ਗਿਆਨ</em>, ਅਜਿਹੀ ਚਮੜੀ ਲਈ ਜੋ <em>ਆਪਣੇ ਆਪ ਠੀਕ ਹੋਵੇ।</em>',
    'hero.lede': 'ਵੈਦਿਕ ਦਵਾਈਆਂ — ਹਰ ਮਰੀਜ਼ ਲਈ ਵੱਖ ਤੌਰ ਤੇ ਤਿਆਰ, ਦੁਕਾਨ ਤੋਂ ਨਹੀਂ। ਡਾ. ਪ੍ਰਵੇਸ਼ ਸਿੰਘ ਹਰ ਚਿੱਟੇ ਦਾਗ਼ ਅਤੇ ਗੁਪਤ ਜਿਨਸੀ ਸਿਹਤ ਮਾਮਲੇ ਨੂੰ ਨਿੱਜੀ ਤੌਰ ਤੇ ਦੇਖਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਲਈ ਦਵਾਈ ਬਣਾਉਂਦੇ ਹਨ।',
    'hero.btnCall': 'ਡਾ. ਪ੍ਰਵੇਸ਼ ਨੂੰ ਹੁਣੇ ਕਾਲ ਕਰੋ',
    'hero.btnWhatsapp': 'ਵਟਸਐਪ',
    'hero.trustYears': 'ਸਾਲਾਂ ਦਾ ਤਜਰਬਾ',
    'hero.trustPatients': 'ਮਰੀਜ਼ਾਂ ਦਾ ਇਲਾਜ',
    'hero.trustFormulations': 'ਵੈਦਿਕ ਨੁਸਖ਼ੇ',
    'hero.visualCaption': '— ਸਰੀਰ ਅਤੇ ਮਨ — ਜਿਵੇਂ ਸਾਡੇ ਪੁਰਖੇ ਕਰਦੇ ਸਨ।'
  }
};

const SUPPORTED = Object.keys(LANG_NAMES);

async function detectLanguage() {
  // 1. Saved preference
  const saved = localStorage.getItem('oldveda.lang');
  if (saved && SUPPORTED.includes(saved)) return saved;

  // 2. Browser language
  const browser = (navigator.language || '').toLowerCase();
  for (const code of SUPPORTED) {
    if (browser.startsWith(code)) return code;
  }

  // 3. IP geolocation (only for English browsers — likely default setting in India)
  if (browser.startsWith('en')) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 2000);
      const res = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
      clearTimeout(t);
      const data = await res.json();
      if (data && (data.country_code || data.country) === 'IN') {
        const region = (data.region || '').toLowerCase();
        for (const key in STATE_TO_LANG) {
          if (region.includes(key)) return STATE_TO_LANG[key];
        }
        return 'hi';
      }
    } catch (_) { /* ignore network/geo failures */ }
  }

  // 4. Default
  return 'en';
}

// Inverted English → key map for auto text-walking translation
let englishMap = null;
function getEnglishMap() {
  if (englishMap) return englishMap;
  englishMap = new Map();
  for (const key in TRANSLATIONS.en) {
    const val = TRANSLATIONS.en[key];
    // Skip strings with HTML — those need explicit data-i18n-html attrs
    if (!val.includes('<')) englishMap.set(val.trim(), key);
  }
  return englishMap;
}

// Walk all text nodes and translate any that match an English entry
function applyTextWalk(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const enMap = getEnglishMap();

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
      // Skip nodes inside elements that have explicit i18n attrs (handled separately)
      if (parent.closest('[data-i18n]') || parent.closest('[data-i18n-html]')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);

  nodes.forEach(node => {
    // Restore original if we changed it before, so re-translation works correctly
    if (node.__origText !== undefined) {
      node.nodeValue = node.__origText;
    }
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (!trimmed) return;
    const key = enMap.get(trimmed);
    if (key && dict[key] != null) {
      if (node.__origText === undefined) node.__origText = raw;
      const lead = raw.match(/^\s*/)[0];
      const trail = raw.match(/\s*$/)[0];
      node.nodeValue = lead + dict[key] + trail;
    }
  });
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = el.getAttribute('data-i18n-attr').split(',');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });

  // Auto-translate any plain English text that matches the dictionary
  applyTextWalk(lang);

  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-current-lang]').forEach(el => {
    el.textContent = (LANG_NAMES[lang] || {}).short || lang.toUpperCase();
  });
  document.querySelectorAll('.lang-menu button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function buildLangMenu() {
  document.querySelectorAll('.lang-menu').forEach(menu => {
    if (menu.children.length) return;
    SUPPORTED.forEach(code => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.lang = code;
      btn.textContent = LANG_NAMES[code].native;
      li.appendChild(btn);
      menu.appendChild(li);
    });
  });
}

function setupSwitcher() {
  buildLangMenu();

  document.querySelectorAll('.lang-switcher').forEach(sw => {
    const trigger = sw.querySelector('.lang-trigger');
    const menu = sw.querySelector('.lang-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = sw.classList.toggle('open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menu.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      const lang = btn.dataset.lang;
      localStorage.setItem('oldveda.lang', lang);
      applyTranslations(lang);
      sw.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.lang-switcher.open').forEach(sw => {
      if (!sw.contains(e.target)) {
        sw.classList.remove('open');
        const t = sw.querySelector('.lang-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

(async function initI18n() {
  setupSwitcher();
  // Apply browser/saved language synchronously first to avoid flash
  const saved = localStorage.getItem('oldveda.lang');
  const browser = (navigator.language || '').toLowerCase();
  let initial = 'en';
  if (saved && SUPPORTED.includes(saved)) initial = saved;
  else for (const code of SUPPORTED) if (browser.startsWith(code)) { initial = code; break; }
  applyTranslations(initial);

  // If we ended up at English but no saved choice, try geolocation in background
  if (!saved && initial === 'en') {
    const detected = await detectLanguage();
    if (detected !== 'en') applyTranslations(detected);
  }
})();
