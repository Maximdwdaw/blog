import React, { useEffect, useState } from "react";
import { Post } from "../commponet/post";
import PostSkeleton from "../commponet/postskleton"; // Импортируем компонент скелетона



function Home() {
  const [d, setD] = useState([]);
  const [loading, setLoading] = useState(true); // Добавляем состояние для отслеживания загрузки
  const [vis, setvis] = useState(false);
  async function get(url) {                                              
    try {                                              
      const response = await fetch(url);                                               
      if (!response.ok) {                                              
        throw new Error(`Ошибка HTTP: ${response.status}`);                                              
      }                                              
      const data = await response.json();                                              
      return data;                                               
    } catch (error) {                                              
      console.error('Произошла ошибка:', error);                                               
      throw error;                                               
    }                                              
   } 
  
async function post(newData) {
  const response = await fetch("http://localhost:5000/push/post", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Новий обєкт створено");
  } else {
    console.error("Помилка при надсиланні даних:  ", response.status);
  }
}

   
  useEffect(() => {


get("http://localhost:5000/get/posts").then((posts)=>{
     setD(posts);
        setLoading(false); // Устанавливаем загрузку в false после получения данных
        if (posts.length === 0 )
         {
          setvis(true)
         }
})
   

  }, []);

  return (
 
    <div id="body">


      {loading ? (
        
        <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        
        </>
      ) : (
        
   
        d.map((data, index) => (
          <Post key={index} img={data.img} fulltext={data.fulltext} text={data.text} data={data.data} />
        ))
        
              )}

    <img onClick={()=>{window.location.href = 'adm'}} className="addpost" src="../img/add.png"/>
    <img onClick={()=>{window.location.href = 'settings'}} className="settings" src="../img/settings.png"/>
     
     {vis && <>
      <h1 className="plas">Нема постів :(</h1>
        </>}
    </div>
  );
}

export default Home;