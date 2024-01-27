// CorinthiansNews.jsx
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const CorinthiansNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = '7599543f92bd49a4a8860d85db3c1ce1';
    const apiQuery = "Sport Club Corinthians Paulista";
    const apiUrl = `https://newsapi.org/v2/everything?q=${apiQuery}&apiKey=${apiKey}`;

    const fetchCorinthiansNews = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          const sortedNews = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
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
          <div key={article.publishedAt} className={styles.newsItem}>
            <img src={article.urlToImage} alt={article.title} />
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
