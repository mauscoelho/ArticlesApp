import { compose, mapProps } from 'recompose';
import ArticleList from '../../components/ArticleList';

const articles = [
  {
    title: "Obama Offers Hopeful Vision While Noting Nation's Fears",
    website: 'MacStories',
    authors: 'Graham Spencer',
    date: '05/26/2014',
    image_url:
      'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_01_illh01.jpg',
  },
  {
    title:
      'Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third PartyÂ Apps',
    website: 'Masslive',
    authors: 'Fran Bellamy',
    date: '05/27/2014',
    image_url:
      'https://res.cloudinary.com/cheesecakelabs/image/upload/v1488993901/challenge/news_02_ulyqvw.jpg',
  },
];

const enhance = compose(
  mapProps(() => ({
    articles,
  })),
);

export default enhance(ArticleList);
