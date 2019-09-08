import React from 'react';
import './index.scss';
import upload from '../../assets/upload.svg';
import folder from '../../assets/folder.svg';
import star from '../../assets/star.svg';
import garbage from '../../assets/garbage.svg';
import share from '../../assets/share.svg';

import file_doc from '../../assets/fileIcon/doc.svg';
import file_folder from '../../assets/fileIcon/folder.svg';
import file_img from '../../assets/fileIcon/img.svg';
import file_mp4 from '../../assets/fileIcon/mp4.svg';
import file_pdf from '../../assets/fileIcon/pdf.svg';

const imgs = {
  upload, folder, star, garbage, share,
  file_doc, file_folder, file_img, file_mp4, file_pdf,
};

function Icon({ type = 'upload', style = {} }) {
  return (
    <div className="icon" style={style}><img src={imgs[type]} /></div>
  );
}

export default Icon;
