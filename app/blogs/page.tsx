import "./page.scss";
import Link from "next/link";

const page = async () => {
  const data = await fetch(
    "https://cdn.contentful.com:443/spaces/sy2gh0dh8klw/environments/master/entries?access_token=p9V5Iu1TFdw4NdvnL3bR2yiXMhzGM1KTjqCP-pSPNUk"
  );
  const res = await data.json();

  return (
    <div className="blog">
      <h1 style={{ color: "purple" }}>Topics</h1>
      {res.items.map((item: any) => (
        <div key={item.sys.id}>
          <Link href={`/blogs/${item.sys.id}`}>
            <h1>{item.fields.title}</h1>
          </Link>

          {/* <p>{item.fields.body?.content[0]?.content[0]?.value}</p> */}
        </div>
      ))}
    </div>
  );
};

export default page;
