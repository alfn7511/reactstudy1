/* 여기에 주어진 요구 사항을 충족 시키기 위한 코드를 작성 및 수정해 주세요. */
import './App.css';
import Table from './components/Table';
import { useState } from 'react';

function App() {
  const [SelectedValue, SetSelectedValue] = useState('1');
  const onSelect = (e) => {
    SetSelectedValue(e.target.value);
  };
  return (
    <div className="container">
      <div className="section __order">
        <select id="order_type" onChange={onSelect} value={SelectedValue}>
          <option value="1">최근등록순</option>
          <option value="2">조회순</option>
        </select>
      </div>
      <div className="section">
        <Table order={SelectedValue} />
      </div>
    </div>
  );
}

export default App;
