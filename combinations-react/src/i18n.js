import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)


  .use(LanguageDetector)


  .use(initReactI18next)


  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    resources: {
        en: {
          translation: {
            questions: {
              title:'Combinatorics have never been easier',
              first: 'What is Combinatorics?',
              second: 'What is Combination?',
              third: 'What is Permutation?',
              forth: 'What is Variation?'
            },

            answers: {
              first: "Combinatorics is an area of mathematics primarily concerned with counting, both as a means and an end in obtaining results, and certain properties of finite structures. It is closely related to many other areas of mathematics and has many applications ranging from logic to statistical physics and from evolutionary biology to computer science.",
              second: "A combination is a mathematical technique that determines the number of possible arrangements in a collection of items where the order of the selection does not matter. In combinations, you can select the items in any order.",
              third:  "A permutation is a mathematical calculation of the number of ways a particular set can be arranged, where the order of the arrangement matters.",
              forth: "Variations are arrangements of selections of objects with or without repetition, where the order of the selected objects matters."
            },

            footer: {
                made: 'Made by ',
                and: 'and',
                rights: '@Combinados 2022. All rights reserved.'
            },

            options: {
                one: 'Combination',
                two: 'Permutation',
                three: 'Variation',
                choose: "Don't know which one's the best option for you?"
              },

            calc: {
                totalNumber: 'Total Number (n)',
                groupNumber: 'Group Number (r)',
                button: 'CALCULATE',
                result: 'Result: '
            }
          }
        },
        es: {
            translation: {
              questions: {
                title: 'La Combinatoria jamás ha sido tan fácil',
                first: '¿Qué es la Combinatoria?',
                second: '¿Qué es Combinación?',
                third: '¿Qué es la Permutación?',
                forth: '¿Qué es la Variación?'
              },

              answers: {
                first: 'La combinatoria es un área de las matemáticas que se ocupa principalmente del conteo, tanto como un medio como un fin para obtener resultados, y ciertas propiedades de las estructuras finitas. Está estrechamente relacionado con muchas otras áreas de las matemáticas y tiene muchas aplicaciones que van desde la lógica hasta la física estadística y desde la biología evolutiva hasta la informática.',
                second: 'Una combinación es una técnica matemática que determina el número de arreglos posibles en una colección de elementos donde el orden de la selección no importa. En combinaciones, puede seleccionar los artículos en cualquier orden.',
                third: 'Una combinación es una técnica matemática que determina el número de arreglos posibles en una colección de elementos donde el orden de la selección no importa. En combinaciones, puede seleccionar los artículos en cualquier orden.',
                forth: 'Las variaciones son arreglos de selecciones de objetos con o sin repetición, donde importa el orden de los objetos seleccionados.'
              },

              footer: {
                made: 'Creado por ',
                and: 'y',
                rights: '@Combinados 2022. Todos los derechos reservados.'
            },

              options: {
                one: 'Combinación',
                two: 'Permutación',
                three: 'Variación',
                choose: '¿No sabes cuál es la opción correcta para tí?'
              },

              calc: {
                totalNumber: 'Número Total (n)',
                groupNumber: 'Número del Grupo (r)',
                button: 'CALCULAR',
                result: 'Resultado: '
            }
            }
          }
      }
  });

                              
export default i18n;