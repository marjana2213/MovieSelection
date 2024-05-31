//токены
//9J6XMTD-5TT4V6D-HB4ESD4-DBKST0D
//EXFH22N-Q4PMG5S-KWAYNJ8-7FDK6F7
//E0PEY4R-VPM48F7-J3VKVR2-XD0K3QF

import axios from "axios";

export const API_TOKEN="9J6XMTD-5TT4V6D-HB4ESD4-DBKST0D";

export function addMovie (limit) {
    const randomPage = Math.floor(Math.random() * 1000);
    const url = `https://api.kinopoisk.dev/v1.4/movie?page=${randomPage}&limit=${limit}&selectFields=id&selectFields=name&selectFields=description&selectFields=poster&notNullFields=poster.url&notNullFields=description`;
    return axios.get(url, {
      headers: {
        'X-API-KEY': API_TOKEN,
      },
    }).then((res) => {
      return res.data.docs;
    }).catch(err => {
      console.log("Ошибка: ", err);
      return [];
    });
  };