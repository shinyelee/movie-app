import React, { useEffect, useState } from 'react'
import { Row, Button } from 'antd';
import axios from 'axios';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../../Config';
import GridCards from '../commons/GridCards';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import Favorite from './Sections/Favorite';
import Comments from './Sections/Comments';

function MovieDetail(props) {

    const movieId = props.match.params.movieId
    const movieVariable = {
        movieId: movieId
    }

    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)
    const [Comment, setComment] = useState([])

    useEffect(() => {

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)

            })

        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                setCasts(response.cast)
            })

        axios.post('/api/comment/getComments', movieVariable)
        .then(response => {
            console.log(response)
            if (response.data.success) {
                console.log('response.data.comments', response.data.comments)
                setComment(response.data.comments)
            } else {
                alert('댓글 정보를 가져오는데 실패했습니다.')
            }
        })


    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle)
    }

    return (
        <div>

            {/* Header */}


            <MainImage
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            />


            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite    movieInfo={Movie} movieId={movieId}  userFrom={localStorage.getItem('userId')}  />
                </div>


                {/* Movie Info */}

                <MovieInfo
                    movie={Movie}
                />


                <br />
                {/* Actors Grid */}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <Button onClick={toggleActorView}> Toggle Actor View </Button>
                </div>


                {ActorToggle &&
                    <Row gutter={[16, 16]} >

                        {Casts && Casts.map((cast, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    image={cast.profile_path ?
                                        `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                    characterName={cast.name}
                                />
                            </React.Fragment>
                        ))}

                    </Row>
                }

                {/* Comments */}
                <Comments postId={movieId} />

            </div>


        </div>
    )
}

export default MovieDetail