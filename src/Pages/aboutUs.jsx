import Covid19 from "../svgs/Covid-19 Business Response Hackathon 2020.png"
import smartCities from "../svgs/smartCities.png"
import sustainability from "../svgs/Sustainability Hackathon 2022.png"
import digitalHealth from "../svgs/Digital Health Hackathon 2021.png"

export default function AboutUs() {
  return (
    <>
      <div>
        <h1 class="text-center text-2xl md:text-5xl md:pb-8 font-bold mb-3 text-my-red">
          What is Hackathon?
        </h1>
      </div>
      <div class="max-w-lg md:w-full mb-3 lg:max-w-full lg:flex">
        <div class="bg-white border-3 border-solid rounded-lg border-my-red p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-black font-bold text-center text-xl mb-2"></div>
            <div class=" hover:text-my-red  md:ml-5 font-gotham font-bold md:text-center text-2xl md:text-3xl text-my-red mb-2">About Hackathon</div>
            <p class="text-black  font-gotham text-lg md:text-justify">Seneca Hackathon is a student-focused innovation competition that offers a unique experiential learning experience. It encourages and develops creative thinking, entrepreneurship, and problem-solving skills by bringing students from diverse backgrounds to work together on addressing real-world challenges. </p>
            <p class="text-black  font-gotham text-lg md:text-justify">Participating teams receive support from subject-specific mentors and technical specialists as they tackle problems within their chosen challenge category. Solutions will be evaluated by a panel of experts consisting of investors, partners, school representatives, and domain specialists. Winning teams will receive prizes and will be considered for applied research project investment opportunity. </p>

            <div class=" hover:text-my-red  md:ml-5 font-bold font-gotham md:text-center text-2xl md:text-3xl text-my-red mb-2">Challenge Statement</div>
            <p class="text-black font-gotham  text-lg md:text-justify">
            The Seneca Housing Hackathon is a response to the current pressing challenges of Canada's
            housing crisis. It aims to address a spectrum of challenges and explore opportunities within the
            housing sector.
            </p>
          </div>
          <div class="flex items-center">
          </div>
        </div>
      </div>

      <div class="max-w-lg md:w-full mb-3 lg:max-w-full lg:flex ">
        
        <div class="bg-white border-3 border-solid rounded-lg border-my-red p-4 flex flex-col justify-between leading-normal">
          <div class="">
            <div class="md:text-3xl text-my-red font-gotham hover:text-my-red  font-bold md:text-center text-2xl md:ml-5 mb-2">How it all started</div>
            <p class="text-black font-gotham text-lg md:text-justify">Seneca Hackathon began in July 2020 as a response to the COVID-19 pandemic – gathering passionate students to channel their talents and skills into crafting solutions that will address the challenges brought forth by the pandemic. The success of the first Hackathon paved the way for it to evolve into an annual contest with the goal to tackle the most relevant and pressing issues of our society.  </p>
          </div>
          <div class="flex h-1 rounded-full bg-my-red my-2"></div>
          <section class="pt-5">
      <div class="container px-4 md:mx-auto">
        <div class="mb-16 max-w-3xl md:max-w-4xl mx-auto ">
          <h2 class=" mb-4 text-4xl text-center font-gotham lg:text-5xl text-my-red font-bold font-heading">Our Past Hackathons</h2>
          <p class="text-lg text-black md:text-justify font-gotham leading-loose">This is our showcases which is full of innovative ideas from our previous hackathons. Here lies the themes, challenges, and teams behind these cutting-edge projects that solved complex problems. Explore this section for inspiration and to see the exciting world of our past hackathons!</p>
        </div>
        <div class="flex  flex-wrap mx-auto mb-12">
          <a class="w-full no-underline md:w-1/2 md:px-4 mb-8" href="https://2023.senecahackathon.com/" target="_blank">
            <div class="p-6 bg-white border-solid border-my-red rounded-lg">
              <div class="relative md:h-40 mb-6">
                <img class="w-full md:h-fit object-cover rounded-lg" src={smartCities} alt=""></img>
              </div>
              <span class="inline-block md:pt-20 text-xs font-bold font-gotham text-gray-500">2023</span>
              <h2 class="mb-2 text-2xl text-my-red font-bold font-gotham font-heading">Smart Cities Hackathon</h2>
              <p class="mb-4 text-lg text-black font-gotham leading-loose">The Smart Cities Hackathon 2023 provides a unique experiential learning experience. It encourages and develops creative thinking, entrepreneurship, and problem-solving skills by bringing together students from diverse backgrounds to work together on addressing real-world challenges. The teams receive support from subject-specific mentors and technical specialists. They then showcase their solutions in a fun and lively environment to be adjudicated by a panel of experts consisting of investors, partners, school representatives, and domain specialists.<br></br></p>
              
            </div>
          </a>
          <a class="w-full md:h-fit md:w-1/2 md:px-4 no-underline mb-8" href="https://sustainability.senecahackathon.com/" target="_blank">
            <div class="p-6 bg-white border-solid border-my-red rounded-lg">
              <div class="relative md:h-40 mb-6">
                <img class="h-full w-full md:h-64 object-scale-down md:object-contain rounded-lg" src={sustainability} alt=""></img>
              </div>
              <span class="inline-block md:pt-20 text-xs font-bold font-gotham text-gray-500">2022</span>
              <h2 class="mb-2 text-2xl text-my-red  font-bold font-gotham font-heading">Sustainability Hackathon</h2>
              <p class="mb-4 text-lg text-black font-gotham leading-loose">The Seneca Sustainability Hackathon brought together individuals with passion for sustainability to generate innovative solutions to environmental challenges. Participants worked in teams to develop sustainable solutions that addressed a range of environmental issues, including climate change, waste reduction, and biodiversity conservation.</p><br></br><br></br><br></br>
              
            </div>
          </a>
          <a class="w-full md:w-1/2 no-underline md:px-4 mb-8">
            <div class="p-6 bg-white border-solid border-my-red rounded-lg">
              <div class="relative md:h-40 mb-6">             
                <img class="w-full md:h-fit object-cover rounded-lg" src={digitalHealth} alt=""></img>
              </div>
              <span class="inline-block md:pt-20 text-xs font-bold text-gray-500 font-gotham">2021</span>
              <h2 class="mb-2 text-2xl text-my-red font-bold font-heading font-gotham">Digital Health Hackathon</h2>
              <p class="mb-4 text-lg text-black leading-loose font-gotham">The Digital Health Hackathon gathered healthcare professionals, software developers, designers, and entrepreneurs to develop innovative digital solutions to healthcare challenges. Teams brainstorm, design, and develop solutions that span from elderly care support, vaccination passport, patient data consent system, mental health support networks, telemedicine, and more.</p>
              
            </div>
          </a>
          <a class="w-full md:w-1/2 no-underline md:px-4 ">
            <div class="p-6 bg-white border-solid border-my-red rounded-lg">
              <div class="relative md:h-40 mb-6">               
                <img class="w-full md:h-fit object-cover rounded-lg" src={Covid19} alt=""></img>
              </div>
              <span class="inline-block md:pt-20 text-xs font-bold text-gray-500 font-gotham">2020</span>
              <h2 class="mb-2 text-2xl text-my-red font-bold font-heading font-gotham">Covid-19 Business Response Hackathon</h2>
              <p class="mb-4 text-lg text-black leading-loose font-gotham">The COVID-19 Business Response Hackathon was initiated to solve some of the most important issues affecting our society as a result of the pandemic. Participants worked on technical solutions to COVID-19 related issues such as remote work and education, supply chain optimization, healthcare infrastructure, etc.</p>
              
            </div>
            </a>
          </div>
      </div>
    </section>
    <div class="flex h-1 mb-4 rounded-full bg-my-red"></div>

    <div class="text-black font-gotham md:px-20 ml-5 mb-2">
            <h2 class="mb-5  font-gotham text-4xl text-my-red font-semibold font-heading">Who we are</h2>
              <h2 class="mb-3 text-2xl font-gotham text-my-red italic font-bold font-heading">Our vision </h2>
              <p class="mb-10 text-lg font-gotham md:text-justify text-black">Empowering innovation, fostering collaboration.</p>
              <h2 class="mb-3 text-2xl font-gotham text-my-red italic font-bold font-heading">Our mission </h2>
              <p class="mb-3 text-lg font-gotham text-centr md:text-justify text-black">Uniting talents with shared passion </p>
              <ul role="list" class="mb-6 text-lg marker:text-my-red font-gotham list-disc pl-5 space-y-3 text-black md:text-justify">
                <li>(Commitment to Participants) Create innovative and impactful hackathon experience. </li>
                <li>(Commitment to Hackathon Organizing Committee) Set new standards for excellence in organizing hackathons. </li>
                <li>(Commitment to Staff Member) Foster a community of dedicated to continuous learning and growth. </li>
              </ul>
              <h2 class="mb-3 text-2xl font-gotham text-my-red italic font-bold font-heading">Our Manifesto  </h2>
              <ul role="list" class="pb-3 text-lg font-gotham marker:text-my-red list-disc pl-5 space-y-3 text-black md:text-justify">
                <li>Diverse – Diversity in team composition greatly affects outcome. </li>
                <li>Inclusive – No program or level of experience is left out. </li>
                <li>Fun – Incredible energy level, creativity, networking, teamwork, prices, SWAG  </li>
                <li>By Students – For Students – Top experiential learning opportunities  </li>
                <li>Market Value Accelerator – Resume builder, interview content, micro-credential </li>
              </ul>
            </div>
          <div class="flex items-center">
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

