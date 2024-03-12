import Link from "next/link";

interface IMovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
  return (
    <div className="grid grid-rows-1fr-auto gap-5 place-items-center cursor-pointer">
      <img
        src={poster_path}
        alt={title}
        className="max-w-full min-h-full rounded-lg transition-opacity duration-300 opacity-70 hover:opacity-100"
      />
      <Link href={`/moives/${id}`} className="text-center">
        {title}
      </Link>
    </div>
  );
}
