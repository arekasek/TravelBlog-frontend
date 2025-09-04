import RenderBlocks from "@/utils/RenderBlocks";
import React from "react";
import axios from "axios";

const Page = ({ page }) => {
  if (!page) {
    return <div>Error: Page not found</div>;
  }

  return (
    <>
      <RenderBlocks layout={page.layout} />
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const pageReq = await axios.get(
      "http://localhost:4000/api/pages?limit=100"
    );
    const pageData = pageReq.data;

    return {
      paths: pageData.docs.map(({ slug }) => ({
        params: { slug: slug !== "index" ? slug.split("/") : [] },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching static paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params?.slug ? ctx.params.slug.join("/") : "index";

  try {
    const pageReq = await axios.get(
      `http://localhost:4000/api/pages?where[slug][equals]=${slug}`
    );
    const pageData = pageReq.data.docs[0];

    if (!pageData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        page: pageData,
      },
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      notFound: true,
    };
  }
};

export default Page;
