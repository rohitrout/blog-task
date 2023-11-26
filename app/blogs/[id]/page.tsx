import "./page.scss";
import Link from "next/link";
const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // console.log("consoled", id);

  const data = await fetch(
    `https://cdn.contentful.com/spaces/sy2gh0dh8klw/environments/master/entries/${id}?access_token=p9V5Iu1TFdw4NdvnL3bR2yiXMhzGM1KTjqCP-pSPNUk`
  );
  const res = await data.json();
  // console.log(res);

  return (
    <div className="blog-data">
      <Link href="/blogs">
        <button>Back</button>
      </Link>

      <p>{res?.fields?.body?.content[0]?.content[0]?.value}</p>
    </div>
  );
};

export default page;
