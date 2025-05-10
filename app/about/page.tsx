import Image from 'next/image';
import Portfolio from '../(components)/portfoliocard/Portfolio';

import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';

export default function AboutUs() {
  return (
    <>

      <div className='mt-4 ml-10'>
        <h2 className="ml-8 text-4xl font-light mb-4">
          About <span className="font-bold text-black">Us</span>
        </h2>
      </div>
      <section className="py-12 px-6 md:px-20 bg-[#072d5c] text-white">
        <div className="flex flex-col md:flex-row items-center gap-12 text-white">


          {/* Left Image Section */}
          <div className="w-full md:w-1/2 t">
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/clg.jpeg"
                alt="About Us Image"
                layout="fill"
                objectFit="cover"

              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-white">

            <h3 className="text-3xl font-light mb-6">
              We are <span className="font-bold ">Future of UpSkill Development</span>
            </h3>
            <p className=" leading-relaxed">
              Upskill Institute, founded in 2025, has emerged as a leading IT education institution in Pakistan.
              Our commitment to excellence has led to a network of over 3000 proud alumni.
              With more than 50 globally recognized affiliations and a portfolio of over 30+ meticulously crafted courses,
              we're dedicated to meeting the ever-growing global demand for skilled professionals.
            </p>
          </div>


        </div>

      </section>
      {/* Mission & Purpose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 onhover:scale-105 transition-transform duration-300">
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
                <p className="text-white-600 leading-relaxed">
                  To provide world-class education that bridges the gap between academic learning and industry requirements,
                  ensuring our students are always ahead in their professional journey.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Purpose</h2>
                <p className="text-white-600 leading-relaxed">
                  We exist to transform careers by delivering practical, industry-focused education that
                  empowers individuals to achieve their full potential in the digital economy.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white-800 mb-6">Key Highlights</h3>
              <div className="space-y-4">
                {[
                  '15,000+ Students Trained',
                  '98% Placement Rate',
                  '200+ Industry Partners',
                  '50+ Global Certifications',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section this is about the staff  */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 bg-[#072d5c] rounded-lg shadow-lg p-8 text-white">
          <div className="ml-4 flex flex-col md:flex-row items-center gap-12 ">

            <div className="md:w-2/3 ">
              <h2 className="text-3xl font-bold  mb-4">Message from our CEO</h2>
              <h3 className="text-xl mb-6">Ali Pathan</h3>
              <div className="space-y-4 text-white">
                <p>
                  "At Upskill Institute, we believe in the transformative power of education. Our commitment
                  goes beyond traditional learning – we're building a community of future leaders who are
                  ready to tackle the challenges of tomorrow."
                </p>
                <p>
                  "Our innovative approach to education, combined with strong industry partnerships,
                  ensures that our students are not just prepared for the future, but are actively
                  shaping it."
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="w-full aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-xl relative">
                <Image className="object-cover object-top scale-120 origin-top " src="/ceo.jpg" alt='CEO Image' layout='fill' objectFit='cover' />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      {/* adminirstrive staff  */}
      <section className="ml-2  bg-gray-50">
        <h1 className='text-3xl font-bold p-2 text-gray-700 '>Administration</h1>
        <div className='flex gap-4 '>
        <Portfolio
          image='/Farwa.jpg'
          className='object-cover object-top rounded-xl scale-120'
          name='Advocate Farwa Altaf'
          subheading='Principal'
          description='Visionary, compassionate, disciplined, inspiring, dedicated '
           iconSize={28}
          socialLinks={{
            instagram: "https://instagram.com/username",
           }}
        />
        <Portfolio
          image='/zahrabatool.jpg'
          className='object-cover object-top rounded-xl scale-107'
          name='Zahra Batool'
          subheading='Vice Principal'
          description='Supportive, strategic, approachable, diligent, dependable '
          socialLinks={{
            instagram: "https://www.instagram.com/zahrabatool1343?utm_source=qr&igsh=ZDkxZ3V4ZmQ3ZnZ4 ,target=blank ",
            
            

          }}
        />
        </div>

      </section>


 {/* senior staff  */}
      <section className="ml-2 mt-4  bg-[#072d5c]">
        <h1 className='text-3xl font-bold text-center pt-4 p-2 text-white'>Senior Staff & Mentors</h1>
        <div className='flex gap-4 '>
        <Portfolio
          image='/amirkhan.jpg'
          className='object-cover object-top rounded-xl scale-115'
          name='Muhammad Amir Khan'
          
          description='Senior Business Manager & web developer '
           iconSize={28}
          socialLinks={{
            instagram: "https://instagram.com/username",
           }}
        />
        <Portfolio
          image="/ehtisham.jpg"
          className="object-cover object-top rounded-xl scale-99"
          name="Ehtisham Mughal"
          description="Our Youtube Automation mentor & Senior upskill team member"
          socialLinks={{
            instagram: "https://www.instagram.com/zahrabatool1343",
          }}
        />
         <Portfolio
            image="/aqib_khan.jpg"
            className="object-cover object-top pr-2 rounded-xl scale-108"
            name="Muhammad Aqib Khan"
            description="AI Cloud Native Engineer, Full Stack Developer & Senior Upskill team member"
            socialLinks={{
              instagram: "https://web.facebook.com/profile.php?id=61554817384805",
              github: "https://github.com/Muhammad-Aqib07?tab=repositories",
              
            }}
          />
           <Portfolio
            image="/kamran.jpeg"
            className="object-cover object-top pl-8 rounded-xl scale-160"
            name="Kamran Ahmad"
            description="Ecommerce, Graphic Designer & Senior member"
            socialLinks={{
              instagram: "https://instagram.com/username",
              github: "https://github.com/username",
              twitter: "https://twitter.com/username",
            }}
          />
        </div>

      </section>




{/* Mentor's of the College */}

         <div>

         </div>


      <section className="py-16 bg-gray-50">
        <h1 className='text-3xl font-bold text-center p-2 text-gray-700'>Junior staff & Mentors</h1>
        <div className="flex flex-container gap-6 mx-auto px-4">
         
          <Portfolio
            image='/ahmad.jpeg'
            className='object-cover object-top  pt-2 rounded-xl scale-280'
            name='Ahmad'
            description='One of our Talented Mentors, In upskill He will teach Google ads, graphic designing, and Shopify'
            socialLinks={{
              instagram: "https://instagram.com/username",
              github: "https://github.com/username",
              twitter: "https://twitter.com/username",

            }}
          />
          <Portfolio
            image='/zamankhan.jpg'
            className='object-cover  object-top pr-3 rounded-xl scale-150'
            name='Zaman Khan'
            description='One of our Talented Mentors, Artist'
            socialLinks={{
              instagram: "https://instagram.com/username",
              github: "https://github.com/username",
              twitter: "https://twitter.com/username",

            }}
          />
          <Portfolio
            image='/Arslan.jpeg'
            className='object-cover object-top rounded-xl scale-140'
            name='Arslan Mazher'
            description='One of our Talented Mentors, Junior Web Developer'
            socialLinks={{
              instagram: "https://instagram.com/username",
              github: "https://github.com/username",
              twitter: "https://twitter.com/username",

            }}
          />
          <Portfolio
            image='/irfan.jpeg'
            className='object-cover object-top pl-6  rounded-xl scale-170'
            name='Irfan Mirza'
            description='One of our Talented Mentors, In upskill He will teach Google ads, graphic designing, and Shopify'
            socialLinks={{
              instagram: "https://instagram.com/username",
              github: "https://github.com/username",
              twitter: "https://twitter.com/username",

            }}
          />


        </div>
      </section>
        <section className="mb-3 py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8">Book a free day pass and experience our co-working space</p>
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Free Day Pass
          </Link>
        </div>
      </section>
    </>
  );
}
