import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

function translateIfExist(element, key) {
  if (element) {
    element.innerText = i18n.t(key, { returnObjects: true });
  }
}

function updateContent() {
  // Index page
  translateIfExist(document.getElementById("s_myresume"), "myresume");
  translateIfExist(document.getElementById("s_buymecoffe"), "buymecoffe");
  translateIfExist(document.getElementById("s_myapplications"), "myapplications");
  translateIfExist(document.getElementById("s_mydesigns"), "mydesigns");
  translateIfExist(document.getElementById("s_aboutme"), "aboutme");

  // Applications page
  translateIfExist(document.getElementById("s_applications"), "applications");
  translateIfExist(document.getElementById("s_fondoandroid"), "fondoandroid");
  translateIfExist(document.getElementById("s_fondoandroiddesc"), "fondoandroiddesc");
  translateIfExist(document.getElementById("s_fondolinux"), "fondolinux");
  translateIfExist(document.getElementById("s_fondolinuxdesc"), "fondolinuxdesc");
  translateIfExist(document.getElementById("s_luna"), "luna");
  translateIfExist(document.getElementById("s_luna_desc"), "luna_desc");

  // My description
  translateIfExist(document.getElementById("s_mydescription"), "mydescription");
  translateIfExist(document.getElementById("s_experience"), "experience");
  translateIfExist(document.getElementById("s_myexperiencedesc"), "myexperiencedesc");
  translateIfExist(document.getElementById("s_exp_1"), "exp_1");
  translateIfExist(document.getElementById("s_exp_2"), "exp_2");
  translateIfExist(document.getElementById("s_exp_3"), "exp_3");
  translateIfExist(document.getElementById("s_loveelementary"), "loveelementary");
  translateIfExist(document.getElementById("s_loveelementarydesc"), "loveelementarydesc");
  translateIfExist(document.getElementById("s_meandroid"), "meandroid");
  translateIfExist(document.getElementById("s_meandroiddescrp1"), "meandroiddescrp1");
  translateIfExist(document.getElementById("s_meandroiddescrp2"), "meandroiddescrp2");
  translateIfExist(document.getElementById("s_othernkow"), "othernkow");
  translateIfExist(document.getElementById("s_othernkowdesc"), "othernkowdesc");

  // Support
  translateIfExist(document.getElementById("s_buymecoffetitle"), "buymecoffetitle");
  translateIfExist(document.getElementById("s_thanks"), "thanks");
  translateIfExist(document.getElementById("s_helpdescrp"), "helpdescrp");
  translateIfExist(document.getElementById("s_support1"), "support1");
  translateIfExist(document.getElementById("s_support2"), "support2");
  translateIfExist(document.getElementById("s_support3"), "support3");
  translateIfExist(document.getElementById("s_support4"), "support4");
  translateIfExist(document.getElementById("s_supportend"), "supportend");

  // Footer section
  translateIfExist(document.getElementById("s_madein"), "madein");
  translateIfExist(document.getElementById("s_photo_by"), "photo_by");
  translateIfExist(document.getElementById("s_on"), "on");

}

