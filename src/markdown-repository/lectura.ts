import { readFile } from 'fs/promises'
const CODIFICACION_POR_DEFECTO = 'utf8'

export const leerMarkdown = (ruta: string): Promise<string> => {
  // TODO: Gestionar posibles errores
  return readFile(ruta, { encoding: CODIFICACION_POR_DEFECTO })
}
