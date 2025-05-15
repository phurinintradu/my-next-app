"use client";
import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import MovieCard from "@/components/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useEffectPage() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
      })
      .catch(() => {
        alert("เกิดข้อผิดพลาดในการดึงข้อมูล");
      });
  }, []);
  console.log(movieList);
  return (
    <div>
      <MenuBar page={"เรียนรู้ useEffect"} />
      <div className="justify-items-center p-4">
      {movieList.map(
        (
          item: {
            poster_path?: string;
            title?: string;
            name?: string;
            overview?: string;

        },
      index) => (
        <div className="bg-pink-50 w-xl">
          <div className="justify-items-center">
            <MovieCard src={item.poster_path} />
            <div className="text-center">
              <h1>{item.title}</h1>
              <h1>{item.name}</h1>
              <h1>{item.overview}</h1>
            </div>
          </div>
        </div>
      )
       
        )}
      </div>
      
      <Footer />
    </div>
  );
}