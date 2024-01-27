
import Layout from '../components/layout';
import React from 'react';
import FetchLatestMdOne from '../components/fetchLatestMdOne';
import AuthorIntroduce from '../components/authorIntroduce';
import { Container, Row, Col } from 'react-bootstrap';


const IndexPage = () => {
  return (
    <Layout>
      {/* ヘッダー部分 */}
      <header className="text-white text-center px-5 pb-3">
        <div style={{ height: '2rem', backgroundColor: '#FFD400' }}></div>
      </header>

      {/* コンテンツとサイドバーのコンテナ */}
      <Container className="pb-5">
        <Row>
          {/* メインコンテンツ部分 */}
          <Col xs={12} md={8}>
            <div className="mb-3">
              {/* <div className="article-abstracts mb-4" style={{ borderBottom: '1px solid #555' }}>
                <em><h5 className="mb-4">category</h5></em>
                <h1>title</h1>
                <p className="mb-2 text-muted"> createdAt by author</p>
                <p>
                  introduction
                </p>
              </div> */}

           
              {/* <GatsbyImage
                image={scene1Img}
                alt="サイトのロゴ"
                style={{borderRadius: '1rem' }}
              /> */}

              <div className="article-contents" >

                <FetchLatestMdOne />
                {/* セクションと段落は1 */}
                {/* {renderRichText(mupContent)} */}
              </div>
            </div>
          </Col>


          {/* サイドバー */}
          <Col xs={12} md={4}>

            <AuthorIntroduce/>



          </Col>
        </Row>
      </Container>


    </Layout>
  );
}





export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>My name is Makana!!</title>
    </>
  );
 };

export default IndexPage;

