import { useState } from 'react'
import Languages from './components/Languages'
import './App.css'

function App() {
  const [lang, setlang] = useState("Italiano")
  const language = [
    { text: "Benvenuto", lang: "Italiano" },
    { text: "Welcome", lang: "English" },
    { text: "Bienvenido", lang: "Español" },
    { text: "Accueillir", lang: "Français" }
  ];

  const welcomeText = language.find(item => item.lang === lang)?.text
  return (
    <>
      <Languages languages={language} currentLang={lang} onChange={(selectedLang) => setlang(selectedLang)} > {welcomeText}</Languages>

    </>
  )
}

export default App;
