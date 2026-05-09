// interface
// abstract class

interface MediaPlayer{
    play() : void;
    pause() : void;
    stop() : void
} 

// implementation
class MusicPlayer implements MediaPlayer{
    play(): void {
        console.log('Playing music');
    }
    pause(): void {
        console.log('Pause ');
    }
    stop(): void {
        console.log('stop');
    }
}
const myMusicPlayer = new MusicPlayer()
myMusicPlayer.play()