import styled from '@emotion/styled';
import NextImage from 'next/image';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../constants';
import { useMemo, useState } from 'react';

type ImageSectionProps = {
  images: string[];
  alt?: string;
  priority?: boolean;
};

const ImageSection = ({
  images,
  alt = '',
  priority = false,
}: ImageSectionProps) => {
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('visible');
  const [failed, setFailed] = useState(0);
  const src = useMemo(() => {
    if (!images || images.length === 0) return null;
    let failedCounter = failed;
    if (failedCounter === 0 && images[0]) {
      return images[0];
    }

    if (failedCounter === 1) {
      return images[1];
    }

    return null;
  }, [images, failed]);

  const onLoad = () => {
    setVisibility('visible');
  };

  const onError = () => {
    setVisibility('hidden');
    setFailed(failed + 1);
  };

  return (
    <Container tabIndex={-1}>
      {src ? (
        <NextImage
          alt={alt}
          src={src}
          loading={priority ? undefined : 'lazy'}
          priority={priority}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            visibility,
          }}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          onError={onError}
          onLoad={onLoad}
        />
      ) : null}
    </Container>
  );
};

const svgPath = `
<svg fill="rgba(0, 0, 0, 0.26)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path>

</svg>
`;
const encodedSvg = encodeURIComponent(svgPath);

const base64Icon = `url("data:image/svg+xml;utf8,${encodedSvg}")`;

const Container = styled.div`
  display: flex;
  background-image: ${base64Icon};
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #f3f6f6;
  height: ${IMAGE_HEIGHT}px;
`;

export default ImageSection;
