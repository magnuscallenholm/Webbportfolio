(() => {
  const translations = {
    en: {
      "language.selection": "Language selection",
      "language.english": "English",
      "language.swedish": "Swedish",

      "hero.eyebrow": "Interactive Portfolio",
      "hero.description":
        ".NET Developer student and former application specialist with a focus on clean, useful and user-friendly digital solutions.",

      "projects.eyebrow": "Projects",
      "projects.title": "Explore my work",
      "projects.description":
        "On the back of the package, you'll find a selection of my projects — from school assignments to personal builds. Each card shows what I've practiced, what I learned, and where you can view the code or demo.",

      "cv.eyebrow": "CV & References",
      "cv.title": "Experience and background",
      "cv.description":
        "On the back of the package, you can explore my experience, references and download my CV. It brings together my background as an application specialist and my current journey toward becoming a .NET developer.",

      "hero.seeWork": "See My Work",
      "hero.cvReferences": "CV & References",

      "package.navigation": "Main navigation",
      "package.pressMe": "PRESS ME",
      "package.playGreeting": "Play voice greeting",
      "package.about": "About me",
      "package.skills": "Skills",
      "package.cv": "CV",
      "package.projects": "Projects",
      "package.mail": "Mail",
      "package.linkedin": "Visit my LinkedIn profile",
      "package.github": "Visit my GitHub profile",

      "about.portraitAlt": "Portrait of Magnus Callenholm",
      "about.title": "About me",
      "about.paragraph1.before": "Hi, I'm Magnus Callenholm, a ",
      "about.paragraph1.highlight": ".NET developer",
      "about.paragraph1.after":
        " student with previous experience working in IT as an application specialist.",
      "about.paragraph2.before": "I enjoy building clean and ",
      "about.paragraph2.highlight": "user-friendly",
      "about.paragraph2.after":
        " digital solutions where design, functionality and problem-solving work together.",

      "skills.title": "Skills",
      "skills.intro":
        "A selection of technologies and tools I use while learning and building projects.",

      "back.educationExperience": "Education & Work Experience",
      "back.references": "References",
      "back.downloadCv": "Download CV",
      "back.flipBack": "FLIP BACK",

      "experience.title": "Education & Work Experience",
      "experience.intro":
        "Here I present my education, recent work experience and the background that has shaped my interest in IT and development.",
      "experience.workTitle": "Work Experience",

      "experience.stadium.role": "Application Specialist",
      "experience.stadium.period": "Dec 2021 – Oct 2025",
      "experience.stadium.description":
        "Worked with business-critical applications connected to Stadium's retail and digital business. Focused on supporting stable system operations, improving user experience and contributing to technical solutions for Stadium and Stadium Outlet.",
      "experience.stadium.point1":
        "Application responsibility for systems connected to business processes",
      "experience.stadium.point2":
        "Collaboration with business stakeholders, IT teams and external partners",
      "experience.stadium.point3":
        "Focus on system quality, operations and continuous improvement",

      "experience.fast2.role": "Application Consultant",
      "experience.fast2.period": "Jan 2019 – Dec 2021",
      "experience.fast2.description":
        "Worked as an application consultant with focus on system support, customer needs and technical solutions. The role involved understanding business processes and helping users get value from the application.",
      "experience.fast2.point1": "Customer and application support",
      "experience.fast2.point2":
        "Configuration, troubleshooting and system improvements",
      "experience.fast2.point3":
        "Close collaboration with users and technical teams",

      "experience.sats.role": "IT System Manager",
      "experience.sats.period": "Feb 2012 – Jan 2019",
      "experience.sats.description":
        "Held several IT-related roles over time, working with systems, projects and business support in a fast-moving organization. The experience gave me a strong understanding of how technology supports daily operations.",
      "experience.sats.point1":
        "IT system responsibility and project coordination",
      "experience.sats.point2": "Support for internal users and business needs",
      "experience.sats.point3":
        "Experience from both operational IT and project-based work",

      "experience.educationTitle": "Education",
      "experience.education.role": "Higher Vocational Education",
      "experience.education.period": "Jan 2026 – Dec 2027",
      "experience.education.description":
        "Ongoing .NET Developer education focused on C#, .NET, web development, databases, SQL, agile methods and modern system development.",
      "experience.education.point1": "C#, .NET and object-oriented programming",
      "experience.education.point2":
        "HTML, CSS, JavaScript and responsive web development",
      "experience.education.point3":
        "Databases, SQL, Git, Azure DevOps and project-based learning",
      "experience.backToCv": "← Back to CV menu",

      "references.title": "References",

      "references.anna.role": "Product Management & UX Manager at Stadium",
      "references.anna.quote":
        "“A colleague who combines a strong sense of personal responsibility with a warm and curious approach.”",

      "references.david.role": "Interim Management | CEO",
      "references.david.quote":
        "“I had opportunity to work with Magnus for almost 4 years at SATS. He always delivered IT Projects on a timely and effective basis. Magnus had a constant comercial and customer mindset in all projects we worked during our tenure together. I would love to work with Magnus in the future.”",

      "references.alex.role": "Interim CFO Support",
      "references.alex.quote":
        "“Magnus demonstrated strong IT expertise, analytical thinking and a willingness to go the extra mile to help the team succeed. I warmly recommend Magnus as a knowledgeable IT specialist and a kind-hearted colleague.”",
      "references.backToCv": "← Back to CV",

      "projectPanel.title": "Projects",
      "projectPanel.snakeLabel": "Open Snake Game project",
      "projectPanel.snakeAlt": "Preview of Snake Game",
      "projectPanel.butterflyLabel": "Open Fjärilarnas Värld web project",
      "projectPanel.butterflyAlt": "Preview of the Fjärilarnas Värld website",
      "projectPanel.comingSoonLabel": "Coming soon project placeholder",
      "projectPanel.comingSoonAlt": "Preview of a coming project",

      "snake.title": "Snake Game",
      "snake.imageAlt": "Full preview of Snake Game",
      "snake.description":
        "A JavaScript-focused school project where I worked with an existing Snake game codebase. The project focused on understanding, adapting and extending the game logic, while also improving the visual styling and user experience.",
      "snake.gameLogic": "Game Logic",

      "butterfly.title": "Fjärilarnas Värld",
      "butterfly.imageAlt": "Full preview of the Fjärilarnas Värld website",
      "butterfly.description":
        "A responsive school project focused on building a fictional zoo website with HTML and CSS. The page includes structured content sections, animal presentation, a newsletter form and a clean, user-friendly layout — something I really enjoy creating.",
      "butterfly.responsiveDesign": "Responsive design",
      "butterfly.forms": "Forms",
      "butterfly.tables": "Tables",

      "projects.liveDemoComingSoon": "Live demo coming soon",
      "projects.liveDemo": "Live demo",
      "projects.backToProjects": "← Back to projects",

      "contact.title": "GET IN TOUCH",
      "contact.nameLabel": "Name:",
      "contact.namePlaceholder": "Your Name",
      "contact.emailLabel": "Email:",
      "contact.emailPlaceholder": "Your Email",
      "contact.emailTitle":
        "Please enter a valid email address, for example name@example.com",
      "contact.toLabel": "To:",
      "contact.subjectLabel": "Subject:",
      "contact.subjectPlaceholder": "Your Subject",
      "contact.messageLabel": "Your Message",
      "contact.messagePlaceholder": "Your Message",
      "contact.submit": "Send Message",

      "common.backToPackage": "Back to package",
    },

    sv: {
      "language.selection": "Språkval",
      "language.english": "Engelska",
      "language.swedish": "Svenska",

      "hero.eyebrow": "Interaktiv portfolio",
      "hero.description":
        "Jag studerar till .NET-utvecklare och har tidigare arbetat som applikationsspecialist, med fokus på välstrukturerade, användbara och användarvänliga digitala lösningar.",

      "projects.eyebrow": "Projekt",
      "projects.title": "Utforska mina projekt",
      "projects.description":
        "På baksidan av förpackningen hittar du ett urval av mina projekt – från skoluppgifter till egna projekt. Varje kort visar vad jag har övat på, vad jag har lärt mig och var du kan se koden eller en demo.",

      "cv.eyebrow": "CV & referenser",
      "cv.title": "Erfarenhet och bakgrund",
      "cv.description":
        "På baksidan av förpackningen kan du utforska min erfarenhet, läsa referenser och ladda ner mitt CV. Där samlas min bakgrund som applikationsspecialist och min nuvarande resa mot att bli .NET-utvecklare.",

      "hero.seeWork": "Se mina projekt",
      "hero.cvReferences": "CV & referenser",

      "package.navigation": "Huvudnavigering",
      "package.pressMe": "TRYCK HÄR",
      "package.playGreeting": "Spela upp en rösthälsning",
      "package.about": "Om mig",
      "package.skills": "Kunskaper",
      "package.cv": "CV",
      "package.projects": "Projekt",
      "package.mail": "Kontakt",
      "package.linkedin": "Besök min LinkedIn-profil",
      "package.github": "Besök min GitHub-profil",

      "about.portraitAlt": "Porträtt av Magnus Callenholm",
      "about.title": "Om mig",
      "about.paragraph1.before":
        "Hej! Jag heter Magnus Callenholm och studerar till ",
      "about.paragraph1.highlight": ".NET-utvecklare",
      "about.paragraph1.after":
        ". Jag har tidigare arbetat inom IT som applikationsspecialist.",
      "about.paragraph2.before":
        "Jag tycker om att bygga välstrukturerade och ",
      "about.paragraph2.highlight": "användarvänliga",
      "about.paragraph2.after":
        " digitala lösningar där design, funktionalitet och problemlösning samspelar.",

      "skills.title": "Kunskaper",
      "skills.intro":
        "Ett urval av tekniker och verktyg som jag använder i mina studier och projekt.",

      "back.educationExperience": "Utbildning & erfarenhet",
      "back.references": "Referenser",
      "back.downloadCv": "Ladda ner CV",
      "back.flipBack": "VÄND TILLBAKA",

      "experience.title": "Utbildning & arbetslivserfarenhet",
      "experience.intro":
        "Här presenterar jag min utbildning, senaste arbetslivserfarenhet och den bakgrund som har format mitt intresse för IT och utveckling.",
      "experience.workTitle": "Arbetslivserfarenhet",

      "experience.stadium.role": "Applikationsspecialist",
      "experience.stadium.period": "Dec. 2021 – okt. 2025",
      "experience.stadium.description":
        "Arbetade med verksamhetskritiska applikationer kopplade till Stadiums butiksverksamhet och digitala verksamhet. Fokus låg på att stödja stabil systemdrift, förbättra användarupplevelsen och bidra till tekniska lösningar för Stadium och Stadium Outlet.",
      "experience.stadium.point1":
        "Applikationsansvar för system kopplade till verksamhetsprocesser",
      "experience.stadium.point2":
        "Samarbete med verksamhetsrepresentanter, IT-team och externa partners",
      "experience.stadium.point3":
        "Fokus på systemkvalitet, drift och kontinuerliga förbättringar",

      "experience.fast2.role": "Applikationskonsult",
      "experience.fast2.period": "Jan. 2019 – dec. 2021",
      "experience.fast2.description":
        "Arbetade som applikationskonsult med fokus på systemsupport, kundbehov och tekniska lösningar. Rollen innebar att förstå verksamhetsprocesser och hjälpa användare att få nytta av applikationen.",
      "experience.fast2.point1": "Kund- och applikationssupport",
      "experience.fast2.point2":
        "Konfiguration, felsökning och systemförbättringar",
      "experience.fast2.point3":
        "Nära samarbete med användare och tekniska team",

      "experience.sats.role": "IT-systemansvarig",
      "experience.sats.period": "Feb. 2012 – jan. 2019",
      "experience.sats.description":
        "Hade flera IT-relaterade roller över tid och arbetade med system, projekt och verksamhetsstöd i en snabbrörlig organisation. Erfarenheten gav mig en stark förståelse för hur teknik stödjer den dagliga verksamheten.",
      "experience.sats.point1": "Systemansvar och projektkoordinering inom IT",
      "experience.sats.point2": "Stöd till interna användare och verksamheten",
      "experience.sats.point3":
        "Erfarenhet av både operativ IT och projektbaserat arbete",

      "experience.educationTitle": "Utbildning",
      "experience.education.role": "Yrkeshögskoleutbildning",
      "experience.education.period": "Jan. 2026 – dec. 2027",
      "experience.education.description":
        "Pågående utbildning till .NET-utvecklare med fokus på C#, .NET, webbutveckling, databaser, SQL, agila metoder och modern systemutveckling.",
      "experience.education.point1":
        "C#, .NET och objektorienterad programmering",
      "experience.education.point2":
        "HTML, CSS, JavaScript och responsiv webbutveckling",
      "experience.education.point3":
        "Databaser, SQL, Git, Azure DevOps och projektbaserat lärande",
      "experience.backToCv": "← Tillbaka till CV-menyn",

      "references.title": "Referenser",

      "references.anna.role": "Chef för produktledning och UX på Stadium",
      "references.anna.quote":
        "“En kollega som kombinerar stort personligt ansvar med ett varmt och nyfiket förhållningssätt.”",

      "references.david.role": "Interimsledning | VD",
      "references.david.quote":
        "“Jag hade möjlighet att arbeta med Magnus i nästan fyra år på SATS. Han levererade alltid IT-projekt i tid och på ett effektivt sätt. Magnus hade ett genomgående affärs- och kundorienterat förhållningssätt i alla projekt vi arbetade med under vår tid tillsammans. Jag skulle gärna arbeta med Magnus igen i framtiden.”",

      "references.alex.role": "Interim CFO-stöd",
      "references.alex.quote":
        "“Magnus visade hög IT-kompetens, analytiskt tänkande och en stark vilja att prestera det lilla extra för att teamet skulle lyckas. Jag rekommenderar varmt Magnus som en kunnig IT-specialist och godhjärtad kollega.”",

      "references.backToCv": "← Tillbaka till CV",

      "projectPanel.title": "Projekt",
      "projectPanel.snakeLabel": "Öppna projektet Snake-spelet",
      "projectPanel.snakeAlt": "Förhandsvisning av Snake-spelet",
      "projectPanel.butterflyLabel": "Öppna webbprojektet Fjärilarnas Värld",
      "projectPanel.butterflyAlt":
        "Förhandsvisning av webbplatsen Fjärilarnas Värld",
      "projectPanel.comingSoonLabel": "Platshållare för kommande projekt",
      "projectPanel.comingSoonAlt": "Förhandsvisning av ett kommande projekt",

      "snake.title": "Snake-spelet",
      "snake.imageAlt": "Fullständig förhandsvisning av Snake-spelet",
      "snake.description":
        "Ett skolprojekt med fokus på JavaScript där jag arbetade vidare med en befintlig kodbas för ett Snake-spel. Projektet handlade om att förstå, anpassa och bygga ut spellogiken samt förbättra spelets visuella utformning och användarupplevelse.",
      "snake.gameLogic": "Spellogik",

      "butterfly.title": "Fjärilarnas Värld",
      "butterfly.imageAlt":
        "Fullständig förhandsvisning av webbplatsen Fjärilarnas Värld",
      "butterfly.description":
        "Ett responsivt skolprojekt med fokus på att bygga en webbplats för en fiktiv djurpark med HTML och CSS. Webbplatsen innehåller strukturerade innehållssektioner, presentationer av djur, ett formulär för nyhetsbrev och en ren, användarvänlig layout – något jag verkligen tycker om att skapa.",
      "butterfly.responsiveDesign": "Responsiv design",
      "butterfly.forms": "Formulär",
      "butterfly.tables": "Tabeller",

      "projects.liveDemoComingSoon": "Demo kommer snart",
      "projects.liveDemo": "Visa demo",
      "projects.backToProjects": "← Tillbaka till projekt",

      "contact.title": "KONTAKTA MIG",
      "contact.nameLabel": "Namn:",
      "contact.namePlaceholder": "Ditt namn",
      "contact.emailLabel": "E-post:",
      "contact.emailPlaceholder": "Din e-postadress",
      "contact.emailTitle":
        "Ange en giltig e-postadress, till exempel namn@exempel.se",
      "contact.toLabel": "Till:",
      "contact.subjectLabel": "Ämne:",
      "contact.subjectPlaceholder": "Ämne",
      "contact.messageLabel": "Ditt meddelande",
      "contact.messagePlaceholder": "Ditt meddelande",
      "contact.submit": "Skicka meddelande",

      "common.backToPackage": "Tillbaka till förpackningen",
    },
  };

  const audioSources = {
    en: "assets/sounds/engelska.mp3",
    sv: "assets/sounds/svenska.mp3",
  };

  const languageButtons = document.querySelectorAll(
    ".language-btn[data-language]",
  );

  const audioElement = document.querySelector("#pressMeAudio");
  const audioSource = audioElement?.querySelector("source");

  function setLanguage(language) {
    const dictionary = translations[language] ?? translations.en;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translation = dictionary[key];

      if (translation !== undefined) {
        element.textContent = translation;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      const translation = dictionary[key];

      if (translation !== undefined) {
        element.setAttribute("aria-label", translation);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      const translation = dictionary[key];

      if (translation !== undefined) {
        element.setAttribute("alt", translation);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const translation = dictionary[key];

      if (translation !== undefined) {
        element.setAttribute("placeholder", translation);
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const key = element.dataset.i18nTitle;
      const translation = dictionary[key];

      if (translation !== undefined) {
        element.setAttribute("title", translation);
      }
    });

    document.documentElement.lang = language;

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === language;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (audioElement && audioSource) {
      const nextAudioSource = audioSources[language];

      if (audioSource.getAttribute("src") !== nextAudioSource) {
        audioSource.setAttribute("src", nextAudioSource);
        audioElement.load();
      }
    }

    localStorage.setItem("portfolio-language", language);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });

  const savedLanguage = localStorage.getItem("portfolio-language");
  const initialLanguage = savedLanguage === "sv" ? "sv" : "en";

  setLanguage(initialLanguage);
})();
