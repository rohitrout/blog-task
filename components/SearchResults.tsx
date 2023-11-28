import Link from "next/link";
import "./SearchResults.scss";
const SearchResults = ({ results, onLinkClick }: any) => {
  if (!results) return;
  return (
    <div className="result">
      <ul>
        {results.map((result: any) => (
          <li key={result.objectID}>
            <Link href={`/blogs/${result.objectID}`} onClick={onLinkClick}>
              {result?.fields?.title["en-US"]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
