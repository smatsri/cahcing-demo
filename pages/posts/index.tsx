import AppThemeProvider from "@/app/AppThemeProvider";
import { MessagesProvider } from "@/components/shared/MessagesProvider";
import { CacheProvider } from "@emotion/react";
import { cache as emotionCache } from "@/lib/emotion";
import { loadData } from "@/lib/carposts";
import CarPostWrapper from "@/components/CarPostWrapper";
import styled from "@emotion/styled";

type Props = {
  keys: string[];
};

const Posts = ({ keys }: Props) => {
  return (
    <AppThemeProvider>
      <MessagesProvider>
        <CacheProvider value={emotionCache}>
          <PostsCont>
            {keys.map((key) => (
              <CarPostWrapper key={key} carId={key} />
            ))}
          </PostsCont>
        </CacheProvider>
      </MessagesProvider>
    </AppThemeProvider>
  );
};

const PostsCont = styled.div`
  width: 100%;
`;

export default Posts;

export async function getServerSideProps() {
  const keys = await loadData();
  return { props: { keys } };
}
