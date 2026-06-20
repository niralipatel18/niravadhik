// નિરવધિક — સાહિત્ય | સિનેમા | સંગીત
// Bilingual content store

export type Quote = {
  text: string;
  author: string;
  source?: string;
};

export type Sher = {
  text: string[];
  author: string;
};

export type Piece = {
  slug: string;
  title: string;
  titleEn?: string;
  author: string;
  kind: string;
  kindEn: string;
  excerpt: string;
  body: string[];
  year?: string;
  image: string;
};

export type MagazineIssue = {
  issue: number;
  title: string;
  titleEn?: string;
  date: string;
  dateEn: string;
  description?: string;
  pdf: string;
  cover?: string;
};

export type Event = {
  slug: string;
  title: string;
  titleEn?: string;
  kind: "screening" | "music" | "magazine";
  kindLabel: string;
  kindLabelEn: string;
  description: string;
  descriptionEn: string;
  year: string;
  accent: string;
  image: string;
};

export const tagline = "'કોઈ કલા સ્વરૂપે જગતથી જુદા બનો'";
export const taglineEn = "Become distinct from the world — through some form of art.";
export const place = "ગાંધીનગર";
export const placeEn = "Gandhinagar";

export const magazine = {
  name: "નિરવધિક સામયિક",
  nameEn: "Nirvadhik Magazine",
  frequency: "પ્રતિ પખવાડિયે",
  frequencyEn: "Every fortnight · twice a month",
  tagline: "સાહિત્ય · સિનેમા · સંગીત — ત્રણ ધારામાં, એક પ્રવાહ.",
  taglineEn: "Three arts, one current.",
};

export const magazineIssues: MagazineIssue[] = [
  { issue: 1,  title: "કલાનિધિ — અંક ૦૧", titleEn: "Kalanidhi Issue 01", date: "અંક ૦૧", dateEn: "Issue 01", pdf: "/pdf/કલાનિધિ - અંક ૦૧.pdf" },
  { issue: 2,  title: "કલાનિધિ — અંક ૦૨", titleEn: "Kalanidhi Issue 02", date: "અંક ૦૨", dateEn: "Issue 02", pdf: "/pdf/કલાનિધિ - અંક ૦૨.pdf" },
  { issue: 3,  title: "કલાનિધિ — અંક ૦૩", titleEn: "Kalanidhi Issue 03", date: "અંક ૦૩", dateEn: "Issue 03", pdf: "/pdf/કલાનિધિ - અંક ૦૩.pdf" },
  { issue: 4,  title: "કલાનિધિ — અંક ૦૪", titleEn: "Kalanidhi Issue 04", date: "અંક ૦૪", dateEn: "Issue 04", pdf: "/pdf/કલાનિધિ - અંક ૦૪.pdf" },
  { issue: 5,  title: "કલાનિધિ — અંક ૦૫", titleEn: "Kalanidhi Issue 05", date: "અંક ૦૫", dateEn: "Issue 05", pdf: "/pdf/કલાનિધિ - અંક ૦૫.pdf" },
  { issue: 6,  title: "કલાનિધિ — અંક ૦૬", titleEn: "Kalanidhi Issue 06", date: "અંક ૦૬", dateEn: "Issue 06", pdf: "/pdf/કલાનિધિ - અંક ૦૬.pdf" },
  { issue: 7,  title: "કલાનિધિ — અંક ૦૭", titleEn: "Kalanidhi Issue 07", date: "અંક ૦૭", dateEn: "Issue 07", pdf: "/pdf/કલાનિધિ - અંક ૦૭.pdf" },
  { issue: 8,  title: "કલાનિધિ — અંક ૦૮", titleEn: "Kalanidhi Issue 08", date: "અંક ૦૮", dateEn: "Issue 08", pdf: "/pdf/કલાનિધિ - અંક ૦૮.pdf" },
  { issue: 9,  title: "કલાનિધિ — અંક ૦૯", titleEn: "Kalanidhi Issue 09", date: "અંક ૦૯", dateEn: "Issue 09", pdf: "/pdf/કલાનિધિ - અંક ૦૯.pdf" },
];

