import SearchIcon from '@mui/icons-material/Search';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { appConfig } from ".";

export type FeaturesSectionInfo = {
  shortTitle: string;
  longTitle: string;
  srcIcon: JSX.Element;
  shortDescreption: string;
  longDescreption: string;
  link?: string;
};

export const featuresSectionInfo: FeaturesSectionInfo[] = [
  {
    shortTitle: "Find Cities",
    longTitle:
      "Explore Cities Worldwide with Precision and Personalized Search",
    srcIcon: <SearchIcon />,
    link: appConfig.links.findCities,
    shortDescreption:
      "Effortlessly search and find your perfect city based on your selected preferences. Explore religious, historical, nature cities, and more with Roamio.",
    longDescreption:
      "Roamio's 'Find Cities' feature empowers you to meticulously search and discover your ideal city. Tailor your journey by exploring a diverse range of destinations, from religious and historical hubs to serene natural wonders. Our intelligent platform ensures a personalized experience, allowing you to curate your travel adventure with ease. Whether you seek cultural immersion or scenic landscapes, Roamio guides you to the perfect destination.",
  },
  {
    shortTitle: "Blog",
    longTitle:
      "City Chronicles: Immerse Yourself in Intriguing Stories and In-Depth Articles",
    srcIcon: <NewspaperIcon />,
    shortDescreption:
      "Dive into captivating articles about cities, landmarks, and various topics with Roamio's blog feature.",
    longDescreption:
      "Roamio's 'Blog' feature invites you to embark on a journey through City Chronicles, where intriguing stories and in-depth articles about cities, landmarks, and diverse topics await. Immerse yourself in a world of exploration and discovery.",
    link: appConfig.links.blog,
  },
  {
    shortTitle: "City Reviews",
    longTitle:
      "City Insights: Contribute and Engage in a Vibrant Community of Travel Enthusiasts",
    srcIcon: <BorderColorIcon />,
    shortDescreption:
      "Explore and contribute to a community of opinions. Like, dislike, comment, and share your thoughts on cities and landmarks.",
    longDescreption:
      "Roamio's 'Review Cities' feature invites you to become a part of a dynamic community of travel enthusiasts. Share your experiences, opinions, and insights about cities and landmarks. Engage with fellow explorers by liking, disliking, commenting, and fostering a vibrant exchange of travel wisdom and stories.",
  },
  {
    shortTitle: "Save Cities",
    longTitle:
      "City Collections: Effortlessly Curate and Organize Your Unique Travel Experiences",
    srcIcon: <BookmarkIcon />,
    shortDescreption:
      "Effortlessly save and organize your favorite cities for easy access. Remove or revisit them at your convenience.",
    longDescreption:
      "Roamio's 'Save Cities' feature empowers you to curate and organize your unique travel experiences effortlessly. Save your favorite cities and landmarks for future reference, allowing you to revisit or remove them at your convenience. Build a collection that reflects your journey and preferences, making each exploration memorable and personalized.",
  },
];

