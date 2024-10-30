/* 본 파일은 절대로 수정하지 않습니다. */
import './Table.css';
import Card from './Card';
import rowDatas from '../data/posts.json';
import { useState, useEffect } from 'react';
function Table({ order }) {
  const [items, setItems] = useState(rowDatas);
  useEffect(() => {
    console.log('useEffect', order);
    if (order === '1') {
      setItems((rowDatas) => [...rowDatas].sort((a, b) => new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime()));
    } else {
      setItems((rowDatas) => [...rowDatas].sort((a, b) => b.views - a.views));
    }
  }, [order]);
  const onBookmarkToggle = (id) => {
    console.log('onBookmarkToggle', id);
    setItems((rowDatas) => [...rowDatas].map((item, index) => (index === id ? { ...item, bookmark: !item.bookmark } : item)).sort((a, b) => b.bookmark - a.bookmark));
  };
  return (
    <ul>
      {items.map((item, index) => {
        return <Card item={item} index={index} key={index} onBookmarkToggle={onBookmarkToggle} />;
      })}
    </ul>
  );
}
export default Table;