export const quotes: Quote[] = [
  { text: "મને વાંધો નથી વ્હાલા હૃદયમાં ઘર કરી બેસો,\nતમારો દેશ છે આખો ભલેને સર કરી બેસો.", author: "અમૃત કેશવ નાયક" },
  { text: "આંખ, કાગળ, પુસ્તકો કે જિંદગી-\nવાંચવાની ટેવ હોવી જોઈએ.", author: "નેહા પુરોહિત" },
  { text: "શબ્દની પૂજા, વિચારોની તપસ્યા થાય છે\nઆ ગઝલના શેર ત્યારે કંકુવરણા થાય છે.", author: "કિરણ ચૌહાણ" },
  { text: "'મા' વિશે બસ, 'મા' લખી અટકી ગયો છું હું,\nક્યાં અધૂરો તો ય મેં નિબંધ રાખ્યો છે !!", author: "કિરીટ ગોસ્વામી" },
  { text: "જળ છું, બરફ છું, ભેજ છું, ઝાકળ છું, વાદળ છું, સતત મૃગજળ સુધી ભીનો જ છું,\nતરસ્યા વિનાના શહેરમાં જો તું મને શોધ્યા કરે તો હું તને ક્યાંથી મળું?", author: "જવાહર બક્ષી" },
  { text: "એ જ છે મારા પરિચયની કથા\nગાલગા ગાગાલગા ગાગાલગા", author: "મનહર મોદી" },
  { text: "કોઈને સંતાવા માટે એક ઘર છે તો 'મુકુલ'\nઆપણી પાસે ય હજ્જારો ગઝલના શેર છે.", author: "મુકુલ ચોકસી" },
  { text: "'શૈલ' કલમ લઈ બેઠા ત્યાં કાગળજી પૂછે\nશબ્દો લૈને આવ્યા છો કે ખાલી હાથે?", author: "શૈલ પાલનપુરી" },
  { text: "જ્યાં સુકાવા નાંખી એણે ઓઢણી\nલીમડાની ડાળ મીઠી થઈ ગઈ.", author: "અદમ ટંકારવી" },
  { text: "કેવી કલાથી યાદ કરે છે મને હવે\nલોકોના પત્ર રાખે છે મારી કિતાબમાં!", author: "અદી મિર્ઝા" },
  { text: "ખુદા તારી કસોટીની પ્રથા સારી નથી હોતી,\nકે સારા હોય છે એની દશા સારી નથી હોતી.", author: "'બેફામ'" },
  { text: "એ વાત છે અલગ કે તમે ચાહતા નથી,\nતૂટી શકે છે આમ તો કોઈ દીવાર પણ.", author: "મનહરલાલ ચોક્સી" },
  { text: "જગતના દુઃખથી ત્રાસ્યા હો તો રાખો દુઃખ મહોબ્બતનું,\nએ એવું દર્દ છે જે સર્વ દર્દોને મટાડે છે.", author: "બરકત વિરાણી 'બેફામ'" },
  { text: "મનમાં તો ભાવ, શબ્દ અને લયનો હણહણાટ,\nનક્કી ગઝ્લ લખાત, પણ દીવો થયો નહીં.", author: "ભગવતીકુમાર શર્મા" },
  { text: "ઘૂઘટ ખૂલ્યો હશે ને ઊઘડી હશે સવાર,\nઝુલ્ફો ઢળી હશે ને પછી રાત થઈ હશે.", author: "આદિલ મન્સૂરી" },
  { text: "અરે! એ 'દી હવાની પણ ના રાખી એણે મર્યાદા,\nદિવો પીધેલી હાલતમાં બધુ બોલી ગયો સાચું.", author: "વિરલ દેસાઈ" },
  { text: "તને તાકી રહું હું એવી રીતે કે-\nશરાબી જુવે છે સુરાને જે રીતે.", author: "વિરલ દેસાઈ" },
  { text: "જોઈને મોટાઓનાં આ સાવ હીણાં કરતૂતો !\nબાળકો મોટા થવાના ભયથી આજે થરથરે !", author: "'કાયમ' હજારી" },
  { text: "જે શોધવામાં જિંદગી આખી પસાર થાય\nને એ જ હોય પગની તળે એમ પણ બને", author: "મનોજ ખંડેરિયા" },
  { text: "ખિસ્સામાં કંઈ ન હોય તો વળજો ન એ તરફ\nલાખોના સોદા થાય છે માણેકચોકમાં.", author: "આદિલ મન્સૂરી" },
  { text: "હું એને રીઝવું એની જ મનગમતી અદાઓથી,\nમને પણ મારી રીતે એ મનાવે તો ફરી મળીએ!", author: "ખલીલ ધનતેજવી" },
  { text: "શબ્દો વિના ય લાગણી ભાષા બની શકે\nએકાદ લીલો છોડ મને મોકલાવ રે.", author: "કૈલાશ પંડિત" },
  { text: "છૂટા પડ્યાના દર્દને માણી રહ્યો છું હું\nરસ્તામાં હમણાં આવતાં જતાં મળીશ મા.", author: "કૈલાશ પંડિત" },
  { text: "હજી તો પાસ રહેનારા મને સમજી નથી શકતા,\nનથી જે સાથ મારા મારો ઝંઝાવાત શું જાણે.", author: "મરીઝ" },
  { text: "ફક્ત એક જ ટકો કાફી છે, પૂરતો છે મહોબતમાં,\nને નવ્વાણું ટકા બાકીના ખર્ચી નાખ હિંમતમાં.", author: "મરીઝ" },
  { text: "'મરીઝ' આ એક અનોખી વાત સાચા પ્રેમમાં જોઈ,\nકરો જુઠ્ઠી શિકાયત તો મજા આવે શિકાયતમાં.", author: "મરીઝ" },
  { text: "એકાદ હો તો એને છુપાવી શકું 'મરીઝ',\nઆ પ્રેમ છે ને એના પુરાવા હજાર છે.", author: "મરીઝ" },
  { text: "હું ગુલાબો વિશે વાત કરતો હતો,\nત્યારે મારી નજરમાં તમે પણ હતાં!", author: "ખલીલ" },
  { text: "આમ જો કહેવા હું બેસું તો યુગો વીતી જશે\nઆમ જો તું સાંભળે તો એક ક્ષણની વાત છે", author: "ભગવતીકુમાર શર્મા" },
  { text: "છે આજ મારા હાથમાં મહેંદી ભરેલ હાથ,\nમારો ય હાથ આજ તો સુંદર બની ગયો.", author: "આદિલ" },
  { text: "સાવ ઓચિંતુ સભા છોડી કોઈ ચાલી ગયું,\nકોઈના પૂરી શકે, એવી જગા ખાલી પડી.", author: "ખલીલ ધનતેજવી" },
  { text: "થોડાં જગતનાં આંસુઓ, થોડાં મરીઝનાં શેર,\nલાવ્યો છું જુદી પ્રાર્થના, સંભળાય છે ઈશ્વર?", author: "સૌમ્ય જોશી" },
  { text: "એક વાર હું ને મીરાં મથુરામાં ગ્યાં 'તાં,\nઘૂઘરીને ઘમકારે ઘેલાંઘેલાં થ્યાં 'તાં:", author: "ઈન્દુલાલ ગાંધી" },
  { text: "કબીર નરસિંહ મીરાં નામે ખળખળતી એક નદી આપની અંદર વ્હેતી મેં ભાળી છે\nસ્હેજ આપની પડખે બેસી હું ય જાત રળિયાત કરું તો તમને એમાં વાંધો છે કંઈ ?", author: "સંજુ વાળા" },
];

