import fs from "fs";
import path from "path";


export const listFilesInFolder = (folderPath: string): string[] => fs.readdirSync(folderPath).map(item => path.join(folderPath,item))

export const getRandomFile = (files: string[]): string => files[Math.floor(Math.random() * files.length)]
