import { useEffect, useState } from "react";
import Api from "../../services/api";
import * as S from "./styles";

export default function Films() {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    const { status, data } = await Api.get("/films");

    if (status === 200) {
      setFilms([...films, ...data?.results]);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <S.Section>
      <S.Title>Star Wars Filmes</S.Title>
      <S.Films>
        {films?.map((film, index) => (
          <S.Item key={index}>
            <h4>{film.title}</h4>
            <span>Director: {film.director}</span>
            <span>Release: {film.release_date}</span>
          </S.Item>
        ))}
      </S.Films>
    </S.Section>
  );
}