const IMG = {
  ink:        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=75",
  field:      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=75",
  ghazal:     "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&w=800&q=75",
  books:      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=75",
  manuscript: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=75",
  cinema1:    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=75",
  cinema2:    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=75",
  projector:  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=75",
  stage:      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=75",
  music1:     "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=75",
  music2:     "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=75",
  music3:     "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=75",
  tabla:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=75",
  rockstar:   "/movies/rockstar.jpg",
  romance:    "/movies/laila-majnu.jpg",
  river:      "/movies/reva.jpg",
  sufi:       "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=75",
  magazine:   "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=75",
};

export const sahitya: Piece[] = [
  {
    slug: "ek-sanjh", title: "એક સાંજ", titleEn: "One Evening",
    author: "અજ્ઞાત", kind: "અછાંદસ", kindEn: "Free Verse",
    excerpt: "સાંજ ઢળી અને શહેર પોતાના પડછાયા સંકેલવા લાગ્યું…",
    image: IMG.ink, year: "2024",
    body: [
      "સાંજ ઢળી",
      "અને શહેર પોતાના પડછાયા સંકેલવા લાગ્યું.",
      "દીવા થયા — પણ અંધારું ગયું નહીં,",
      "એ તો ખાલી જગ્યા બદલી ગયું.",
      "",
      "હું બારી પાસે બેઠો રહ્યો,",
      "શબ્દની રાહ જોતો —",
      "જે આવ્યો નહીં, ને છતાં",
      "આખી રાત સંગાથે રહ્યો.",
    ],
  },
  {
    slug: "matti", title: "માટી", titleEn: "Clay",
    author: "અજ્ઞાત", kind: "ગીત", kindEn: "Song-Poem",
    excerpt: "માટીમાંથી ઊગ્યો છું, માટીમાં ભળી જઈશ…",
    image: IMG.field, year: "2023",
    body: [
      "માટીમાંથી ઊગ્યો છું,",
      "માટીમાં ભળી જઈશ,",
      "વચ્ચેનો આ થોડો વખત —",
      "ફૂલ થઈને મહેકી લઈશ.",
    ],
  },
  {
    slug: "prashn", title: "પ્રશ્ન", titleEn: "The Question",
    author: "અજ્ઞાત", kind: "ગઝલ", kindEn: "Ghazal",
    excerpt: "દરેક ઉત્તર પાછળ એક નવો પ્રશ્ન ઊભો છે…",
    image: IMG.ghazal, year: "2024",
    body: [
      "દરેક ઉત્તર પાછળ એક નવો પ્રશ્ન ઊભો છે,",
      "આ રસ્તો જ્યાં પૂરો થાય, ત્યાં બીજો ઊભો છે.",
      "",
      "મેં માગ્યું હતું થોડું અજવાળું, ઓ ખુદા,",
      "તેં આખો સૂરજ આપ્યો — હવે છાંયો ક્યાં ઊભો છે?",
    ],
  },
  {
    slug: "aksha", title: "અક્ષ", titleEn: "The Axis",
    author: "અજ્ઞાત", kind: "અછાંદસ", kindEn: "Free Verse",
    excerpt: "દુનિયા ફરે છે — હું ઊભો છું. આ ફેર જ મારી કવિતા.",
    image: IMG.books, year: "2024",
    body: [
      "દુનિયા ફરે છે —",
      "હું ઊભો છું.",
      "આ ફેર જ મારી કવિતા.",
      "",
      "ટોળામાં એકલો,",
      "શબ્દોમાં ભીડ —",
      "છતાં, ક્યાંક કોઈ ભેગું.",
    ],
  },
  {
    slug: "varsha", title: "વર્ષા", titleEn: "Monsoon",
    author: "અજ્ઞાત", kind: "ગીત", kindEn: "Lyric",
    excerpt: "વર્ષા આવી, અને સૂકી ધરા ઊઘડી ગઈ…",
    image: IMG.manuscript, year: "2023",
    body: [
      "વર્ષા આવી,",
      "અને સૂકી ધરા ઊઘડી ગઈ —",
      "જેમ કોઈ ઊઘાડ ભૂલ્યું હ્રદય",
      "ઊઘડ ગઈ.",
      "",
      "ટીપું ટીપું ટહુકો,",
      "ઝાડ ઝૂલ્યાં, ઘર ભીનાં —",
      "ઘ્રાણ વધ્યો, ને",
      "ભૂલ્યેલા ઘર યાદ આવ્યા.",
    ],
  },
];

