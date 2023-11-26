import "./SearchResults.scss";
const SearchResults = ({ results }: any) => (
  <div className="result">
    <ul>
      {results.map((result: any) => (
        <li key={result.objectID}>{result.title}</li>
      ))}
    </ul>
  </div>
);

export default SearchResults;
