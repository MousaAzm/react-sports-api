import http from '../SportAPI'


const getAllSports = () => {
    return http.get('/all_sports.php')
}

const getAllLeague = ()=> {
    return http.get('/search_all_leagues.php?s=Soccer')
}


export default{
    getAllSports,
    getAllLeague
}

