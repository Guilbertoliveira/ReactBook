import Card from "components/Card";
import { useEffect, useState } from "react";
import { getFavorites } from "services/favorites";
import { FavoritesCardStyled } from "./styles";
import Section from "components/Section";


export default function Favorite() {
  const [favorites, setFavorites] = useState([])


  useEffect(() => {
    fetchFavorites()
  }, [])

  async function fetchFavorites() {
    const responseFav = await getFavorites()
    setFavorites(responseFav)
  }



  return (
    <Section backgroundColor={'rgb(0, 47, 90)'} title={'Favoritos'} fontColor={'white'}>
      <FavoritesCardStyled>
        {favorites.map(favorite => {
          return <Card title={favorite.name} key={favorite.id} imageUrl={favorite.src} />
        })}
      </FavoritesCardStyled>
    </Section>
  );
}
