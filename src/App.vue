<template>
  <section class=" h-screen  overflow-auto !overflow-y-hidden bg-tona-dark-300 flex flex-col px-3">
    <div class="flex-1 bg-hero">
      <div class="page-view xl:w-[1320px] mx-auto">
        <div class="py-10   ">
          <div class="flex-items-between">
            <div class="flex-items-center gap-10">
              <h3 class="text-white text-[25px] font-bold cursor-pointer">Gyamficodes</h3>
              <!-- icon view start -->
              <div class="flex-items-center gap-3  hidden lg:flex">
                <i class="lni lni-envelope text-tona-blue text-[28px]"></i>
               
       <span class="  text-indigo-200">gyamfijohn08@gmail.com</span>
                </div>
                
                <!-- icon view end -->

   <!-- icon view start -->
   <div class="flex-items-center gap-3  hidden lg:flex">
                 
        <i class="lni lni-phone text-tona-blue text-[28px]"></i>
  <span class=" text-indigo-200">+233 278950086</span>
                </div>
                <!-- icon view end -->

            </div>
            <div class="flex-items-center gap-4  hidden  lg:flex">
   <!-- icon box start -->
   <div class="w-[40px] h-[40px] bg-tona-dark-200 rounded-lg flex-items-full-center cursor-pointer  text-indigo-200 hover:bg-tona-blue hover:text-white">
                    <a href="https://github.com/gyamficodes" class=" flex items-center justify-center">  <i class="lni lni-github-original"></i></a>
              </div>
              <!-- icon box end -->