// Real film screenings held by Nirvadhik
export const cinema: Piece[] = [
  {
    slug: "rockstar-screening",
    title: "રૉકસ્ટાર — સ્ક્રીનિંગ",
    titleEn: "Rockstar — Screening",
    author: "નિરવધિક ચલચિત્ર",
    kind: "સ્ક્રીનિંગ",
    kindEn: "Screening",
    excerpt: "ઇમ્તિઆઝ અલીની આ ફિલ્મ માત્ર સ્ક્રીન પર નહિ — છાતીમાં ઊઘડે.",
    image: IMG.rockstar,
    year: "2024",
    body: [
      "Rockstar (2011) · Dir. Imtiaz Ali · Music: A.R. Rahman",
      "",
      "જૉર્ડન — એ નામ નથી, અવસ્થા છે.",
      "ઇમ્તિઆઝ અલીએ સિનેમા અને સંગીત વચ્ચેની ભ્રમરરેખા ભૂંસી.",
      "",
      "A.R. રહેમાનના સ્વરે 'નદ્દાન પરિઁદે' ગાયું ત્યારે",
      "ઓરડામાં ઊભેલા બધા ચૂપ થઈ ગયા.",
      "",
      "નિરવધિક ચલચિત્ર — ગાંધીનગર, ૨૦૨૪",
    ],
  },
  {
    slug: "laila-majnu-screening",
    title: "લૈલા મજ્નૂ — સ્ક્રીનિંગ",
    titleEn: "Laila Majnu — Screening",
    author: "નિરવધિક ચલચિત્ર",
    kind: "સ્ક્રીનિંગ",
    kindEn: "Screening",
    excerpt: "ઇશ્કની ભૂખ — એ ભૂખ ન ઓળઘોળ ન ઠારે, ઠારી ઠારી ઠારે.",
    image: IMG.romance,
    year: "2024",
    body: [
      "Laila Majnu (2018) · Dir. Sajid Ali",
      "",
      "સૈઁઇ-સૈઁઇ એ ફક્ત ગઝલ નથી — ચીસ છે.",
      "ઇશ્ક કઈ ઊંડાઈ સુધી ઊઘડી શકે,",
      "એ આ ફિલ્મ શિખવાડે છે.",
      "",
      "અવિનાશ તિવારી અને ત્રિપ્તિ ડિઁઇ —",
      "બે આત્માઓ, એક ઝૂરાપો.",
      "",
      "નિરવધિક ચલચિત્ર — ગાંધીનગર, ૨૦૨૪",
    ],
  },
  {
    slug: "reva-screening",
    title: "રેવા — સ્ક્રીનિંગ",
    titleEn: "Reva — Screening",
    author: "નિરવધિક ચલચિત્ર",
    kind: "સ્ક્રીનિંગ",
    kindEn: "Screening",
    excerpt: "નર્મદા ફક્ત નદી નથી — ગુજરાતની ઓળખ, આ ફિલ્મ તેની સાક્ષી.",
    image: IMG.river,
    year: "2024",
    body: [
      "Reva (2018) · Dir. Rahul Golani",
      "",
      "ગુજરાતી ચલચિત્ર — અને ગૌરવ.",
      "રેવા એ ફક્ત નદી નથી, માનવ અને ધરતીની ભેળસેળ છે.",
      "",
      "મનુ દેસાઈ · ભૂમિ ત્રિવેદી — ગુજરાતી સિનેમાના ઉત્કૃષ્ટ ચહેરા.",
      "",
      "Nirvadhik ના ઇતિહાસ ની પ્રથમ ગુજરાતી ફિલ્મ-સ્ક્રીનિંગ.",
      "નિરવધિક ચલચિત્ર — ગાંધીનગર, ૨૦૨૪",
    ],
  },
  {
    slug: "frame-ane-maun",
    title: "ફ્રેમ અને મૌન",
    titleEn: "Frame & Silence",
    author: "નિરવધિક ટિપ્પણ",
    kind: "નિબંધ",
    kindEn: "Essay",
    excerpt: "દૃશ્યમાં જે દેખાતું નથી, એ જ ઘણીવાર વાર્તા હોય છે.",
    image: IMG.projector,
    year: "2024",
    body: [
      "મૌન સિનેમાનું સૌથી શક્તિશાળી સાધન છે.",
      "આ લેખમાળામાં દૃશ્ય-ભાષાના વ્યાકરણની ચર્ચા થશે.",
    ],
  },
];

