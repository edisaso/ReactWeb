import images from './images';

const wines = [
  {
    title: 'Chicken and rais',
    price: '$56',
    tags: 'Air fried | 1Kg',
  },
  {
    title: 'Bif and rais',
    price: '$59',
    tags: 'Broccoli 300 gr | 1Kg',
  },
  {
    title: 'Minced meat and rais',
    price: '$44',
    tags: 'Broccoli 300 gr | 750 gr',
  },
  {
    title: 'Block of cod',
    price: '$31',
    tags: 'CA | 750 gr',
  },
  {
    title: 'Cream of rais with eggs',
    price: '$26',
    tags: 'Cinnamon | 750gr',
  },
];

const cocktails = [
  {
    title: 'Pepsi Max',
    price: '$20',
    tags: 'Pepsi | 0 calories | soda | 2 l',
  },
  {
    title: "Julebrus",
    price: '$16',
    tags: 'Christmas soda | 2 l',
  },
  {
    title: 'CM shake',
    price: '$10',
    tags: 'Special ingredient from Connor Murphy | Citrus juice | Sugar',
  },
  {
    title: 'Creatine',
    price: '$31',
    tags: 'Become bald faster',
  },
  
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best streamer in Norway',
    subtitle: 'Mat Shartvig took first place.',
  },
  {
    imgUrl: images.award01,
    title: 'Baldest streamer',
    subtitle: 'Most baldest streamer on twitch.',
  },
  {
    imgUrl: images.award01,
    title: 'Arnold Sportsfestival UK',
    subtitle: ' Classic physique class 2021.',
  },
];

export default { wines, cocktails, awards };
