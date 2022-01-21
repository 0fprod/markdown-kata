import { leerMarkdown } from './lectura'

describe('Tests de lectura', () => {
  it('es capaz de leer un fichero markdown', async () => {
    // Arrange
    const ruta = './src/markdown-repository/ejemplo.md'
    // Act
    const contenido = await leerMarkdown(ruta)
    // Assert
    expect(contenido).toEqual('# titulo irrelevante')
  })
})