// Sangeet — real Sufi event + appreciation pieces
export const sangeet: Piece[] = [
  {
    slug: "sufi-swar-sandhya",
    title: "સૂફી સ્વર-સંધ્યા",
    titleEn: "Sufi Music Evening",
    author: "નિરવધિક સ્વર",
    kind: "સ્વર-સંધ્યા",
    kindEn: "Live Event",
    excerpt: "ઇશ્ક, ઈબાદત અને ઊર્મિ — સૂફી સ્વર-સંધ્યા, ગાંધીનગર.",
    image: IMG.sufi,
    year: "2024",
    body: [
      "સૂફી સ્વર-સંધ્યા — ૨૦૨૪, ગાંધીનગર",
      "",
      "ખ્વાજા, ફરીદ, બુલ્લેહ શાહ —",
      "અને ઉર્દૂ-ફારસી-ગુજરાતીનો ત્રિ-ભાષી ઊઘડ.",
      "",
      "Nirvadhik ની પ્રથમ live music event.",
      "ભજન, ક઼લ્સ, ક઼ૉઁઈ — ત્રણ ધારા, એક સ્વર.",
      "",
      "સ્ટેજ પર ઊઠ્યો સ્વર, ને ઓરડો ખોવાઈ ગયો —",
      "ફક્ત ભાવ રહ્યો.",
      "",
      "નિરવધિક, ગાંધીનગર.",
    ],
  },
  {
    slug: "raag-ne-ole",
    title: "રાગને ઓળે",
    titleEn: "In the Shade of a Raag",
    author: "નિરવધિક ટિપ્પણ",
    kind: "આસ્વાદ",
    kindEn: "Appreciation",
    excerpt: "સૂર શબ્દ વગર પણ આખી લાગણી પહોંચાડી શકે છે.",
    image: IMG.music1,
    year: "2024",
    body: [
      "સંગીત એ સમયની કળા છે.",
      "આ વિભાગ ગુજરાતી સુગમ સંગીત, લોકસંગીત અને શાસ્ત્રીય",
      "પરંપરાના આસ્વાદને સમર્પિત છે.",
    ],
  },
  {
    slug: "lok-dhun",
    title: "લોકધૂન",
    titleEn: "Folk Melody",
    author: "નિરવધિક ટિપ્પણ",
    kind: "નોંધ",
    kindEn: "Note",
    excerpt: "ગુજરાતની માટીમાંથી ઊઠતી ધૂનો, જે પેઢી દર પેઢી વહી છે.",
    image: IMG.music2,
    year: "2023",
    body: [
      "લોકસંગીત એ સામૂહિક સ્મૃતિ છે.",
      "ગરબા, રાસ, ભજન અને દુહા-છંદની ધારા અહીં નોંધાશે.",
    ],
  },
  {
    slug: "taal-ni-vaat",
    title: "તાલની વાત",
    titleEn: "Speaking of Rhythm",
    author: "નિરવધિક ટિપ્પણ",
    kind: "નોંધ",
    kindEn: "Note",
    excerpt: "તાલ: ધ્વનિ અને મૌનનો સૌથી ઊઘડ સંવાદ.",
    image: IMG.tabla,
    year: "2025",
    body: [
      "ત્રિતાલ, ઝૂમ્રા, ઢોલ, ખૂડ —",
      "ગુજરાતી તાલ-પ્રકારોની ઝલક.",
      "",
      "ટૂંક સમયમાં.",
    ],
  },
];

