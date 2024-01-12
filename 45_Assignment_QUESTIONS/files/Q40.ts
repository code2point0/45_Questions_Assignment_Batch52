function make_album(artist: string, title: string, tracks?: number): Object {
    return { artist, title, tracks };
}
const album1 = make_album("Taylor Swift", "Red");
const album2 = make_album("The Beatles", "Abbey Road", 17);
const album3 = make_album("Adele", "25");
console.log(album1);
console.log(album2);
console.log(album3);
  