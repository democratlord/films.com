import Card from './Card'

function Movies(props) {
    return (
        <div className="movies">
            {props.movies.length ? (
                props.movies.map(movie => 
                    <Card
                        key={movie.imdbID}
                        readMoreHandler={props.readMoreHandler}
                        {...movie}
                    />
                )
            ) : (
                <p1 className='error'>
                    <img className='ph' src='../ima.png'></img>
                </p1>
            )}
        </div>
    );
}

export default Movies;