// Real achievements / initiatives
export const initiatives: Event[] = [
  {
    slug: "screening-rockstar",
    title: "Rockstar",
    titleEn: "Film Screening",
    kind: "screening",
    kindLabel: "ચલચિત્ર",
    kindLabelEn: "Screening",
    description: "ઇમ્તિઆઝ અલી, A.R. રહેમાન — કળા અને ઇશ્ક નો સ્ક્રીન-ઉત્સવ.",
    descriptionEn: "Imtiaz Ali's masterwork on art, longing and music. Our first screening.",
    year: "2024",
    accent: "indigo",
    image: IMG.rockstar,
  },
  {
    slug: "screening-laila-majnu",
    title: "Laila Majnu",
    titleEn: "Film Screening",
    kind: "screening",
    kindLabel: "ચલચિત્ર",
    kindLabelEn: "Screening",
    description: "સૈઁઇ-સૈઁઇ — ઇશ્ક ની ગઝલ, સ્ક્રીન પર.",
    descriptionEn: "A raw, modern retelling of the timeless Laila-Majnu love story.",
    year: "2024",
    accent: "magenta",
    image: IMG.romance,
  },
  {
    slug: "screening-reva",
    title: "Reva",
    titleEn: "Film Screening · Gujarati",
    kind: "screening",
    kindLabel: "ગુજ. ચલચિત્ર",
    kindLabelEn: "Gujarati Film",
    description: "નર્મદા — ગુજરાતી સિનેમાનો ગૌરવ-ક્ષણ.",
    descriptionEn: "Gujarati cinema at its finest. A story of the Narmada and the human soul.",
    year: "2024",
    accent: "teal",
    image: IMG.river,
  },
  {
    slug: "sufi-event",
    title: "સૂફી સ્વર-સંધ્યા",
    titleEn: "Sufi Music Evening",
    kind: "music",
    kindLabel: "સ્વર-સંધ્યા",
    kindLabelEn: "Live Music",
    description: "ઇશ્ક, ઈબાદત, ઊર્મિ — Nirvadhik ની પ્રથમ live music સ્વર-સંધ્યા.",
    descriptionEn: "Our first live music event — an evening of Sufi poetry, melody and devotion.",
    year: "2024",
    accent: "saffron",
    image: IMG.sufi,
  },
];

