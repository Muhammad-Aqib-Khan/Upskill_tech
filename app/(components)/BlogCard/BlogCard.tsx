// components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  title: string;
  image: string;
  slug: string;
};

export default function BlogCard({ title, image, slug }: CardProps) {
  return (
    <Link href={`/cards/${slug}`}>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        backgroundColor: '#072d5c',
        overflow: 'hidden',
      }}>
        <Image src={image} alt={title} width={250} height={100}  />
        <h2 style={{ marginTop: '10px' }}>{title}</h2>
      </div>
    </Link>
  );
}