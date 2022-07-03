import Head from 'next/head';
import ComponentComponent from '../../components/component.component';
import { pages } from '../../content/de';
import { page } from '../../interfaces/page.interface';
import {landing} from "../../interfaces/components.interface";

// noinspection JSUnusedGlobalSymbols
export default function Page({ title, description, components }: { title: string; description: string; components: (landing)[] }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta http-equiv={'Content-Language'} content={'de'} />
        <meta name={'description'} content={description} />
      </Head>
      { components && components.map((component, index) => {
        return (
          <ComponentComponent key={index} component={component}/>
        );
      })}
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticPaths() {
  return {
    paths: pages.map((page: page) => {
      console.log(page);
      return {
        params: {
          route: page.route,
        },
      };
    }),
    fallback: false,
  };
}

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps({ params }: { params: { route: string } }) {
  const { route } = params;

  const page: page | undefined = pages.find((page) => page.route === route);

  if (!page) {
    return {
      props: {
        title: "Page not found",
        description: "Page not found",
        components: [],
      },
    };
  }

  return {
    props: {
      title: page.title,
      description: page.description,
      components: page.components
    },
  };
}