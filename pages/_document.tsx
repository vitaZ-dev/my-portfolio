import Layout from '@/components/Layout';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>포트폴리오 | 프론트 개발자 황지현</title>
        <meta name="description" content="항상 최선을 다하는 개발자 황지현입니다" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Layout>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  );
}
