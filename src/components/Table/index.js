import React from 'react';
import './index.scss';
import Icon from '../Icon';

function Table({ data }) {
  return (
    <div className="table">
      <header>
        <div>我的檔案</div>
        <button>看更多</button>
      </header>
      <table>
        <tbody>
          <tr><th>名稱</th><th>上次修改</th><th>檔案大小</th><th>擁有者</th><th></th></tr>
          {data.map(el => (
            <tr>
              <td><Icon type={`file_${el.type}`} />{el.name}</td>
              <td>{el.date}</td>
              <td>{el.size}</td>
              <td>{el.owner}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
