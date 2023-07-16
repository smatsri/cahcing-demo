import { getCarPostData, getCarPostHtml } from "@/lib/posts";
import CarPost from "./CarPost/CarPost";

type CarPostWrapperProps = {
  carId: string;
};
const CarPostWrapper = ({ carId }: CarPostWrapperProps) => {
  if (typeof window === "undefined") {
    const html = getCarPostHtml(carId);
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
  }

  const post = getCarPostData(carId);

  return (
    <div>
      <CarPost
        post={post}
        onBenefitsClick={ignore}
        onContactClick={ignore}
        onDetailsClick={ignore}
        onFavChange={ignore}
        onFundingClick={ignore}
        onInsightsClick={ignore}
        onPostClick={ignore}
      />
    </div>
  );
};

const ignore = () => {};
export default CarPostWrapper;
