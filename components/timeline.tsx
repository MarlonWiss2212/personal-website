import TimelineDateBox from "./timeline-date-box"

export default function Timeline() {
  return (
    <div className="flex flex-col flex-grow overflow-y-scroll text-white md:px-10">
      <TimelineDateBox year="2018" text="Zeitungszusteller bei der Rhein-Zeitung. Bis Ende 2019" title="Minijob als Zeitungszusteller" onRight={false}></TimelineDateBox>
      <TimelineDateBox
        year="2019-2020"
        text="Erste Erfahrungen beim Programmieren mit der Entwicklung eines 2D Spiels mit der Unity Game Engine. Das Spiel ist unter der Projekt-Seite als APK-Datei zu finden."
        title="Erste Erfahrungen mit der Programmierung"
        onRight={true}
      ></TimelineDateBox>
      <TimelineDateBox year="2020" month="Januar" text="Aushilfe bei der Zewotherm GmbH. Bis zum Start der Ausbildung August 2021" title="Minijob als Aushilfe" onRight={false}></TimelineDateBox>
      <TimelineDateBox year="2021" month="Juli" text="Erwerb der Mittleren Reifen an der IGS Remagen." title="Erwerb der Mittleren Reife" onRight={true}></TimelineDateBox>
      <TimelineDateBox
        year="2021"
        month="August"
        text="Start der Ausbildung als Fachinformatiker für Anwendungsentwicklung bei der Zewotherm GmbH. Voraussichtliches Ende der Ausbildung ist der 31.07.2024."
        title="Ausbildung zum Anwendungsentwickler"
        onRight={false}
      ></TimelineDateBox>
      <TimelineDateBox
        year="2023"
        month="August"
        text="Nebenher zur Ausbildung habe ich ein Einzelunternehmen gegründet, um Apps mit Flutter für Android und iOS und Webseiten mit NuxtJs zu entwickeln und zu veröffentlichen. (Link zu dem App Store und zur Website sind unter der Projekt-Seite zu finden.)"
        title="Gründung eines Einzelunternehmens"
        onRight={true}
      ></TimelineDateBox>
    </div>
  )
}
