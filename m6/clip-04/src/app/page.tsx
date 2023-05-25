import Image from 'next/image'

export default function Home() {
  return (
    <div className="container-main">
      <h4>Douglas Crockford</h4>
      <div className="events-speaker-photo">
        <Image src="/speakers/speaker-1124.jpg"
          alt="Douglas Crockford"
          width={135} height={135} />
      </div>
    </div>
  );
}
