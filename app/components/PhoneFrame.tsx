import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[220px] sm:w-[240px] aspect-[1206/2412] rounded-[2.2rem] border border-white/15 bg-black shadow-2xl overflow-hidden ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill sizes="240px" className="object-cover object-top" />
    </div>
  );
}
