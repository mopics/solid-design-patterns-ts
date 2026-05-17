export const facade = `// Complex subsystems
class AudioDecoder {
  decode(file: string): Buffer { return Buffer.from(file) }
}
class VideoDecoder {
  decode(file: string): Buffer { return Buffer.from(file) }
}
class AudioMixer {
  mix(audio: Buffer, video: Buffer): Buffer { return Buffer.concat([audio, video]) }
}
class VideoEncoder {
  encode(data: Buffer): string { return \`encoded:\${data.length}bytes\` }
}

// Facade hides all that complexity behind one simple method
class VideoConverter {
  private audio   = new AudioDecoder()
  private video   = new VideoDecoder()
  private mixer   = new AudioMixer()
  private encoder = new VideoEncoder()

  convert(filename: string): string {
    const audioData = this.audio.decode(filename)
    const videoData = this.video.decode(filename)
    const mixed     = this.mixer.mix(audioData, videoData)
    return this.encoder.encode(mixed)
  }
}

const converter = new VideoConverter()
console.log(converter.convert('movie.avi'))`
