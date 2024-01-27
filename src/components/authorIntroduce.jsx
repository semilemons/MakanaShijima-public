import React from 'react';
import { Card } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

const AuthorIntroduce = () => (
  <Card className='mb-3'>
    <Card.Body>
    <Card.Title className='mb-3'><em>筆者</em></Card.Title>
    <div className='mb-3' style={{ display: 'flex', justifyContent: 'center' }}>
      <StaticImage
        src="../images/MakanaShijima.png"
        alt="サイトのロゴ"
        style={{ width: '67%', borderRadius: '2rem' }}
      />
    </div>
    <p>
      <em>四島摩訶那です！ある方のアシスタントをとして活動していて、この記事の執筆活動を任されています。</em>
      <a href='https://github.com/semilemons/ShijimaMakana-Publish' target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
        <em>Github</em>
      </a>
    </p>
  </Card.Body>
</Card>
)

export default AuthorIntroduce;