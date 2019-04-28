import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    //lng: 'en',
    //debug: true,
    resources: {
      es: {
        translation: {
          // Menu
          "home": "Inicio",
          "about_me": "Acerca de mí",
          "my_designs": "Mis diseños",
          "my_apps": "Mis aplicaciones",

          // Index page
          "greet": "Hola! soy",

          // Designs and Apps page
          "made_with" : "Herramientas utilizadas",

          // Apps dscriptions
          "luna_description" : "Un asombroso widget calendario, Selecciona un color de tema y navega a través de los meses y años con una interfaz intuitiva",
          "fondo_description" : "Encuentra una variedad de los fondos de pantalla más increíbles de Unsplash.com la comunidad de fotógrafos más generosa del mundo",

          // About
          "welcome" : "Bienvenido a mi sitio web!",
          "my_description" : "Soy Desarrollador mexicano, recido actualemte en la Ciudad de México. Me entusiasma mucho el potencial que tiene la tecnología para crear un impacto en las personas a través de grandes y pequeños aportes al mundo.",
          "my_overview" : "Información general",
          "overview1" : "Estudié Licenciatura en Ciencias de la informática en el IPN",
          "overview2" : "Usuario, fan y desarrollador en el AppCenter de elementary OS",
          "overview3" : "Juego el ajedrez a nivel básico",
          "overview4" : "Me gusta caminar y hacer otros ejercicios relajantes",
          "it_experience" : "Tecnologías que he manejado",
          "prog_lang" : "Lenguajes de programación",
          "others" : "Otros",

          // Footer
          "madein" : "Hecho en México"
        }
      },
      en: {
        translation: {
          // Menu
          "home": "Home",
          "about_me": "About me",
          "my_designs": "My designs",
          "my_apps": "My applications",

          // Index page
          "greet": "Hello! I'm",

          // Designs and Apps page
          "made_with" : "Made with",

          // Apps dscriptions
          "luna_description" : "An amazing calendar widget. Select a theme color and browse through the months and years with an intuitive interface.",
          "fondo_description" : "Find a variety of the most beautiful wallpapers from Unsplash.com the world’s most generous community of photographers.",

          // About
          "welcome" : "Welcome to my website!",
          "my_description" : "I am a Mexican developer, I live in Mexico City. I am very excited about the potential of technology to create an impact on people through large and small contributions to the world.",
          "my_overview" : "An overview of me",
          "overview1" : "A graduate student from  the Computer Science at the IPN",
          "overview2" : "elementary OS user, fan and developer in AppCenter",
          "overview3" : "I play chess at a basic level",
          "overview4" : "I like to walk and do other relaxing exercises",
          "it_experience" : "IT experience",
          "prog_lang" : "Programming languages",
          "others" : "Others",

          // Footer
          "madein" : "Made in Mexico"
        }
      }
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });

function updateContent() {
  //document.getElementsByClassName('nombre').innerHTML = i18n.t('key');
  //let element = document.getElementById('s_home');
  //console.log(element);
  // Menu
  translateIfExist(document.getElementById('s_home'), 'home');
  translateIfExist(document.getElementById('s_about'), 'about_me');
  translateIfExist(document.getElementById('s_design'), 'my_designs');
  translateIfExist(document.getElementById('s_apps'), 'my_apps');

  // Index page
  translateIfExist(document.getElementById('s_greet'), 'greet');

  // Designs
  translateIfExist(document.getElementById('s_h2_designs'), 'my_designs');
  translateIfExist(document.getElementById('s_design_made_with'), 'made_with');

  // Apps
  translateIfExist(document.getElementById('s_h2_apps'), 'my_apps');
  translateIfExist(document.getElementById('s_apps_made_with'), 'made_with');
  translateIfExist(document.getElementById('s_luna_description'), 'luna_description');
  translateIfExist(document.getElementById('s_fondo_description'), 'fondo_description');

  // About
  translateIfExist(document.getElementById('s_h2_about'), 'about_me');
  translateIfExist(document.getElementById('s_welcome'), 'welcome');
  translateIfExist(document.getElementById('s_my_description'), 'my_description');
  translateIfExist(document.getElementById('s_my_overview'), 'my_overview');
  translateIfExist(document.getElementById('s_overview1'), 'overview1');
  translateIfExist(document.getElementById('s_overview2'), 'overview2');
  translateIfExist(document.getElementById('s_overview3'), 'overview3');
  translateIfExist(document.getElementById('s_overview4'), 'overview4');
  translateIfExist(document.getElementById('s_it_experience'), 'it_experience');
  translateIfExist(document.getElementById('s_prog_lang'), 'prog_lang');
  translateIfExist(document.getElementById('s_others'), 'others');

  // Footer section
  translateIfExist(document.getElementById('s_madein'), 'madein');

}

function translateIfExist(element, key) {
  if (element) {
    element.innerHTML = i18n.t(key, { returnObjects: true })
  }
}

function changeLng(lng) {
  i18n.changeLanguage(lng);
}

i18n.on('languageChanged', () => {
  updateContent();
});