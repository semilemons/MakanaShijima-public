import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../../components/layout';

import './index.scss';

const ArticlePage = ({ data }) => {
  const contentful_article = data.contentfulArticle || null;

    const title = contentful_article ? contentful_article.articleTitle : '';
    const category = contentful_article ? contentful_article.category : '';
    const authorGithub = contentful_article ? contentful_article.authorGithubLink : '';
    const author = contentful_article ? contentful_article.author : '';


    const introduction = contentful_article ? contentful_article.articleIntroduction : '';
    const mupContent = contentful_article ? contentful_article.articleContentsMd : '';

    
    const scene1Img = contentful_article ?  getImage(contentful_article.scene1Image.gatsbyImageData) : '';


    const createdAt = contentful_article ? contentful_article.createdAt : '';

    
  console.log(data)

  return (
    <Layout>
      {/* ヘッダー部分 */}
      <header className="text-white text-center px-5 pb-3">
        <GatsbyImage
          image={scene1Img}
          alt="サイトのロゴ"
          style={{ height: '5rem' }}
        />
      </header>

      {/* コンテンツとサイドバーのコンテナ */}
      <Container className="pb-5">
        <Row>
          {/* メインコンテンツ部分 */}
          <Col xs={12} md={8}>
            <div className="mb-3">
              <div className="article-abstracts mb-4" style={{ borderBottom: '1px solid #555' }}>
                <em><h5 className="mb-4">{category}</h5></em>
                <h1>{title}</h1>
                <p className="mb-2 text-muted">{ createdAt } by {author}</p>
                <p>
                  {introduction}
                </p>
              </div>

           
              <GatsbyImage
                image={scene1Img}
                alt="サイトのロゴ"
                style={{borderRadius: '1rem' }}
              />

              <div className="article-contents" >
                {/* セクションと段落は1 */}
                {renderRichText(mupContent)}
              </div>
            </div>
          </Col>


          {/* サイドバー */}
          <Col xs={12} md={4}>
            <Card className='mb-3'>

              <Card.Body>
                <Card.Title className='mb-3'><em>筆者</em></Card.Title>

                <div className='mb-3' style={{ display: 'flex', justifyContent: 'center' }}>
                  <StaticImage
                    src="../../images/MakanaShijima.png"
                    alt="サイトのロゴ"
                    style={{ width: '67%', borderRadius: '2rem' }}
                  />
                </div>
                <p>
                  <em>四島摩訶那です！ある方のアシスタントをとして活動していて、この記事の執筆活動を任されています。</em>

                  <a href={authorGithub} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
                    <em>Github</em>
                  </a>

                </p>

              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>

      {/* フッター部分 */}
      <footer className="bg-dark text-white text-center p-3">
        <p>© {new Date().getFullYear()} 四島摩訶那. All rights reserved.</p>
      </footer>
    </Layout>
  );
}


export const query = graphql`
  query fetchArticle ($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      slug
      articleTitle
      category
      authorGithubLink
      author
      createdAt(formatString: "dddd, MMMM Do, YYYY", locale: "ja")
      articleIntroduction
      articleContentsMd {
        raw
      }
      scene1Image {
        gatsbyImageData
      }
    }
  }
`;


// export const query = graphql`
//   query fetchArticles {
//     allContentfulArticle(sort: {createdAt: DESC}) {
//       edges {
//         node {
//           slug
//           articleTitle
//           category
//           authorGithubLink
//           author
//           createdAt(formatString: "dddd, MMMM Do, YYYY", locale: "ja")
//           articleIntroduction
//           articleContentsMd {
//             raw
//           }
//           scene1Image {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;


export const Head = ({ data }) => {

  const title = data.contentfulArticle.articleTitle || 'title';

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </>
  );
 };

export default ArticlePage;

