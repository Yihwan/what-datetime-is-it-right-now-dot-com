import React from 'react';

import { MarqueeContainer } from './style';

const MARQUEE_SNIPPETS = [
  'Bring Back the Marquee Tag, Disgruntled Nerds Demand', 
  'Your Daily Updates Brought to You by Bojack and SimCity', 
  'Man Bites Dog, Dog Sues Man',
  'Lab Rat Union Files Class Action Lawsuit Against Scientists',
  'French Kissing Leads To Higher Croissant Use, Authorities Warn',
  'Police Find That Mandatory Bodycams Are Great for Taking Selfies',
  'Phonebooks Print All Wrong Numbers; Results In 15 New Marriages',
  'New Yorker Goes to Italy, Complains About Pizza',
  'Polar Ice Caps So Hot Right Now',
  'Esoteric Verbosity Culminates In Communicative Ennui, Teachers Note',
  '99% Agree: A Sound Financial Future Begins With Inheriting Lots Of Money',
  'After 36 Years Of Marriage, Man Discovers Wife Is Actually A Rare Yucca Plant',
  "Doughnuts: Is There Anything They Can't Do?",
  "“Speak English!” Yells Patriot at Soy Milk",
  "Semicolon Declared Sexier Than Comma At Grammarian's Fete",
  'Timmy Falls Down Well, Climbing Needs Work',
  'Daily Special At Restaurant Found To Be Big Fat Lie',
  'Cure For Senility Found, But Lost Before Being Recorded',
  'Eyes Move While Reading Tickers, Scientists Speculate',
  'Public Service Message: Pooper Scoopers Urged When Walking Dogs',
  'Shopping After Hours Source Of Purchase Embarrassment Says Survey',
  "Studies Show Most Mispronounce 'Zsdersw'",
  'Person Writing News Ticker Headlines Wasting Life, Sources Say',
  'I Wanted to Write Novels, You Know',
  'Rumor Of Kitty Kibble Shortage Causes Futures To Drop; Consumers Stockpile',
  "Local Merchants Puzzled By Rumors Of Kitty Kibble Shortage; 'We Have Plenty,' Say Most",
  'Kitties Concerned By Rumors Of Kitty Kibble Shortage; Owners In Panic',
  'No Kitty Kibble Shortage Says Local Representative Of Kitty Kibble Association',
  'Is Kitty Kibble Shortage Real? Authorities Say Rumors Unfounded',
  'Unlicensed Kitty Kibble Factory Fuels Rumors Of Shortage',
  'Enough Kitty Kibble For Twenty Years, Experts Agree',
  'Kitty Kibble Association Flooded With Letters: Where Is Kitty Kibble?',
  'Rumors Persist In Kitty Kibble Shortage; Unfounded Say Many',
  'Kitties Want Answers In Possible Kitty Kibble Shortage, Say Not Enough Being Done',
  'No Kitty Kibble Shortage, Officials Insist; Kitties Skeptical',
  'Bloated Corpse Found in White House Discovered to Actually be Bloated Alive Person',
  'Gravy Tastes Better When Loudly Slurped; Scientists Baffled',
  'Study Shows News Ticker Headlines to be More Distracting than Informative',
  'Traveling Truck Technician Talks Transmissions Tuesday',
  'Spotted Owl Spotted',
  'Monkey Sees, Monkey Does',
  'All Raccoons Cheat At Poker, Animal Researchers Say',
  'Ancient Meteorite Revealed To Be Burnt Burger',
  'Lying Found To Be Effective Calorie Reducer',
  'Congress Reforms Exploitative Prison Labor Laws',
  'Correction: Congress Re-Forms Exploitative Prison Labor Laws',
  'I Was Framed, Jokes Local Artist',
  'Lobster Mobster Caught Red-Handed',
  'Skinny Celebrity Orders French Fries in Interview with GQ',
  'Pigeon Alert! Extreme Pigeon Danger!',
  "“A Rising Sea Lifts All Boats”, Claims Oil Lobbyist at Climate Change Summit",
  'Pistol Packing Punks Pilfer Precious Petunias',
  'Public Displays Of Affection Common Sight Near City Hall',
  'This Space For Rent',
  'Weather Likely To Become Different Before Changing',
  'Local Area Man Watches Entire Ticker Tape; Has Nothing Better to Do',
];

const NewsMarquee = () => (
  /* eslint-disable-next-line */
  <MarqueeContainer>
    <marquee scrolldelay="60" scrollamount="3">{MARQUEE_SNIPPETS.join('\xa0\xa0\xa0')}</marquee>
  </MarqueeContainer>
);

export default NewsMarquee;