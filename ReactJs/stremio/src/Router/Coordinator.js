export const goToHomePage = (history) =>{
    history.push("/")
}

export const goToMovies = (history) => {
    history.push("/movies");
}

export const goBack = (history) => {
    history.goBack()
}