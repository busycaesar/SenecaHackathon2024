import { News, Category } from "../Schema/newsSchema";
import NewsData from "../JSONData/newsData.json";
import CategoryData from "../JSONData/newsCategoryData.json";

export const findNewsById = (newsId: Number): News | undefined =>
  NewsData.find((news: News) => news._id === newsId);

export const findNewsByCategoryId = (categoryId: Number): News[] =>
  NewsData.sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
  ).filter((news: News) => news.category === categoryId);

export const findLatestNews = (): News[] =>
  NewsData.sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
  );

export const findCategoryById = (categoryId: Number): Category | undefined =>
  CategoryData.find((category: Category) => category._id === categoryId);

export const AllCategories = (): Category[] | undefined => CategoryData;
