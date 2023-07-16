// import { FavoritesButton } from '@/components/PostsComponents/PostItem/ActionButtons/FavoritesButton';
import { FavoritesButton } from "@/components/shared/FavoritesButton";
import styled from "@emotion/styled";

type CarPostFavProps = {
  isFav: boolean;
  title: string;
  onChange: (value: boolean) => void;
};

const CarPostFav = ({ isFav, title, onChange }: CarPostFavProps) => {
  return (
    <FavButton
      makePostMetaTitle={title}
      isInFavorites={isFav}
      disableWrapper={true}
      handleAddClick={() => onChange(true)}
      handleRemoveClick={() => onChange(false)}
    />
  );
};

const FavButton = styled(FavoritesButton)`
  background-color: transparent;
  box-shadow: none;
  &:hover {
    background-color: transparent;
    box-shadow: none;
  }
`;

export default CarPostFav;
