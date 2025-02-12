/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import {
  GetHeadConfig,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateRenderProps,
} from "@yext/pages";
import SearchPage from "../components/SearchPage";
import PageLayout from "../components/page-layout";
import "../index.css";

export const config: TemplateConfig = {
  name: "search",
};

export const getPath = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Cook Children's | Search",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

export const verticals = [
  {
    name: "All",
    key: "all",
  },
  {
    name: "FAQS",
    key: "faq",
  },
  {
    name: "Products",
    key: "product",
  },
  {
    name: "Healthcare Professionals",
    key: "healthcare_professionals",
  },
  {
    name: "Services",
    key: "specialties",
  },
];

const Search: Template<TemplateRenderProps> = ({ document }) => {
  return (
    <>
      <PageLayout>
        <SearchPage></SearchPage>
      </PageLayout>
    </>
  );
};

export default Search;
