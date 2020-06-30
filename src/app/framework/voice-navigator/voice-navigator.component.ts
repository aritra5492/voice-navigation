import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-voice-navigator',
  templateUrl: './voice-navigator.component.html',
  styleUrls: ['./voice-navigator.component.less']
})
export class VoiceNavigatorComponent {

  isRecording: boolean;
  private _recorder: MediaRecorder;
  private _recordedChunks = [];

  @Input() isFetchingText: boolean;
  @Output() complete = new EventEmitter<Blob>();

  toggleRecording() {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      this._startRecording()
        .then(recorder => this._recorder = recorder)
        .catch(err => console.log(err.message));
    } else {
      this._stopRecording().then(audioBlob => {
        this.complete.emit(audioBlob);
      });
    }
  }

  private _startRecording(): Promise<MediaRecorder> {
    this._recorder = null;
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia || (<any>navigator).webkitGetUserMedia ||
        (<any>navigator).mozGetUserMedia || (<any>navigator).msGetUserMedia;

      if (!navigator.getUserMedia) reject({ message: 'Audio recording is not supported in your browser' });

      navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then((stream) => {
        const
          options = { mimeType: 'audio/webm' },
          mediaRecorder = new MediaRecorder(stream, options);

        mediaRecorder.onstart = () => this._recordedChunks = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            this._recordedChunks.push(e.data);
          }
        };

        mediaRecorder.start();

        resolve(mediaRecorder);
      });
    });
  }

  private _stopRecording(): Promise<Blob> {
    this._recorder && this._recorder.stop();
    return new Promise((resolve) => {
      if (this._recorder) {
        this._recorder.onstop = (e) => {
          const audioBlob = new Blob(this._recordedChunks, { type: 'audio/webm' });
          this._recordedChunks = [];
          this._recorder = null;
          resolve(audioBlob);
        }
      } else {
        resolve(null);
      }
    });
  }

}
