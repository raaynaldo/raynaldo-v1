interface Experience {
  id: number;
  companyName: string;
  date: string;
  description: string;
  details?: Array<string>;
}

const experiences: Array<Experience> = [
  {
    id: 1,
    date: 'Jun 2021 - Apr 2023',
    companyName: 'VitusVet',
    description:
      'Maintained and enhanced critical features of the VitusVet platform, including a payment system that allowed pet owners to conveniently pay for transactions via text message or email, and a pharmacy system that empowered pet owners to easily order medication and have it delivered directly to their homes.',
    details: [
      'Independently designed and integrated a new payment system option using Twilio SendGrid email API, allowing pet owners to pay for transactions via email conveniently.',
      'Led the integration of DoorDash API to our delivery pharmacy system, building a webhook to keep customers updated on the status of their DoorDash deliveries in real time.',
      'Successfully modified the pharmacy database to enable the integration of our ordering medicine system with a third-party pet pharmacy company.',
      'Conducted interviews and provided mentorship to new software engineers, sharing knowledge and expertise to help them develop their skills and succeed in their roles.',
    ],
  },
  {
    id: 2,
    companyName: 'NTT ltd',
    date: 'Nov 2018 - Aug 2019',
    description:
      'Was part of the implementation team of the Regla IFRS 9 system for two of the top five banks in Indonesia. As IFRS9 is being implemented in Indonesia, there are new requirements for asset classification and how to model and calculate loan loss provision, which is more forward-looking and aligned with business objectives.',
    details: [
      'Designed and built the user interface for the IFRS9 application requirements, leveraging ASP.NET Web Forms to create a responsive and intuitive user experience.',
      'Contributed to the software architecture design, using efficient and effective frameworks to optimize the performance, accuracy, and stability of the application.',
      'Maintained the version control system (git) and provided mentorship to an intern, helping them to understand the project structure and workflow.',
      'Played a critical role in the migration of the web-based application, resolving technical issues and ensuring that the application was stable and performing optimally.',
      'Monitored the stability, accuracy, and performance of the application, using feedback from users to identify areas for improvement and implementing updates to enhance the user experience.',
    ],
  },
  {
    id: 3,
    companyName: 'Mitra Integrasi Informatika',
    date: 'Sep 2018 - Oct 2019',
    description:
      'Collaborated with a system analyst and led a development team in designing and building three web applications for Pertamina Indonesia, a leading government-owned oil company in Indonesia.',
    details: [
      "Provided evaluation of customer requirements in collaboration with system analysts, ensuring that each application was designed to meet the client's specific needs and requirements",
      'Developed three custom system applications using ASP.NET MVC, working closely with a team of developers to ensure that each application was delivered on time and within budget.',
      'Led the development team and created project milestones in collaboration with a system analyst to determine the main phases of development, providing guidance and support to team members throughout the development lifecycle.',
      "Deployed each system on the client's environment and was involved in the user acceptance test phase, ensuring that each application was thoroughly tested and met the client's expectations before release.",
    ],
  },
  {
    id: 4,
    companyName: 'Neurosoft Indonesia',
    date: 'May 2015 - Feb 2017',
    description:
      "As an intern at Neurosoft Indonesia, an active role was played in the development and maintenance of the company's software products. Work was done alongside experienced developers, learning and applying new programming techniques to support the creation of cutting-edge solutions for the retail industry.",
    details: [
      "Maintained and updated Neurosoft's HeadQuarter system, an integrated point of sales system using ASP.NET, in response to client requests.",
      "Developed the Sales and Vehicle modules for Honda's ERP system (NeuroMotor) using ASP.NET MVC.",
    ],
  },
];

export { experiences };
export type { Experience };
