import Page from "./page.js";
const api = "https://khkmdc-8080.csb.app/mindmap";

export async function generateMetadata({ params }, parent) {
  const { id } = params;
  const data = await fetch(`${api}/${id}`).then((res) => res.json());
  console.log(data);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title,
    description: data.desc,
    openGraph: {
      images: [data?.openGraph?.images[0], ...previousImages],
    },
  };
}

export default Page;
