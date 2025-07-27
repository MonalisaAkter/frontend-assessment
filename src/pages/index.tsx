import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { fetchProductData } from '../utils/api';
import { Data } from '@/types/product';
import { TitleSection } from '@/components/TitleSection';
import { DescriptionSection } from '@/components/DescriptionSection';
import { ChecklistSection } from '@/components/ChecklistSection';
import { SectionRenderer } from '@/components/SectionRenderer';
import { Trailer } from '@/components/Trailer';
import { CTASection } from '@/components/CTASection';

type HomeProps = {
  product: Data;
};

export default function Home({ product }: HomeProps) {
  const trailer = product.media.find((m) => m.type === 'youtube');

  return (
    <>
      <Head>
        <title>{product.seo.title}</title>
        <meta name="description" content={product.seo.description} />
        <meta name="keywords" content={product.seo.keywords.join(', ')} />
      </Head>

      <main className="p-6 max-w-5xl mx-auto">
        {trailer && <Trailer url={trailer.url} />}
        <TitleSection title={product.title} />
        <DescriptionSection html={product.description} />
        <ChecklistSection checklist={product.checklist} />
        <SectionRenderer sections={product.sections} type="features" title="Course Layout" />
        <SectionRenderer sections={product.sections} type="pointers" title="What You Will Learn" />
        <SectionRenderer sections={product.sections} type="about" title="Course Details" />
        <SectionRenderer sections={product.sections} type="instructor" title="Instructors" />
        <CTASection title={product.cta_text.title} url={product.cta_text.url} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = (context.query.lang === 'bn') ? 'bn' : 'en';
  const product = await fetchProductData(lang);
  return {
    props: {
      product,
    },
  };
};