import TimelineDateBox from "./timeline-date-box"

export default function Timeline() {
  return (
    <div className="flex flex-col flex-grow overflow-y-scroll text-white md:px-10 cursor-default lg:pb-14">
      <TimelineDateBox
        year="2019-2020"
        text="Initial experiences in programming by developing a 2D game using the Unity Game Engine and first experience with Javascript and Web Development"
        title="Initial Programming Experiences"
        onRight={true}
      ></TimelineDateBox>
      <TimelineDateBox year="2020" month="January" text="Part-time work at Zewotherm GmbH. Continued until the start of german Ausbildung in August 2021." title="Part-Time Job as Assistant" onRight={false}></TimelineDateBox>
      <TimelineDateBox year="2021" month="July" text="Achieved Middle maturity Certificate at IGS Remagen." title="Achievement of Middle maturity Certificate" onRight={true}></TimelineDateBox>
      <TimelineDateBox
        year="2021"
        month="August"
        text="Commenced training as an application developer at Zewotherm GmbH. Expected completion of the german Ausbildung is on July 31, 2024."
        title="German Ausbildung as an Application Developer (FIAE)"
        onRight={false}
      ></TimelineDateBox>
      <TimelineDateBox
        year="2023"
        month="August"
        text="In addition to the training, I established a sole proprietorship to develop and publish apps with Flutter for Android and iOS and websites with NuxtJs. (Links to the App Store and the website are available on the project page.)"
        title="Establishment of a Sole Proprietorship"
        onRight={true}
      ></TimelineDateBox>
    </div>
  )
}
