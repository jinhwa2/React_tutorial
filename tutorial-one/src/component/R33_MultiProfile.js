import React,{useState} from "react";

const handleImageChange = (event) => {
  const files = event.target.files;
  const imageArray = [];
  for(files.lenght) {
    const file = file[i];
    const reader = new FileReader();
    reader.onloadend = () => {
      imageArray.push(reader.result);
      if(만약에 선택한 이미지 배열 길이와 파일 배열 길이가 같다면) {
        setselectedImages(이미지 배열);
      }
    };
    reader.readAsArrayBuffer(file);
  }
};

ex