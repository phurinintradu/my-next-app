type MovieCardProps = {
    src?: string;
};

export default function MovieCard(props: MovieCardProps) {
    return (
        <div>
            <img 
            className="w-80 p-4"
            src={"https://image.tmdb.org/t/p/w500" + props.src}
            alt="MovieCard">
            </img>
        </div>
    )
}