import Card from "components/Card";
import { useEffect, useState } from "react";
import { deleteFavorites, getFavorites } from "services/favorites";
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

  async function clickBook(key) {
    console.log('remover')
    console.log(key)
    await deleteFavorites(key)
    fetchFavorites()
  }


  return (
    <Section backgroundColor={'rgb(0, 47, 90)'} title={'Favoritos'} fontColor={'white'}>
      <FavoritesCardStyled>
        {favorites.length === 0 ? (
          <p>Lista vazia <br />:/ </p>
        ) : (
          favorites.map(favorite => (
            <Card
              title={favorite.name}
              key={favorite.id}
              imageUrl={favorite.src}
              clickBook={clickBook}
              id={favorite.id}
            />
          ))
        )}
      </FavoritesCardStyled>
    </Section>
  );
}
