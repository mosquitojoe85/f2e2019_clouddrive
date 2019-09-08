import React from 'react';
import Icon from './components/Icon';
import Table from './components/Table';
import './app.scss';

const data = [
  { name: '走吧！一起用日語去旅行.mp4', date: '2019/6/10', size: '6.5MB', owner: 'Jennifer', type: 'mp4', },
  { name: '20191011-1020日本東京自由行.doc', date: '2019/6/10', size: '2.3MB', owner: 'Jennifer', type: 'doc', },
  { name: '東京都內案內手冊.pdf', date: '2019/7/5', size: '1.5MB', owner: 'Jennifer', type: 'pdf', },
  { name: '成田機場綠色窗口位置.png', date: '2019/8/10', size: '1.1MB', owner: 'Jennifer', type: 'mp4', },
  { name: '工作相關', date: '2019/8/30', size: '26MB', owner: 'Jennifer', type: 'folder', },
];

function App() {
  return (
    <div className="appWrapper">
      <div className="app">
        <nav className="navBar">
          <div>
            <h1>MCloud.</h1>
            <button><Icon type="upload" />上傳檔案</button>
            <div className="linkItem"><Icon type="folder" />我的檔案</div>
            <div className="linkItem"><Icon type="star" />已加星號</div>
            <div className="linkItem"><Icon type="share" />檔案共享</div>
            <div className="linkItem"><Icon type="garbage" />垃圾桶</div>
          </div>
          <div>
            <h2>Jennifer</h2>
            <div className="role">User</div>
            <div className="contentBar"></div>
            <div className="contentText">容量：1.2 GB / 10 GB</div>
          </div>
        </nav>
        <main className="mainBlock">
          <div className="searchBlock">
            <div className="search"></div>
          </div>
          <Table data={data} />
        </main>
      </div>
    </div>
  );
}

export default App;