export const shers: Sher[] = [
  {
    text: ["મને વાંધો નથી વ્હાલા હૃદયમાં ઘર કરી બેસો,", "તમારો દેશ છે આખો ભલેને સર કરી બેસો."],
    author: "અમૃત કેશવ નાયક",
  },
  {
    text: ["આંખ, કાગળ, પુસ્તકો કે જિંદગી-", "વાંચવાની ટેવ હોવી જોઈએ."],
    author: "નેહા પુરોહિત",
  },
  {
    text: ["શબ્દની પૂજા, વિચારોની તપસ્યા થાય છે", "આ ગઝલના શેર ત્યારે કંકુવરણા થાય છે."],
    author: "કિરણ ચૌહાણ",
  },
  {
    text: ["'મા' વિશે બસ, 'મા' લખી અટકી ગયો છું હું,", "ક્યાં અધૂરો તો ય મેં નિબંધ રાખ્યો છે !!"],
    author: "કિરીટ ગોસ્વામી",
  },
  {
    text: ["જળ છું, બરફ છું, ભેજ છું, ઝાકળ છું, વાદળ છું, સતત મૃગજળ સુધી ભીનો જ છું,", "તરસ્યા વિનાના શહેરમાં જો તું મને શોધ્યા કરે તો હું તને ક્યાંથી મળું?"],
    author: "જવાહર બક્ષી",
  },
  {
    text: ["એ જ છે મારા પરિચયની કથા", "ગાલગા ગાગાલગા ગાગાલગા"],
    author: "મનહર મોદી",
  },
  {
    text: ["કોઈને સંતાવા માટે એક ઘર છે તો 'મુકુલ'", "આપણી પાસે ય હજ્જારો ગઝલના શેર છે."],
    author: "મુકુલ ચોકસી",
  },
  {
    text: ["'શૈલ' કલમ લઈ બેઠા ત્યાં કાગળજી પૂછે", "શબ્દો લૈને આવ્યા છો કે ખાલી હાથે?"],
    author: "શૈલ પાલનપુરી",
  },
  {
    text: ["જ્યાં સુકાવા નાંખી એણે ઓઢણી", "લીમડાની ડાળ મીઠી થઈ ગઈ."],
    author: "અદમ ટંકારવી",
  },
  {
    text: ["કેવી કલાથી યાદ કરે છે મને હવે", "લોકોના પત્ર રાખે છે મારી કિતાબમાં!"],
    author: "અદી મિર્ઝા",
  },
  {
    text: ["ખુદા તારી કસોટીની પ્રથા સારી નથી હોતી,", "કે સારા હોય છે એની દશા સારી નથી હોતી."],
    author: "'બેફામ'",
  },
  {
    text: ["એ વાત છે અલગ કે તમે ચાહતા નથી,", "તૂટી શકે છે આમ તો કોઈ દીવાર પણ."],
    author: "મનહરલાલ ચોક્સી",
  },
  {
    text: ["જગતના દુઃખથી ત્રાસ્યા હો તો રાખો દુઃખ મહોબ્બતનું,", "એ એવું દર્દ છે જે સર્વ દર્દોને મટાડે છે."],
    author: "બરકત વિરાણી 'બેફામ'",
  },
  {
    text: ["મનમાં તો ભાવ, શબ્દ અને લયનો હણહણાટ,", "નક્કી ગઝ્લ લખાત, પણ દીવો થયો નહીં."],
    author: "ભગવતીકુમાર શર્મા",
  },
  {
    text: ["ઘૂઘટ ખૂલ્યો હશે ને ઊઘડી હશે સવાર,", "ઝુલ્ફો ઢળી હશે ને પછી રાત થઈ હશે."],
    author: "આદિલ મન્સૂરી",
  },
  {
    text: ["અરે! એ 'દી હવાની પણ ના રાખી એણે મર્યાદા,", "દિવો પીધેલી હાલતમાં બધુ બોલી ગયો સાચું."],
    author: "વિરલ દેસાઈ",
  },
  {
    text: ["તને તાકી રહું હું એવી રીતે કે-", "શરાબી જુવે છે સુરાને જે રીતે."],
    author: "વિરલ દેસાઈ",
  },
  {
    text: ["જોઈને મોટાઓનાં આ સાવ હીણાં કરતૂતો !", "બાળકો મોટા થવાના ભયથી આજે થરથરે !"],
    author: "'કાયમ' હજારી",
  },
  {
    text: ["જે શોધવામાં જિંદગી આખી પસાર થાય", "ને એ જ હોય પગની તળે એમ પણ બને"],
    author: "મનોજ ખંડેરિયા",
  },
  {
    text: ["ખિસ્સામાં કંઈ ન હોય તો વળજો ન એ તરફ", "લાખોના સોદા થાય છે માણેકચોકમાં."],
    author: "આદિલ મન્સૂરી",
  },
  {
    text: ["હું એને રીઝવું એની જ મનગમતી અદાઓથી,", "મને પણ મારી રીતે એ મનાવે તો ફરી મળીએ!"],
    author: "ખલીલ ધનતેજવી",
  },
  {
    text: ["શબ્દો વિના ય લાગણી ભાષા બની શકે", "એકાદ લીલો છોડ મને મોકલાવ રે."],
    author: "કૈલાશ પંડિત",
  },
  {
    text: ["છૂટા પડ્યાના દર્દને માણી રહ્યો છું હું", "રસ્તામાં હમણાં આવતાં જતાં મળીશ મા."],
    author: "કૈલાશ પંડિત",
  },
  {
    text: ["હજી તો પાસ રહેનારા મને સમજી નથી શકતા,", "નથી જે સાથ મારા મારો ઝંઝાવાત શું જાણે."],
    author: "મરીઝ",
  },
  {
    text: ["ફક્ત એક જ ટકો કાફી છે, પૂરતો છે મહોબતમાં,", "ને નવ્વાણું ટકા બાકીના ખર્ચી નાખ હિંમતમાં."],
    author: "મરીઝ",
  },
  {
    text: ["'મરીઝ' આ એક અનોખી વાત સાચા પ્રેમમાં જોઈ,", "કરો જુઠ્ઠી શિકાયત તો મજા આવે શિકાયતમાં."],
    author: "મરીઝ",
  },
  {
    text: ["એકાદ હો તો એને છુપાવી શકું 'મરીઝ',", "આ પ્રેમ છે ને એના પુરાવા હજાર છે."],
    author: "મરીઝ",
  },
  {
    text: ["હું ગુલાબો વિશે વાત કરતો હતો,", "ત્યારે મારી નજરમાં તમે પણ હતાં!"],
    author: "ખલીલ",
  },
  {
    text: ["આમ જો કહેવા હું બેસું તો યુગો વીતી જશે", "આમ જો તું સાંભળે તો એક ક્ષણની વાત છે"],
    author: "ભગવતીકુમાર શર્મા",
  },
  {
    text: ["છે આજ મારા હાથમાં મહેંદી ભરેલ હાથ,", "મારો ય હાથ આજ તો સુંદર બની ગયો."],
    author: "આદિલ",
  },
  {
    text: ["સાવ ઓચિંતુ સભા છોડી કોઈ ચાલી ગયું,", "કોઈના પૂરી શકે, એવી જગા ખાલી પડી."],
    author: "ખલીલ ધનતેજવી",
  },
  {
    text: ["થોડાં જગતનાં આંસુઓ, થોડાં મરીઝનાં શેર,", "લાવ્યો છું જુદી પ્રાર્થના, સંભળાય છે ઈશ્વર?"],
    author: "સૌમ્ય જોશી",
  },
  {
    text: ["એક વાર હું ને મીરાં મથુરામાં ગ્યાં 'તાં,", "ઘૂઘરીને ઘમકારે ઘેલાંઘેલાં થ્યાં 'તાં:"],
    author: "ઈન્દુલાલ ગાંધી",
  },
  {
    text: ["કબીર નરસિંહ મીરાં નામે ખળખળતી એક નદી આપની અંદર વ્હેતી મેં ભાળી છે", "સ્હેજ આપની પડખે બેસી હું ય જાત રળિયાત કરું તો તમને એમાં વાંધો છે કંઈ ?"],
    author: "સંજુ વાળા",
  },
];

export const strands = [
  {
    key: "sahitya", label: "સાહિત્ય", latin: "Literature", href: "/sahitya",
    accent: "poppy",
    blurb: "કવિતા, ગઝલ, અછાંદસ અને ગદ્ય — શબ્દની સૃષ્ટિ.",
    blurbEn: "Poetry, ghazals, free verse and prose.",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=75",
    items: sahitya,
  },
  {
    key: "cinema", label: "સિનેમા", latin: "Cinema", href: "/cinema",
    accent: "indigo",
    blurb: "ત્રણ સ્ક્રીનિંગ — Rockstar, Laila Majnu, Reva — અને આગળ.",
    blurbEn: "Three screenings and counting — Rockstar, Laila Majnu, Reva.",
    cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=75",
    items: cinema,
  },
  {
    key: "sangeet", label: "સંગીત", latin: "Music", href: "/sangeet",
    accent: "teal",
    blurb: "સૂફી સ્વર-સંધ્યા સહિત — સૂર, રાગ, ભાવ.",
    blurbEn: "Featuring our Sufi Music Evening — melody, raag and devotion.",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=75",
    items: sangeet,
  },
] as const;

export function findPiece(list: Piece[], slug: string) {
  return list.find((p) => p.slug === slug);
}
