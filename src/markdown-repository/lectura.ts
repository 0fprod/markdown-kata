import { readFile } from 'fs/promises'
const CODIFICACION_POR_DEFECTO = 'utf8'

export const leerMarkdown = (ruta: string): Promise<string> => {
  return readFile(ruta, { encoding: CODIFICACION_POR_DEFECTO }).catch((err) => {
    if (err?.code === 'ENOENT') { throw new Error('Error: El fichero no existe') }

    throw err
  })
}
