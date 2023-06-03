import gm, {State} from 'gm'
import Buffer from "buffer";
import crc32 from 'crc32'
import {getRandomFile, listFilesInFolder} from "@/utils/file";

class Picture {
  public handler: State;

  constructor(width:number=0, height: number = 0, slug: string = '') {
    let index = parseInt(crc32(slug), 16)

    const files = listFilesInFolder('public/pictures')
    const file = index > 0 ? files[index % files.length] : getRandomFile(files)
    this.handler = gm(file).crop(width, height ? height : width)
  }

  public buffer(): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      this.handler.toBuffer('PNG',(err, buffer) => {
        if(err) return reject(err)
        return resolve(buffer)
      })
    })
  }
}

export default Picture
