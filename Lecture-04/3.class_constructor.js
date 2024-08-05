class Song {
    constructor(title, artist){
        this.title = title;
        this.artist = artist;
    }
}
const mySong = new Song("We are the champions", "Queen");
console.log(mySong.title);
console.log(mySong.artist);