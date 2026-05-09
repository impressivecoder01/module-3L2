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

// idea
abstract class MediaPlayer2{
    abstract play() :void;
    abstract pause(): void;
    abstract stop(): void;
}
class MusicPlayer2 extends MediaPlayer2{
    play(): void {
        console.log('play');
    }
    pause(): void {
        console.log('pause');
    }
    stop(): void {
        console.log('stop');
    }
}
const myMusicPlayer2 = new MusicPlayer2()
myMusicPlayer2.pause()
myMusicPlayer2.play()
myMusicPlayer2.stop()