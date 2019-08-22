/*
  https://apnews.com/5adaacef468642c4930d1ad76ff09b69

  https://news.cgtn.com/news/3d3d774e3263544f33457a6333566d54/index.html
  https://news.cgtn.com/news/3d3d774e3263544f33457a6333566d54/index.html
  https://news.avclub.com/fec-declares-kid-rock-couldnt-have-run-for-senate-as-k-1830658934
  https://thehill.com/policy/technology/420838-google-ceo-responds-to-steve-king-concerns-about-granddaughters-iphone
  https://philadelphia.cbslocal.com/2018/11/28/payless-palessi-opens-fake-luxury-store-experiment-sells-customers-expensive-shoes-luxury-adweek-marketing/
  payless bankruptcy
  https://thehill.com/homenews/house/392756-poll-kim-jong-un-has-higher-approval-among-republicans-than-pelosi
*/
export const CATEGORIES = [
  'breaking',
  'world',
  'business'
];

const BREAKING = [
  {
    srcUrl: 'https://local.theonion.com/mom-on-vacation-marveling-at-time-difference-compared-t-1819579250',
    srcName: 'The Onion',
    timePublished: '0858',
    title: 'Mom On Vacation Marveling At Time Difference Compared To Home',
    bullets: [
      'Mom from Hartford visits California',
      'Mom marvels at time difference',
      'Time difference approximately 3 hours',
    ],
  },
  {
    srcUrl: 'https://www.theonion.com/snooze-button-time-traveler-sets-coordinates-for-5-minu-1819574939',
    srcName: 'The Onion',
    timePublished: '1105',
    title: 'Snooze Button Time Traveler Sets Coordinates For 5 Minutes Into The Future',
    bullets: [
      'Man sets alarm for 07:30',
      'Man presses snooze at 07:30 for five minutes',
      'Man awakens convinced time travel transpired',
      'Excessive illicit drug-use suspected ',
    ],
  },
  {
    srcUrl: 'https://www.theonion.com/rolex-unveils-new-diving-cuckoo-clock-capable-of-workin-1833810244',
    srcName: 'The Onion',
    timePublished: '1120',
    title: 'Rolex Unveils New Diving Cuckoo Clock Capable Of Working Up To 3,000 Meters Underwater',
    bullets: [
      'Traditional cuckoo clock accurate to depths of 3,000m',
      'Rolex reportedly collaborating with Apple to integrate new cuckoo technology for next Apple Watch',
    ],
  },
];

const BUSINESS = [
  {
    srcUrl: 'https://www.orlandosentinel.com/news/crime/os-ne-five-guys-fight-20190718-py2wtkmdo5e5zohhobzco7a5ce-story.html',
    srcName: 'Orlando Sentinel',
    timePublished: '1517',
    title: 'Five guys arrested after fist fight at Five Guys',
    excerpt: 'There were no reports of milkshakes bringing any boys to the yard, but a fracas at a Florida Five Guys did bring cops to the restaurant — and five guys were arrested'
  },  
  {
    srcUrl: 'https://www.cnbc.com/2019/04/23/tobacco-company-philip-morris-launches-life-insurance-company-reviti.html',
    srcName: 'CNBC',
    timePublished: '1249',
    title: 'Tobacco company Philip Morris starts life insurance firm that offers discounts to smokers who quit',
    bullets: [
      'Philip Morris International is launching an insurance company called Reviti',
      'Smokers will receive discounts if they quit or if they switch to an e-cigarette or heated tobacco device',
      'PMI is betting its future on iQOS, a heated tobacco product',
    ]
  },  
  {
    srcUrl: 'https://www.telegraph.co.uk/news/2019/01/13/family-forced-sit-plane-floor-airline-allocated-seats-didnt/',
    srcName: 'Telegraph',
    timePublished: '1754',
    title: "Family forced to sit on plane floor after airline allocated them seats which didn't exist",
  },  
  {
    srcUrl: 'https://www.cnn.com/2018/11/03/business/applebees-turnaround/index.html',
    srcName: 'CNN Business',
    timePublished: '1618',
    title: "Applebee's is betting on stress eaters, and it's paying off",
    excerpt: "Applebee's knows you're stressed, and it wants to make you feel better with cheap alcohol and lots of food",
  },  
  {
    srcUrl: 'https://www.smh.com.au/politics/federal/nestle-says-slavery-reporting-requirements-could-cost-customers-20180816-p4zy5l.html',
    srcName: 'SMH',
    timePublished: '0000',
    title: "Nestle says slavery reporting requirements could cost customers",
    excerpt: "One of the world's largest food and drink companies has warned proposed legislation requiring big business to report on their efforts to combat modern slavery could hit consumers' hip pockets",
  },  
  {
    srcUrl: 'https://katu.com/news/nation-world/after-eating-chipotle-for-500-days-an-ohio-man-says-hes-ready-for-something-new',
    srcName: 'KATU',
    timePublished: '0000',
    title: "After eating Chipotle for 500 days, an Ohio man says he's ready for something new",
    excerpt: "Bruce Wayne ended his streak Wednesday after grabbing a meal at the Tiffin Chipotle branch",
  },  
  {
    srcUrl: 'https://www.theguardian.com/world/2018/apr/11/argentinian-police-officers-dismissed-after-claiming-mice-ate-marijuana',
    srcName: 'The Guardian',
    timePublished: '1214',
    title: "Argentinian officers fired after claiming mice ate half a ton of missing marijuana",
    excerpt: "Eight police officers claimed mice ate the cannabis, but forensic experts explained that mice would not mistake the drug for food",
  },  
];

