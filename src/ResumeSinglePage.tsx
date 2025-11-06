import ReactModal from "react-modal";
import { useState } from "react";
import { Cpu, Github, Globe, GraduationCap, Languages, Mail, MapPinHouse, Phone, Zap } from "lucide-react";

ReactModal.setAppElement("#root");

export const ResumeSinglePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 bg-fixed bg-center py-10 px-6 md:px-12 lg:px-24"
      style={{ backgroundImage: "url('/bg-animation.gif')" }}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="p-8 lg:p-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <img className="w-[168px] h-[168px] object-cover object-center flex-shrink-0 rounded-xl mx-auto md:ml-[40px] md:mr-0"
                  src="/leo_profile.jpg" alt="Leo" />
                <div className="mt-4 md:mt-0 text-center md:text-left md:ml-[70px]">
                  <h1 className="flex justify-center text-3xl md:text-4xl font-extrabold tracking-tight pb-2">Nichanan Phopsira</h1>
                  <p className="flex justify-center text-xl md:text-2xl text-gray-700 font-medium">General Manager</p>
                  <section className="mb-6">
                    <p className="mt-2 text-gray-700 text-sm">A results-driven leader with expertise in team development and organizational management. Adept at optimizing workforce capabilities and operational efficiency. Brings valuable experience in marketing and customer service, supported by exceptional communication and interpersonal skills.</p>
                  </section>
                </div>
              </div>
            </div>
          </header>

          <hr className="my-4 border-gray-200" />
          <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: summary & skills */}
            <aside className="md:col-span-1">


              <section className="mb-6">
                <div className="text-sm text-gray-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPinHouse className="w-8 h-8 text-gray-700" />
                    <span>54/81 Phumvet 3 Rd., Pakkred, Nonthaburi, Thailand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-gray-700" />
                    (+66) 92-771-8029
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-gray-700" />
                    <a className="text-blue-600 underline" href="mailto:nicha_bz@hotmail.co.th">nicha_bz@hotmail.co.th</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5 items-center" src="/line_logo.png" alt="line" />
                    bzcrescent
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5 items-center" src="/telegram.webp" alt="telegram" />
                    <a
                      href="https://t.me/leo_9229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Telegram: @leo_9229
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-700" />
                    <a
                      href="https://github.com/leo-nicha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-700"
                    >
                      GitHub: leo-nicha
                    </a>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2" ><GraduationCap /><h3 className="font-semibold">Education</h3></div>
                <div className="mt-2 text-sm text-gray-700 space-y-3">
                  <div>
                    <strong>WeStride Institute of Technology</strong>
                    <div>Full-Stack Development (course)</div>

                    {/* ปุ่มเปิด popup */}
                    <button
                      onClick={() => setIsOpen(true)}
                      className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
                    >
                      View Certificate
                    </button>

                    {/* popup modal */}
                    <ReactModal
                      isOpen={isOpen}
                      onRequestClose={() => setIsOpen(false)}
                      className="bg-white p-4 rounded-xl max-w-2xl mx-auto mt-20 relative outline-none"
                      overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
                    >
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
                      >
                        ✕
                      </button>
                      <img
                        src="/westride-certificate.jpg"
                        alt="WeStride Certificate"
                        className="rounded-lg w-full object-contain"
                      />
                    </ReactModal>
                  </div>

                  <div>
                    <strong>Ramkhamhaeng University</strong>
                    <div>Faculty of Law — Studied 3 academic years (left to pursue professional opportunities)</div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Team Member in Leadership Training Program, supporting leadership workshops and student development activities.</li>
                    </ul>
                  </div>

                  <div>
                    <strong>Potinimit Wittayakom School</strong>
                    <div>Science and Mathematics Program — Grade 12</div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>President of the Student Council.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2" ><Languages /><h3 className="font-semibold">Languages</h3></div>
                <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                  <li>Thai</li>
                  <li>English</li>
                </ul>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2" ><Zap /><h3 className="font-semibold">Skills</h3></div>
                <ul className="mt-2 text-gray-700 text-sm list-disc list-inside space-y-1">
                  <li>Management & Leadership</li>
                  <li>Teamwork & Collaboration</li>
                  <li>Communication & Intercultural Skills</li>
                  <li>Adaptability & Mentoring</li>
                  <li>Strategic Thinking & Problem Solving</li>
                  <li>Customer Service</li>
                </ul>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2" ><Cpu /><h3 className="font-semibold">Technical & Tools</h3></div>
                <div className="mt-2 text-gray-700 text-sm space-y-2">
                  <div><strong>Office:</strong> Microsoft Office, Google Workspace</div>
                  <div><strong>Collab:</strong> Slack, Trello</div>
                  <div><strong>Gaming & Support:</strong> GM Tools, LiveChat, LINE OA</div>
                  <div><strong>Dev & Web:</strong> HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, REST API, Axios, Postman</div>
                  <div><strong>Database:</strong> MySQL</div>
                  <div><strong>Other:</strong> Adobe Photoshop, Git / GitHub</div>
                </div>
              </section>

              <section className="mb-6">
                <div className="flex items-center gap-2" ><Globe /><h3 className="font-semibold">Deployed Project</h3></div>
                <div className="mt-2 text-gray-700 text-sm space-y-2">
                  <div className=" text-sm"><strong>Horoscope App</strong> (Mobile Version)</div>
                  <p className="text-sm text-gray-700">
                    A responsive horoscope web app with daily zodiac readings and fortune features.
                  </p>
                  <div className="flex gap-4 text-sm justify-center mt-2">
                    <a
                      href="https://horoscope-app-eta-tawny.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-700"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/leo-nicha/horoscope-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-700"
                    >
                      Source Code
                    </a>
                  </div>
                  <div className="text-sm "><strong>Tech Stack:</strong> React, TypeScript, Tailwind CSS, REST API, Vite</div>
                </div>

              </section>

              <div className="flex justify-center">
                <a
                  href="/Nichanan Phopsira CV.pdf"
                  download="Nichanan Phopsira CV.pdf"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
                >
                  Download CV (PDF)
                </a>
              </div>

            </aside>



            {/* Right column: experience, education */}
            <section className="md:col-span-2">
              <section className="mb-6">
                <h2 className="text-xl font-semibold">Work Experience</h2>

                <div className="mt-4 space-y-6">
                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/oceangroupofcompanies_logo.jpeg" alt="oceangaming" />
                      <div className="ml-5">
                        <h3 className="font-semibold">Ocean Gaming Ltd.</h3>
                        <h4 className="text-sm">Metro Manila, Philippines</h4>
                        <h4 className="font-semibold">General Manager</h4>
                        <div className="text-sm text-gray-700">February 2024 - November 2024</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Developed and implemented strategic initiatives through collaborative brainstorming to improve overall business operations and efficiency.</li>
                      <li>Performed competitor analysis and strategic benchmarking to uncover market gaps and inform product positioning.</li>
                      <li>Developed brand awareness, maintain strong customer relationships, and foster customer loyalty.</li>
                      <li>Developed and execute business marketing plans and manage promotional activities.</li>
                      <li>Managed accounting operations and controlled budgets to optimize financial performance.</li>
                      <li>Managed affiliate marketing programs across Thailand, Vietnam, India, and Brazil.</li>
                      <li>Collaborated with Mooir Gaming (Douglas, Isle of Man) on operations management to enhance workflow efficiency and ensure compliance with international standards.</li>
                      <li>Experienced in Know Your Customer (KYC), Customer Due Diligence (CDD), risk assessment, and fraud detection.</li>
                      <li>Team management experience across Thailand and Vietnam, focusing on CSR and marketing initiatives.</li>
                      <li>Lead and train the Customer Service team to ensure adherence to Isle of Man Terms of Service, enhancing team performance and service quality.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/simba789_logo.jpg" alt="simba789" />
                      <div className="ml-5">
                        <h3 className="font-semibold">Simba789 Corporate</h3>
                        <h4 className="text-sm">Metro Manila, Philippines</h4>
                        <h4 className="font-semibold">General Manager</h4>
                        <div className="text-sm text-gray-700">June 2023 - January 2024</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Developed brand awareness, maintain strong customer relationships, and foster customer loyalty.</li>
                      <li>Developed and execute business marketing plans and manage promotional activities.</li>
                      <li>Managed accounting operations and controlled budgets to optimize financial performance.</li>
                      <li>Engaged customers via application to motivate and encourage investment activities.</li>
                      <li>Managed Facebook Ads and social media campaigns; performed sports analysis and prepared web content.</li>
                      <li>Handled marketing communication and community management across platforms including Facebook, Line, Twitter, Instagram, VK, and TikTok.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/wanfang_logo.jpg" alt="wanfang" />
                      <div className="ml-5">
                        <h3 className="font-semibold">WANFANG Technology Management Inc.</h3>
                        <h4 className="text-sm">Metro Manila, Philippines</h4>
                        <h4 className="font-semibold">Marketing Executive</h4>
                        <div className="text-sm text-gray-700">May 2022 - March 2023</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Developed brand awareness, maintain strong customer relationships, and foster customer loyalty.</li>
                      <li>Developed and execute business marketing plans and manage promotional activities. Contact customers through the application to motivate clients to invest.</li>
                      <li>Managed Facebook Ads and social media campaigns, performed sports analysis and prepared web content.</li>
                      <li>Handled marketing communication and community management across platforms including Facebook, Line, Twitter, Instagram, VK, and TikTok.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/wonmajestic_logo.jpg" alt="wonmajestic" />
                      <div className="ml-5">
                        <h3 className="font-semibold">WON Majestic Co., Ltd.</h3>
                        <h4 className="text-sm">Metro Manila, Philippines / Sihanoukville, Cambodia</h4>
                        <h4 className="font-semibold">General Manager</h4>
                        <div className="text-sm text-gray-700">April 2016 - May 2022</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Managed teams and conducted training courses and workshops for CSR and Marketing departments to enhance skills and performance.</li>
                      <li>Handled recruitment, employee management, and accounting operations to support organizational growth and efficiency.</li>
                      <li>Assisted in business marketing plan development and contributed to graphic design projects.</li>
                      <li>Conducted in-game system testing, translated content, and planned promotions and events.</li>
                      <li>Collaborated with esports teams, Net Idols, Influencer, and partners to promote websites and products.</li>
                      <li>Wrote game guides, news articles, analyses, reviews, and previews to engage and inform the gaming community.</li>
                      <li>Provided customer support and coordinated with related departments to resolve issues via Phone, LINE, Messenger, and LiveChat.</li>
                      <li>Social Media Administrator - Managed social media accounts, created content, and analyzed engagement metrics to improve reach and performance.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/kingsoft_logo.jpg" alt="kingsoft" />
                      <div className="ml-5">
                        <h3 className="font-semibold">Kingsoft Corporation Limited</h3>
                        <h4 className="text-sm">Kuala Lumpur, Malaysia</h4>
                        <h4 className="font-semibold">Senior Product Executive</h4>
                        <div className="text-sm text-gray-700">November 2014 - April 2016</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Cooperated with partners to promote games and products.</li>
                      <li>Conducted in-game system testing, wrote game guides, translated content, and planned events.</li>
                      <li>Wrote news articles, reviews, and previews, and created artwork related to the company's games for game magazines and gaming news websites.</li>
                      <li>Assisted customers and coordinated with related departments to resolve customer issues.</li>
                      <li>Social Media Administrator – Managed social media accounts, created content, and analyzed engagement metrics to improve reach and performance.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/clickalot_logo.jpg" alt="clickalot" />
                      <div className="ml-5">
                        <h3 className="font-semibold">Clickalot Co., Ltd.</h3>
                        <h4 className="text-sm">Bangkok, Thailand</h4>
                        <h4 className="font-semibold">Esports Tournament Planner</h4>
                        <div className="text-sm text-gray-700">May 2014 - November 2014</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Planned online and offline esports tournaments.</li>
                      <li>Management and Event Staff for a Game Competition.</li>
                      <li>Cooperated with the esports team and partners to promote games, products, and tournaments.</li>
                      <li>Wrote news articles, reviews, and previews related to the company's games for game magazines and gaming news websites.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/ini3_logo.jpg" alt="ini3" />
                      <div className="ml-5">
                        <h3 className="font-semibold">Ini3 Digital PLC</h3>
                        <h4 className="text-sm">Bangkok, Thailand</h4>
                        <h4 className="font-semibold">Community Creator</h4>
                        <div className="text-sm text-gray-700">September 2013 - May 2014</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Provided customer support and coordinated with relevant departments to efficiently resolve player issues.</li>
                      <li>Collaborated with the development team to test and ensure the functionality and stability of game systems.</li>
                      <li>Wrote game guides, news articles, reviews, and previews related to the company's games for game magazines and gaming news websites.</li>
                      <li>Worked as MC, event coordinator, and narrator in various game tournaments.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/gameindy_logo.jpg" alt="gameindy" />
                      <div className="ml-5">
                        <h3 className="font-semibold">GAMEINDY</h3>
                        <h4 className="text-sm">Bangkok, Thailand</h4>
                        <h4 className="font-semibold">Game Master</h4>
                        <div className="text-sm text-gray-700">May 2013 - August 2013</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Provided customer support and coordinated with relevant departments to efficiently resolve player issues.</li>
                      <li>Collaborated with the development team to test and ensure the functionality and stability of game systems.</li>
                      <li>Wrote game guides, news articles, reviews, and previews related to the company's games for game magazines and gaming news websites.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex">
                      <img className="w-[92px] h-[92px] rounded-xl" src="/asiasoft_logo.jpg" alt="asiasoft" />
                      <div className="ml-5">
                        <h3 className="font-semibold">Asiasoft Corporation Public Company Limited</h3>
                        <h4 className="text-sm">Bangkok, Thailand</h4>
                        <h4 className="font-semibold">Game Support Staff</h4>
                        <div className="text-sm text-gray-700">August 2008 - February 2013</div>
                      </div>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                      <li>Provided customer support and coordinated with relevant departments to efficiently resolve player issues.</li>
                      <li>Collaborated with the development team to test and ensure the functionality and stability of game systems.</li>
                      <li>Wrote game guides, news articles, reviews, and previews related to the company's games for game magazines and gaming news websites.</li>
                      <li>Worked as MC, event coordinator, and narrator in various game tournaments.</li>
                    </ul>
                  </div>
                </div>
              </section>


            </section>
          </main>

          <footer className="text-center text-gray-500 text-sm py-4 border-t mt-5">
            <p>© 2025 Nichanan Phopsira. All rights reserved.</p>
            <p>Tech Stack: React · TypeScript · Tailwind CSS · Vite </p>
            <p>Deployed on Vercel</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