<!-- icon box end -->

                     <!-- icon box start -->
                     <div class="w-[40px] h-[40px] bg-tona-dark-200 rounded-lg flex-items-full-center cursor-pointer  text-indigo-200 hover:bg-tona-blue hover:text-white">
                    <a href="https://www.linkedin.com/in/gyamfi-john-23aa5727b/" class=" flex items-center justify-center">  <i class="lni lni-linkedin-original"></i></a>
              </div>
              <!-- icon box end -->

              <!-- icon box start -->
              <div class="w-[40px] h-[40px] bg-tona-dark-200 rounded-lg flex-items-full-center cursor-pointer  text-indigo-200 hover:bg-tona-blue hover:text-white">
               <a href="mailto:gyamfijohn08@gmail.com" class=" flex items-center justify-center"> <i class="lni lni-envelope "></i></a>
              </div>
              
            
                     <!-- icon box start -->
                     <div class="w-[40px] h-[40px] bg-tona-dark-200 rounded-lg flex-items-full-center cursor-pointer  text-indigo-200 hover:bg-tona-blue hover:text-white">
                     <a href="https://www.instagram.com/gyamficodes_tech" class=" flex items-center justify-center"> <i class="lni lni-instagram"></i></a>
              </div>
              <!-- icon box end -->

                  
            </div>
            <!-- menu-icon start -->
            <div @click="handdleChangeIcon"   class=" w-[45px] h-[45px] border border-[#FFFFFF1A] flex items-center justify-center cursor-pointer    lg:hidden rounded-md relative " >
              <i class="lni lni-menu   text-white text-[30px]" v-if="showIcon"></i>
              <i class="lni lni-close   text-white text-[30px]" v-else></i>
                  
            </div>

            <!-- menu-icon start -->
          </div> 
        </div>
        <div class="relative lg:hidden">
            <!-- mobile side bar start -->
            <div class=" absolute right-0 top-0 ">
                    <div class=" flex flex-col  overflow-hidden relative  z-[999]">
                      <div   @click="handleScrollToView('.body-view')" :class="{ 'translate-x-72': showIcon, '-translate-x-0': !showIcon }"  class=" h-[55px] w-[250px] cursor-pointer sm:w-[300px]  rounded-lg rounded-r-none px-3 flex  items-center bg-blue-700 font-[600] capitalize  group text-white  transition-all duration-700"><span class=" transition-all duration-150 group-hover:translate-x-3">Home</span></div>
                      <div @click="handleScrollToView('.feature-view')" :class="{ 'translate-x-72': showIcon, '-translate-x-0': !showIcon }" class=" h-[55px] w-[250px] cursor-pointer  sm:w-[300px] rounded-lg rounded-r-none px-3 flex  items-center bg-blue-700 font-[600] capitalize  group text-white   transition-all duration-500"><span class=" transition-all duration-150 group-hover:translate-x-3">services</span></div>
                      <div @click="handleScrollToView('.about-view')"  :class="{ 'translate-x-72': showIcon, '-translate-x-0': !showIcon }" class=" h-[55px] w-[250px] cursor-pointer  sm:w-[300px] rounded-lg rounded-r-none px-3 flex  items-center bg-blue-700 font-[600]  group text-white   transition-all duration-300"> <span class=" transition-all duration-150 group-hover:translate-x-3">about me</span></div>
                      <div @click="handleScrollToView('.skill-view')" :class="{ 'translate-x-72': showIcon, '-translate-x-0': !showIcon }" class=" h-[55px] w-[250px] cursor-pointer sm:w-[300px] rounded-lg rounded-r-none px-3 flex  items-center bg-blue-700 font-[600] capitalize group text-white   transition-all duration-200">  <span class=" transition-all duration-150 group-hover:translate-x-3">skills</span></div>
                      <div @click="handleScrollToView('.project-view')"  :class="{ 'translate-x-72': showIcon, '-translate-x-0': !showIcon }" class=" h-[55px] w-[250px] cursor-pointer  sm:w-[300px] rounded-lg rounded-r-none px-3 flex  items-center bg-blue-700 font-[600] capitalize group text-white   transition-all duration-150">  <span class=" transition-all duration-150 group-hover:translate-x-3">my projects</span></div>
                    <div @click="handleScrollToView('.contact-view')"  :class="{ 'translate-x-72': showIcon, '-translate-x-0': !showIcon }"  class=" h-[55px] w-[250px] cursor-pointer sm:w-[300px] rounded-lg rounded-r-none px-3 flex  items-center bg-blue-700 font-[600] capitalize group text-white   transition-all duration-100">  <span class=" transition-all duration-150 group-hover:translate-x-3">contact me</span></div>
                    </div>
                  </div>
                  <!-- mobile side bar end -->

            </div>
        <div class="relative hidden lg:flex">
          <div class="bg-tona-dark-200 w-[92px] border-2 rounded-2xl border-[#293245] absolute -left-[40px] top-[180px] z-10 flex-item-col overflow-hidden">
           <!-- menu start -->
            <div @click="handleScrollToView('.body-view')" class="h-[92px] w-full flex-items-full-center border-b-2 border-[#293245] text-white cursor-pointer hover:bg-tona-blue ">
              <i class="lni lni-home text-[35px]"></i>
          </div>
          <!-- menu end -->

                  <!-- menu start -->
                  <div @click="handleScrollToView('.about-view')" class=" h-[92px] w-full flex-items-full-center border-b-2 border-[#293245] text-white cursor-pointer hover:bg-tona-blue ">
                    <i class="lni lni-user text-[35px]"></i>
          </div>
          <!-- menu end -->

                  <!-- menu start -->
                  <div  @click="handleScrollToView('.about-view')" class=" h-[92px] w-full flex-items-full-center border-b-2 border-[#293245] text-white cursor-pointer hover:bg-tona-blue ">
             
              <i class="lni lni-remove-file text-[35px]"></i>
          </div>
          <!-- menu end -->

                  <!-- menu start -->
                  <div @click="handleScrollToView('.skill-view')" class=" h-[92px] w-full flex-items-full-center border-b-2 border-[#293245] text-white cursor-pointer hover:bg-tona-blue ">
                    <i class="lni lni-rocket text-[35px]"></i>
          </div>
          <!-- menu end -->

                  <!-- menu start -->
                  <div @click="handleScrollToView('.project-view')" class=" h-[92px] w-full flex-items-full-center border-b-2 border-[#293245] text-white cursor-pointer hover:bg-tona-blue ">
            
              <i class="lni lni-laptop-phone text-[35px]"></i>
          </div>
          <!-- menu end -->

                  <!-- menu start -->
                  <!-- <div class=" h-[92px] w-full flex-items-full-center border-b-2 border-[#293245] text-white cursor-pointer hover:bg-tona-blue ">
          
              <i class="lni lni-comments-alt-2 text-[35px]"></i>
          </div> -->
          <!-- menu end -->

                  <!-- menu start -->
                  <div @click="handleScrollToView('.contact-view')" class=" h-[92px] w-full flex-items-full-center text-white cursor-pointer hover:bg-tona-blue ">
              <i class="lni lni-phone text-[35px]"></i>
          </div>
          <!-- menu end -->
          </div>

        
        </div>
        <div class="  h-[80vh] bg-tona-dark-200 w-full   overflow-hidden overflow-y-auto relative  rounded-2xl lg:pl-[56px]  xl:pl-[100px] xl:pr-[50px] py-10">
          
          <!-- Banner section start -->
          <div class="grid sm:grid-col-1 lg:grid-cols-2 gap-5 w-full ">
            <div class="flex-item-col gap-4  mt-[130px]">
              <div class="flex-items-center">
                <img :src="Wave" alt="wave" />
                <h1 class=" text-[45px] md:text-[55px] font-semibold text-white">
                    Hello, I am 
                </h1>
                
              </div>
              <h1 class="text-[45px] md:text-[55px]font-semibold leading-[1.02] text-white mt-[-25px]">
                  Gyamfi John <br/> Frontend Developer.
                </h1>
          
              <p class="text-white text-[40px] capitalize ">A digital craftsman.</p>
              <p class=" text-[#fff]">I'm passionate about creating experiences that are easy to use, accessible, and that meet the user's needs.</p>
            
              <div class="flex-items-center flex-col sm:flex-row gap-4">
                <div class="py-2 px-6 w-[100%] sm:w-[150px] flex-items-full-center bg-tona-blue rounded-lg cursor-pointer  hover:bg-blue-500">
                  <a href="mailto:gyamfijohn08@gmail.com"><span class="text-white">Hire Me</span></a>
                </div>
                <div class="py-2 px-6 w-[100%] sm:w-[180px] flex-items-full-center border-[1px] border-white rounded-lg cursor-pointer  hover:bg-tona-blue hover:border-tona-blue">
                 <a href="/public/gyamfiresume.pdf" download="gyamfiresume.pdf" > <span class="text-white ">Download CV</span></a>
                </div>
              </div>

            </div>
            <div class="relative body-view mt-[70px]">
              <div class=" absolute w-[250px] h-[250px]   rounded-full bg-tona-blue left-[25%] top-[30%] animate-ping"></div>
              <img :src="PortFolioImage" alt="portfolio"  class="z-[1] relative"/>
            </div>
          </div>
          <!-- Banner section end -->
        
          
          <!-- Feature section end -->
              <div>
              
              </div>
          <!-- About section start  -->

          <div class="py-20 about-view">
            <div class="border-b border-[#494C5F] pb-3">
                        <h3 class="text-white text-2xl capitalize">about</h3>
                      </div>
                      <p class="text-[#fff] mt-5">I'm a 22 year old developer living in Ghana West Africa. I discovered my passion for coding after seeing my brother do it. I fell in love with using my creativity to build things for the web. Through persistence, self-discipline, and commitment, I achieved my goal of becoming a frontend developer. What kept me on this journey is that I always find learning new things exciting and facing unfamiliar challenges. In addition to coding, I enjoy building side projects because it allows me to explore my creativity and accomplish exciting things.</p>

          </div>

          <!-- About section end -->
      
          <!-- Skils section start -->
          <div class="pt-1 pb-10 skill-view">
                      <div class="border-b border-[#494C5F] pb-3">
                        <h3 class="text-white text-2xl">Skills</h3>
                      </div>
                      <ul class="mt-7 grid lg:grid-cols-2 gap-3 gap-y-6">
                      <!-- frontend -->
                      <div>
                      <h1 class="text-[#fff] mb-3">Backend Tech Stack</h1>
                        <div class="flex flex-wrap gap-3">
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Html</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">CSS</a>
                        </li>
              
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Sass</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Less</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Bootstrap</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Javascript</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Typescript</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Jquery</a>
                        </li>
  
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Webpack</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Tailwind Css</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Vue</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Vite</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Nuxt JS</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Vuex</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Pinia</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">React</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Next.Js</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Redux</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Redux Saga</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">StoryBook</a>
                        </li>
                       
                      
                      </div>
                      </div>
                        <!-- frontend -->
                  
                       <!-- backend -->
                       <div>
                      <h1 class="text-[#fff] mb-3"> Backend Tech Stack</h1>
                        <div class="flex flex-wrap gap-3">
              
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Php</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Laravel</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Postgresql</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Memcached</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">MYSQL</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Redis</a>
                        </li>
                      </div>
                      </div>
                        <!-- backend -->
                       
                           <!-- frontend -->
                      <div>
                      <h1 class="text-[#fff] mb-3">Other Tech Stack</h1>
                        <div class="flex flex-wrap gap-3">
                       
                      
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">GraphQl</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Version Control (Git/Github)</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Postman</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Jira Software</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Scrum</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Figma</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Jest(vitest)</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Adobe XD</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Adobe Photoshop</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Vercel</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">Nestlify</a>
                        </li>
                        <li>
                          <a href="#" class="bg-[#16213B] block px-4 py-3 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-xl">CI/CD</a>
                        </li>
                      </div>
                      </div>
                        <!-- frontend -->
                      </ul>
                    </div>
          <!-- Skils section end -->
      <!-- Skils section start -->
             <div class="py-10 ">
              <div class="border-b border-[#494C5F] pb-3">
                <h3 class="text-white text-2xl">Experience</h3> 
              </div>
                 <div class=" mt-4">
                 <!-- fennel -->
                 <div class="flex   lg:flex-row  flex-col gap-3 ">
                    <div class=" lg:w-[20%]">
                      <h1 class="w-full text-[#fff] ">Sep 2022 - Feb 2024</h1>
                    </div>
                      <div class="flex-1">
                     <h1 class="text text-[#fff] mb-2">FennelSoft - Frontend Developer</h1>
                     <p class="text-[#fff] text-[15px]">Worked with the product team to develop Complete hotel management software for seamless operations and guest satisfaction. I also ensured that the platform works smoothly on different devices. I used BrowserStack to recreate mobile environments and gain valuable insights for the development process. Additionally, I used Pact to create API contracts with mock data, making testing and development more efficient. I had experience working in Jira.</p>
                     <div class="flex items-center flex-wrap gap-1">
                      <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">C#</a>
                      <a href="#" class="bg-[#16213B] block border px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">.Net</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Blazor</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Javascript</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Jquery</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">MVC</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Jira</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">TailwindCss</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">MSSQL</a>
                     </div>
                      </div>
                 </div>
             <!-- fennel -->

             <!-- anz -->
             <div class="flex   lg:flex-row  flex-col gap-3  mt-5">
                    <div class=" lg:w-[20%]">
                      <h1 class="w-full text-[#fff] ">Nov 2021 - Aug 2022</h1>
                    </div>
                      <div class="flex-1">
                     <h1 class="text text-[#fff] mb-2">Eziteck Solution - Frontend Developer</h1>
                     <p class="text-[#fff] text-[15px]">Experienced frontend developer at Eziteck Solution, specializing in implementing enterprise applications for food delivery platforms. Proficient in creating user-friendly interfaces and optimizing frontend performance to enhance the user experience. Dedicated to delivering high-quality solutions that meet client needs and drive business success.</p>
                     <div class="flex items-center flex-wrap gap-1">
                      <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Vue</a>
                      <a href="#" class="bg-[#16213B] block border px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Nuxt.Js</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Php</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Laravel</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Storybook</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Style Components</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Jira</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">TailwindCss</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Vitest</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Typescript</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">vite</a>
                     </div>
                      </div>
                 </div>
             <!-- anz -->

                 <!-- anz -->
                 <div class="flex   lg:flex-row  flex-col gap-3  mt-5">
                    <div class=" lg:w-[20%]">
                      <h1 class="w-full text-[#fff] ">Jan 2020 - Sep 2021</h1>
                    </div>
                      <div class="flex-1">
                     <h1 class="text text-[#fff] mb-2">HardworkingTech - Frontend Developer</h1>
                     <p class="text-[#fff] text-[15px]">Led the development of several products E2E,from identifying system requirements and partner dependencies to workload balancing, software implementation,engineering,testing,and configuring metrics,alarms,monitors,and dashboards. And I also help in designing and implementing user interfaces that enhance the overall user experience of web applications.</p>
                     <div class="flex items-center flex-wrap gap-1">
                      <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Vue</a>
                      <a href="#" class="bg-[#16213B] block border px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Nuxt.Js</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Storybook</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">TailwindCss</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Vitest</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">Typescript</a>
                          <a href="#" class="bg-[#16213B] border block px-1 py-1 hover:bg-new-500 hover:text-interface-100 transition duration-300 rounded-md text-white text-[14px]">vite</a>
                     </div>
                      </div>
                 </div>
             <!-- anz -->
                 
                 </div>


             </div>
 <!-- Skils section end -->


          <!-- Project section -->

          <div class="py-10 project-view">
            <div class="flex flex-col sm:flex-row justify-between gap-4 items-center pb-10">
                    <h1 class="sm:w-1/2 w-full text-white font-work font-bold text-3xl sm:text-[42px]">
                      Let’s Check <br>
                      my Best work
                    </h1>

                    <!-- <a href="#" class="sm:px-8 px-3 py-3 border border-borderl-500 text-lg font-medium tex rounded-lg">
                      See&nbsp;More
                    </a> -->
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">


                    <div class="group w-full h-[240px] relative cursor-pointer ">
                      <div class=" bg-[#000000d7] absolute w-full h-0 flex items-center overflow-hidden justify-center flex-col gap-2 px-5 text-center transition-all ease-in-out duration-300 group-hover:h-full">
                        <h3 class="text-white font-bold text-[25px]">Safe and Sound Real Estate</h3>
                        <span class="text-white text-sm">The property management app for real estate. I worked as Frontend developer at Hardworking America</span>
                        <span class="text-white text-sm">Tech Stack: Vue.js, Nuxt.Js, TypeScript, vite, Typescript,Taiwind Css,Vitest,StoryBook,Jquery .</span>
                        <a class="mt-8 border border-new-500 rounded-md px-8 py-2 text-sm text-white gallery" href="https://safeandsoundrealestate.com">View Project</a>
                      </div>
                      <img class="w-full h-full object-cover" :src="safe" alt="project"/>
                    </div>

                    <div class="group w-full h-[240px] relative cursor-pointer ">
                      <div class=" bg-[#000000d7] absolute w-full h-0 flex items-center overflow-hidden justify-center flex-col gap-2 px-5 text-center transition-all ease-in-out duration-300 group-hover:h-full">
                        <h3 class="text-white font-bold text-[25px]">Fennelsoft</h3>
                        <span class="text-white text-sm">Providing Business-Driven IT Excellence Software.  I worked as a frontend Developer at Fennelsoft company</span>
                        <span class="text-white text-sm">  Tech Stack: HTML, CSS, Tailwind, JavaScript, Blazor (C#), Jquery. </span>
                        <a class="mt-8 border border-new-500 rounded-md px-8 py-2 text-sm text-white gallery" href="https://fennelsoft.com">View Project</a>
                      </div>
                      <img class="w-full h-full object-cover" :src="fennel" alt="project"/>
                    </div>

                    <div class="group w-full h-[240px] relative cursor-pointer ">
                      <div class=" bg-[#000000d7] absolute w-full h-0 flex items-center overflow-hidden justify-center flex-col gap-2 px-5 text-center transition-all ease-in-out duration-300 group-hover:h-full">
                        <h3 class="text-white font-bold text-[25px]"></h3>
                        <span class="text-white text-sm">Food delivery platform with diverse cuisine options</span>
                        <span class="text-white text-sm">Tech Stack: Vue.js, Nuxt.Js, Javascript, vite, Laravel,Vitest,Sass,Jquery .</span>
                        <a class="mt-8 border border-new-500 rounded-md px-8 py-2 text-sm text-white gallery" href="https://www.ezifood.com/location">View Project</a>
                      </div>
                      <img class="w-full h-full object-cover" :src="Ezi" alt="project"/>
                    </div>

                    <div class="group w-full h-[240px] relative cursor-pointer ">
                      <div class=" bg-[#000000d7] absolute w-full h-0 flex items-center overflow-hidden justify-center flex-col gap-2 px-5 text-center transition-all ease-in-out duration-300 group-hover:h-full">
                        <h3 class="text-white font-bold text-[25px]">ClefMate</h3>
                        <span class="text-white text-sm">Enterprise and secured all-in-one software for managing hotels and guest houses. I work as a Frontend developer at fennelsoft....</span>
                        <span class="text-white text-sm">  Tech Stack: HTML, CSS, Tailwind, JavaScript, Blazor (C#), Jquery. </span>
                        <a class="mt-8 border border-new-500 rounded-md px-8 py-2 text-sm text-white gallery" href="https://clefmate.com">View Project</a>
                      </div>
                      <img class="w-full h-full object-cover" :src="clef" alt="project"/>
                    </div>

                    <div class="group w-full h-[240px] relative cursor-pointer ">
                      <div class=" bg-[#000000d7] absolute w-full h-0 flex items-center overflow-hidden justify-center flex-col gap-2 px-5 text-center transition-all ease-in-out duration-300 group-hover:h-full">
                        <h3 class="text-white font-bold text-[25px]">SikapaTravel</h3>
                        <span class="text-white text-sm">Travel Agency  Channel app, this help people to connect to the company so they can help them travel around the globe.</span>
                        <span class="text-white text-sm">  Tech Stack: HTML, CSS, Tailwind, JavaScript, Umbraco, Jquery. </span>
                        <a class="mt-8 border border-new-500 rounded-md px-8 py-2 text-sm text-white gallery" href="https://Sikapatravel.com">View Project</a>
                      </div>
                      <img class="w-full h-full object-cover" :src="sika" alt="project"/>
                    </div>

                    <div class="group w-full h-[240px] relative cursor-pointer ">
                      <div class=" bg-[#000000d7] absolute w-full h-0 flex items-center overflow-hidden justify-center flex-col gap-2 px-5 text-center transition-all ease-in-out duration-300 group-hover:h-full">
                        <h3 class="text-white font-bold text-[25px]">RAMS Engineering & Asset Management Consultancy Limited</h3>
                        <span class="text-white text-sm">Consultancy Limited Reliable and professional reliability, safety, and asset management firm. I worked as a frontend developer at Ezitek Solutions</span>
                        <span class="text-white text-sm">  Tech Stack: HTML, CSS, Sass, Bootstrap, JavaScript, jQuery. </span>
                        <a class="mt- border border-new-500 rounded-md px-8 py-2 text-sm text-white gallery" href="https://www.reamc.com/">View Project</a>
                      </div>
                      <img class="w-full h-full object-cover" :src="contact" alt="project"/>
                    </div>

                  


                  </div>
          </div>

          <!-- Project section end -->


          <!-- contact section start -->
            <div class="py-10 contact-view text-center">
                 <h1 class="text-[40px] text-center text-white font-bold">Say Hello!</h1>
                 <p class="text-center  text-white lg:w-[50%]  mx-auto mt-2">Get in touch and discover how I can contribute to the growth of your business and team.</p>
                 <div  class="animating mt-5 w-[50px] h-[50px] mx-auto rounded-full flex items-center justify-center border border-white">
                  <i class="lni lni-arrow-down text-white "></i>
                 </div>
                 <button class=" w-[180px] h-[50px] border mt-2 rounded-xl capitalize cursor-pointer text-white hover:bg-tona-blue hover:border-tona-blue">
                 <a href="mailto:gyamfijohn08@gmail.com">say hello!</a>
                 </button>
            </div>
          <!-- Contact section end -->
        </div>
      </div>
    </div>
    <div class="h-[70px] border-t border-[#121B30]">
      <p class="py-4 text-white font-medium text-base md:text-lg font-work text-center">
        Copyright © {{ new Date().getFullYear() }} – All Rights Reserved
       
      </p>
    </div>
   </section>
</template>

<script setup lang="ts">
import PortFolioImage from './assets/Images/model.png'
import fennelsoft from "./assets/Images/project/fennesoft.png"
import Wave from './assets/Images/waving-hand.svg'
import clef from "./assets/Images/project/clefmate.png"
import Ezi from "./assets/Images/project/EziFood.png"
import safe from "./assets/Images/project/safe.png"
import contact from "./assets/Images/project/contact.png"
import sika from "./assets/Images/project/sikapa.png"
import { ref } from 'vue'

const showIcon = ref<boolean>(true);
const fennel = ref<string>(fennelsoft)


function handdleChangeIcon(){
  showIcon.value = !showIcon.value;
}

const handleScrollToView = (className: string) => {
  const element = document.querySelector(className)
  element?.scrollIntoView({behavior: 'smooth'})
}
</script>


<style scoped>
 .animating {
    animation: move 1s linear infinite;
  }

  @keyframes move {
    0% {
      transform: translateY(-10px);
    }

    50% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(-10px);
    }
  }

</style>