i18n
  .use(LanguageDetector)
  .init({
    //lng: "es",
    //debug: true,
    resources: {
      es: {
        translation: {
          // Index page
          "myresume": "Entusiasta de la tecnología en el desarrollo móvil y Linux.",
          "buymecoffe" : "COMPRAME UN CAFÉ",
          "myapplications": "Mis aplicaciones",
          "mydesigns": "Mis diseños",
          "aboutme": "Sobre mí",

          // Applications page
          "applications":"Aplicaciones",
          "fondoandroid":"Fondo para Android",
          "fondoandroiddesc":"Encuentra increíbles fondos de pantalla de Unsplash.com",
          "fondolinux":"Fondo para Linux",
          "fondolinuxdesc":"Encuentra increíbles fondos de pantalla de Unsplash.com",
          "luna":"Luna para Linux",
          "luna_desc":"Un widget de Calendario muy colorido",

          // About me page
          "mydescription":"Soy Carlos López Romero, desarrollador Android mexicano y vivo actualmente en la Ciudad de México. Me apasionan los temas de tecnología en desarrollo móvil y de escritorios linux. Estoy convencido de que se puede hacer mucho para cambiar al mundo, el primer paso es un ¡Hola mundo!",
          "experience": "Experiencia",
          "myexperiencedesc": "Estudie una carrera en Ciencias de la Informática en el IPN, actualmente estoy en progreso para titulación, mientras tanto he realizado las siguientes actividades:",
          "exp_1": "Hice mi servicio social en la SECITI (ahora SECTEI) en donde tuve la oportunidad de ser desarrollador web usando HTML, CSS, Javascript y PHP, utilizando frameworks como Angular y Lumen.",
          "exp_2": "Por consiguiente realice mis Prácticas Profesionales y continue con mi rol de Desarrollador Web en la SECTEI ayudando con el mantenimiento y soporte del sitio, además de iniciar nuevos proyectos.",
          "exp_3": "Actualmente estoy realizando proyectos personales enfocados a las plataformas de Android y Linux.",
          "loveelementary":"Me encanta elementary OS",
          "loveelementarydesc":"He estado usando elementary OS desde hace algunos años, y finalmente en Agosto de 2018, publiqué mi primer app para Linux: Fondo (wallpapers de escritorio usando la API de Unsplash) y dos meses después Luna (un widget calendario para el escritorio) en el AppCenter de elementary y la plataforma Flathub.",
          "meandroid":"Yo y Android",
          "meandroiddescrp1":"Cuanto tenía 19 años conseguí mi primer dispositivo Android, era una tableta Gateway con Android 4.0. Hice algunas aplicaciones Android para proyectos escolares pero nunca publique una hasta ahora.",
          "meandroiddescrp2":"Inicié el desarrollo de Fondo hace tres meses y ha sido una de las cosas más emocionantes que he hecho, este proyecto está basado en la versión de Linux, lo que significa que realicé mi propia planeación, investigación, diseño y codificación para entregar a la comunidad una App gratis de uso común y al mismo tiempo escalar la aplicación de escritorios Linux a un alcance mayor. ",
          "othernkow": "Otros conocimientos",
          "othernkowdesc": "Considero tener algunas habilidades básicas en las siguientes tecnologías:",

          // Support
          "buymecoffetitle":"Comprame un café",
          "thanks":"¡Gracias!",
          "helpdescrp":"Tu apoyo me ayuda a continuar haciendo cosas como:",
          "support1":"📸️ Continuar con el desarrollo de Fondo y Luna, lo que significa nuevas características, corrección de errores y mejoras de código.",
          "support2":"🛸️ Crear nuevos diseños gratuitos en Uplabs.",
          "support3":"📖️ Iniciar nuevos proyectos relacionados al código abierto.",
          "support4":"🌮️ Comprar un café o quizá un taquito.",
          "supportend":"Tu ayuda es muy apreciada, me complace que visites este sitio.",

          // Footer
          "madein" : "Hecho en México con ❤",
          "photo_by" : "Foto por ",
          "on" : " en "
        }
      },
      en: {
        translation: {
          // Index page
          "myresume": "I'm passionate about the technology in mobile and Linux development.",
          "buymecoffe" : "BUY ME A COFFE",
          "myapplications": "My applications",
          "mydesigns": "My designs",
          "aboutme": "About me",

          // Applications page
          "applications":"Applications",
          "fondoandroid":"Fondo for Android",
          "fondoandroiddesc":"Find the beautiful wallpapers from Unsplash.com",
          "fondolinux":"Fondo for Linux",
          "fondolinuxdesc":"Find the beautiful wallpapers from Unsplash.com",
          "luna":"Luna for Linux",
          "luna_desc":"A colorful calendar Widget for linux",

          // About me page
          "mydescription":"I'm Carlos López Romero, a Mexican Android developer, I currently live in Mexico City. I'm passionate about the technology in mobile development and Linux desktops. I’m convinced that you can do a lot to change the world, the first step is a Hello world!.",
          "experience": "Experience",
          "myexperiencedesc": "I studied a career in Computer Science at IPN, currently, I'm in progress to get my degree and meanwhile I've been doing the next activities:",
          "exp_1": "I did my Social service at the SECITI (now SECTEI) where I have the opportunity to be a Web developer using HTML, CSS, Javascript and PHP, using frameworks like Angular and Lumen.",
          "exp_2": "Consequently, I did my Professional Practice and I continue with my role as Web developer at SECTEI helping with the maintaining and support of the site, also starting new projects .",
          "exp_3": "Currently, I'm working on personal projects focused on the Android and Linux Platform.",
          "loveelementary":"I love elementary OS",
          "loveelementarydesc":"I've been using the elementary OS for several years, and finally, on August 2018, I published my first public Linux App: Fondo (wallpaper changer using the Unsplash's API) and two months later Luna (calendar widget for desktop) in the elementary's AppCenter, and Flathub Platform.",
          "meandroid": "Me and Android",
          "meandroiddescrp1": "When I had 19, I get my first Android device, It was a Gateway tablet with Android 4.0. I did some Android apps as scholar projects, but I never publish one until now.",
          "meandroiddescrp2": "I started the Fondo development three months ago and It has been one of the most exciting things have done, this project is based on the Linux versión which means I did my own planning, research, design, and codification for delivery to the community a free App for common use and at the same time scale the application from Linux desktops to a mayor scope.",
          "othernkow": "Other knowledge",
          "othernkowdesc": "I consider have some basics skills in the next technologies:",

          // Support
          "buymecoffetitle":"Buy me a coffe",
          "thanks":"Thanks!",
          "helpdescrp":"Your support helps me to keep doing the stuff like:",
          "support1":"📸️ Continue the Fondo and Luna development, which means new features, bug fixes, and code improvement.",
          "support2":"🛸️ Create new free designs in Uplabs.",
          "support3":"📖️ Start new projects related to open source.",
          "support4":"🌮️ Buy a coffee or maybe a taquito.",
          "supportend":"Your help is very valuable to me, I feel glad that you visit this site.",

          // Footer
          "madein" : "Made in Mexico with ❤",
          "photo_by" : "Photo by ",
          "on" : " on "
        }
      }
    }
  }, function(err, t) {
    updateContent();
  });

  function changeLng(lng) {
    i18n.changeLanguage(lng);
  }

i18n.on("languageChanged", () => {
  updateContent();
});
