import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const CorinthiansNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchCorinthiansNews = async () => {
      try {
        const apiUrl = 'https://api.currentsapi.services/v1/search?keywords=corinthians&language=pt';
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('API Response:', data);

        if (data.news && data.news.length > 0) {
          const sortedNews = data.news.sort((a, b) => new Date(b.published) - new Date(a.published));
          setNews(sortedNews.slice(0, 5));
        } else {
          console.error('Nenhuma notícia encontrada.');
        }
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchCorinthiansNews();
  }, []);

  return (
    <div className={styles.corinthiansNewsContainer}>
      <div className={styles.newsList}>
        {news.map((article) => (
          <div key={article.published} className={styles.newsItem}>
            <img src={article.image} alt={article.title} />
            <div className={styles.newsDetails}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Ler mais
              </a>
              <p className={styles.source}>Fonte: {article.source.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorinthiansNews;
