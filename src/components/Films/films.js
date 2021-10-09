import { useEffect } from "react";
import Api from "../../services/api";

export default function Films() {
  const getFilms = async () => {
    const { status, data } = await Api.get("/films");

    if (status === 200) {
      console.log(`response`, data?.results);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return <div></div>;
}
