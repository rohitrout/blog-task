// Functions for interacting with Algolia
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "3ZZ2L2W82K",
  "676236a1118dedea7b093334f28b9c37"
);
const index = searchClient.initIndex("blogSearch");

export const searchAlgolia = async (query) => {
  try {
    const result = await index.search(query);
    return result.hits;
  } catch (error) {
    console.error("Algolia search error", error);
    return [];
  }
};