const WORLD = [
  {
    srcUrl: 'https://apnews.com/4986a008effe48eca446aeffb377630f',
    srcName: 'AP',
    timePublished: '0000',
    title: "German city offers $1.1M to whoever proves it doesn't exist",
  },  
  {
    srcUrl: 'https://www.cnn.com/2019/04/05/africa/zimbabwe-judges-wigs-gbr-intl-scli/index.html',
    srcName: 'CNN',
    timePublished: '0814',
    title: "Zimbabwe spent thousands of dollars on judges' wigs -- and people aren't happy",
    excerpt: "The Zimbabwe government has come under fire after it emerged that it spent thousands of dollars on importing legal wigs from the UK for local judges, with critics lambasting the purchase as a colonial hang-up and a waste of money",
  },  
  {
    srcUrl: 'https://www.reuters.com/article/us-china-parliament-xinjiang/china-says-xinjiang-has-boarding-schools-not-concentration-camps-idUSKBN1QT1E4',
    srcName: 'Reuters',
    timePublished: '0420',
    title: "China says Xinjiang has 'boarding schools', not 'concentration camps'",
    excerpt: "BEIJING (Reuters) - China is running boarding schools not concentration camps in the far western region of Xinjiang, its governor said on Tuesday, as the United States called conditions there 'completely unacceptable'",
  },  
  {
    srcUrl: 'https://www.bloomberg.com/news/articles/2017-10-30/french-butter-melts-away-from-shelves-as-global-demand-soars',
    srcName: 'Bloomberg',
    timePublished: '0905',
    title: "France Is Running Out of Butter for Its Croissants",
    bullets: [
      'Biggest per-capita butter consumer struggles with shortages',
      'As butter prices soar, producers are chasing better markets',
    ]
  },  
  {
    srcUrl: 'https://www.newsweek.com/russia-reinstates-yoga-prisoners-after-claims-it-can-make-inmates-gay-1388664',
    srcName: 'Newsweek',
    timePublished: '0827',
    title: "Yoga does not make inmates gay, says Russian prison chief as classes are reinstated",
  },  
  {
    srcUrl: 'https://www.telegraph.co.uk/news/2017/05/16/thailand-threatens-facebook-legal-action-videos-circulate-king/',
    srcName: 'Telegraph',
    timePublished: '1002',
    title: "Thailand threatens to sue Facebook after videos emerge of king in crop top wandering in German shopping centre",
    excerpt: "Thai authorities are demanding that Facebook remove embarrassing footage of their king in a shopping centre, wearing a crop top and sporting fake tattoos, in a test of the country’s strict censorship laws",
  },   
  {
    srcUrl: 'https://www.cbc.ca/radio/asithappens/iceland-s-president-admits-he-went-too-far-with-threat-to-ban-pineapple-pizza-1.4905000',
    srcName: 'CBC',
    timePublished: '1146',
    title: "Iceland's president admits he went 'too far' with threat to ban pineapple pizza",
    excerpt: "Gudni Johannesson reflects on 2017 topping scandal that divided the internet and drew a rebuke from Canada",
  },   
];

const POLITICS = [
  {
    srcUrl: 'https://www.cbsnews.com/news/house-passes-amendment-ordering-pentagon-to-investigate-whether-ticks-were-weaponized/',
    srcName: 'CBS',
    timePublished: '1257',
    title: "House passes amendment ordering Pentagon to review whether U.S. experimented with weaponizing ticks",
  },   
  {
    srcUrl: 'https://www.kmov.com/news/missouri-lawmaker-introduces-bill-that-would-require-ar--ownership/article_e02841c6-4735-11e9-9a7f-eb0c0ffb8b3c.html',
    srcName: 'KMOV',
    timePublished: '0000',
    title: "Missouri lawmaker introduces bill that would require AR-15 ownership",
  },   
  {
    srcUrl: 'https://thehill.com/homenews/house/392756-poll-kim-jong-un-has-higher-approval-among-republicans-than-pelosi',
    srcName: 'The Hill',
    timePublished: '1018',
    title: "Poll: Kim Jong Un has higher approval among Republicans than Pelosi",
    excerpt: "More Republicans view North Korean leader Kim Jong Un favorably than do House Minority Leader Nancy Pelosi (D-Calif.), according to a poll released Monday.",
  },   
];

const ARTICLES = {
  breaking: BREAKING,
  business: BUSINESS,
  world: WORLD,
  politics: POLITICS,
};

export default ARTICLES;