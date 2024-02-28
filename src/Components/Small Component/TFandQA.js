export default function QandA() {
  return (
    <>
     

     <section class="relative py-4 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="p-16 bg-my-red rounded-3xl">
      <div class="flex flex-wrap items-center justify-between -m-6">
        <div class="w-full md:w-2/3 p-6">
          <div class="md:max-w-max">
          <h2 class="font-heading font-gotham font-bold text-3xl md:text-5xl text-white">Are you still looking for a team?</h2>
            <h3 class="font-heading font-gotham font-bold text-2xl md:text-3xl pb-6 text-white">Team Formation with Q&A Session (2/29)</h3>
            <p class="mb-5 font-heading font-gotham text-white font-medium text-xl  text-opacity-60">If you're still searching for your dream team or missed our previous mixer event, this is your last opportunity to connect, brainstorm, and explore the challenge sets before the registration close.</p>

          </div>
        </div>
        <div class="w-full md:w-1/3 p-6">
          <div class="flex flex-wrap justify-end -m-2">
            <div class="w-full xl:w-auto p-2 ">
            <div className="button block bg-white border-2 border-solid border-black text-my-red rounded-4 ">
                  <a
                    href={`https://forms.office.com/pages/responsepage.aspx?id=Svc06-dYi0qeWUM-TEEnV3fazVRpTItKkbymSXpvhlRUMzdBNEgyTk9PRkoxUzdGSkNLNEpPSlc2OS4u`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="font-bold  bg-white text-2xl text-black">
                      Sign Up Now
                    </button>
                  </a> 
                  
            </div>
            <div class="bg-my-red p-4 ">
                <div class="flex items-center mb-4">
                    <div class="text-lg text-white font-semibold">Event Details</div>
                </div>
                <div class="flex items-center mb-2">
                    <div class="text-white">📅 Date: February 29th, 2024</div>
                </div>
                <div class="flex items-center mb-2">
                    <div class="text-white">🕔 Time: 1:00 PM – 3:00 PM</div>
                </div>
                <div class="flex items-center">
                    <div class="text-white">📍Location: Seneca Newnham A1531AB (Great Hall)</div>
                </div>
                </div>

           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
