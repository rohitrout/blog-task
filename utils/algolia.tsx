// const algoliasearch = require("algoliasearch");
// const contentful = require("contentful");

// // Algolia configuration
// const algoliaClient = algoliasearch(
//   "3ZZ2L2W82K",
//   "676236a1118dedea7b093334f28b9c37"
// );
// const algoliaIndex = algoliaClient.initIndex("blogSearch");

// // Contentful configuration
// const contentfulClient = contentful.createClient({
//   space: "YOUR_CONTENTFUL_SPACE_ID",
//   accessToken: "YOUR_CONTENTFUL_ACCESS_TOKEN",
// });

// // Fetch data from Contentful
// const fetchDataFromContentful = async () => {
//   try {
//     const entries = await contentfulClient.getEntries({
//       content_type: "your_content_type",
//       // Add any other query parameters as needed
//     });
//     return entries.items;
//   } catch (error) {
//     console.error("Error fetching data from Contentful", error);
//     return [];
//   }
// };

// const transformDataForAlgolia = (contentfulData: any) => {
//   return contentfulData.map((item: any) => ({
//     objectID: item.sys.id,
//     title: item.fields.title,
//   }));
// };

// const pushDataToAlgolia = async () => {
//   const contentfulData = await fetchDataFromContentful();
//   const transformedData = transformDataForAlgolia(contentfulData);

//   try {
//     await algoliaIndex.clearObjects();

//     const result = await algoliaIndex.saveObjects(transformedData);
//     console.log("Data pushed to Algolia:", result);
//   } catch (error) {
//     console.error("Error pushing data to Algolia", error);
//   }
// };

// pushDataToAlgolia();
