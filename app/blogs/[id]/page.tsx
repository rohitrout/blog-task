import "./page.scss";
import Image from "next/image";
import Link from "next/link";
const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // console.log("consoled", id);

  //fetching the content using the id
  const data = await fetch(
    `https://cdn.contentful.com/spaces/sy2gh0dh8klw/environments/master/entries/${id}?access_token=p9V5Iu1TFdw4NdvnL3bR2yiXMhzGM1KTjqCP-pSPNUk`
  );
  const res = await data.json();
  //getting the image id for the particular topic
  const ImageId = res?.fields?.image?.sys?.id;

  //fetching the image for the given imageid
  const imageData = await fetch(
    `https://cdn.contentful.com/spaces/sy2gh0dh8klw/environments/master/assets/${ImageId}?access_token=p9V5Iu1TFdw4NdvnL3bR2yiXMhzGM1KTjqCP-pSPNUk`
  );
  const response = await imageData.json();
  const targetAsset = response?.fields?.file?.url;

  return (
    <div className="blog-data">
      <Link href="/blogs">
        <button>Back</button>
      </Link>
      <div>
        <Image
          priority
          src={`https:${targetAsset}`}
          alt="image"
          height={300}
          width={600}
          // objectFit="contain"
        />
      </div>

      <p>{res?.fields?.body?.content[0]?.content[0]?.value}</p>
    </div>
  );
};

export default page;
