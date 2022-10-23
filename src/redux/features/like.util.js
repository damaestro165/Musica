export const addLike = (songs, songTOLike) => {
  const existingSong = songs.find((song) => song.id === songToLike.id);

  if (existingSong) {
    return songs.map((song) =>
      song.id === songToLike.id ? { ...song, liked: false } : song
    );
  }
  return [...songs, { ...songTOLike, liked: true }];
};
