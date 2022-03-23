//Action Creator
export const selectSong = (song) => {
    //We want to return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

