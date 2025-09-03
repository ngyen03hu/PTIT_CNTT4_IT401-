import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    const [title, setTitle] = useState('');
    useEffect(() => {
        document.title = title;
    })
  return (
    <div>
          <h1>bai tap 4</h1>
          <div> chao mung den voi trang wweb </div>
          <input type="text " placeholder='Nhap ten ban vao' />
    </div>
  )
}
