import os
directorio_actual = os.getcwd()
archivo_entrada = os.path.join(directorio_actual, 'src/db-words/words.txt')
archivo_salida = os.path.join(directorio_actual, 'src/db-words/words_filtradas.txt')

def filtrar_palabras_de_5_letras(archivo_entrada, archivo_salida):
  try:
    with open(archivo_entrada, 'r', encoding='utf-8') as f_entrada, open(archivo_salida, 'w', encoding='utf-8') as f_salida:
      for linea in f_entrada:
        palabras = linea.split()
        palabras_5_letras = [palabra for palabra in palabras if len(palabra) == 5]
        for palabra in palabras_5_letras:
          f_salida.write(palabra + '\n')
  except FileNotFoundError:
      print(f"El archivo {archivo_entrada} no se encontró.")
  except Exception as e:
      print(f"Ocurrió un error: {e}")

filtrar_palabras_de_5_letras(archivo_entrada, archivo_salida)
