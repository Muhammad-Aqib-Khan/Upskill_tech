// app/page.tsx (NO 'use client' here)

// Importing components and icons
import CounselingForm from "./(components)/counsellingform/counsellingform";
import Image from "next/image";
import StatCard from "./(components)/statcard/statcard";
import { FaGraduationCap } from "react-icons/fa"; // Graduation cap icon
import { TbAffiliateFilled } from "react-icons/tb"; // Affiliation icon
import { SiGoogleclassroom } from "react-icons/si"; // Classroom icon
import { FaBuilding } from "react-icons/fa"; // Building icon
import Link from "next/link";
import BlogCard from "./(components)/BlogCard/BlogCard";

// Home component - Main page of the application
export default function Home() {
  return (
    <>
      {/* Counseling Form Section */}
      <CounselingForm />

   
      {/* Statistics Section */}
  <div className="flex flex-col lg:flex-nowrap sm:flex-row pl-6 flex-wrap justify-center gap-8 mt-8 mb-4 ">
    {/* StatCard for Alumni */}
    <StatCard
      label="Alumini"
      icon={<FaGraduationCap />}
      number={300}
      className="w-80 h-40 p-6 text-center text-xl font-semibold"
    />

    {/* StatCard for Affiliations */}
    <StatCard
      label="Affiliation"
      icon={<TbAffiliateFilled />}
      number={5}
      className="w-80 h-40 p-6 text-center text-xl font-semibold"
    />

    {/* StatCard for Trainers */}
    <StatCard
      label="Trainers"
      icon={<SiGoogleclassroom />}
      number={20}
      className="w-80 h-40 p-6 text-center text-xl font-semibold"
    />

    {/* StatCard for Campuses */}
    <StatCard
      label="Campus"
      icon={<FaBuilding />}
      number={2}
      className="w-80 h-40 p-6 text-center text-xl font-semibold"
    />
  </div>
   {/* ready to join Our Classes  */}
         <section className="py-16 bg-blue-900 text-white">
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
   {/* This is the blog section on which we will be working  */}
  <div>
     <div>
        <h1 className=" text-3xl font-bold text-center mt-8 mb-4 hover:text-blue-600 text-4xl ">
        <Link href="/ourBlog">Our Blogs</Link> 
        </h1>
        <div className="flex  gap-4">
          <BlogCard image="/web.jpg"  title="How Effective choosing Web Development Career ?" slug="" />
           <BlogCard image="/web.jpg"   title="How Effective choosing Web Development Career ?" slug=""/>
            <BlogCard image="/web.jpg" title="How Effective choosing Web Development Career ?" slug=""/>
             <BlogCard image="/web.jpg" title="How Effective choosing Web Development Career ?" slug=""/>
        </div>
    </div>
  </div>
      <section className="mt-8 rounded-sm mb-4  py-16 bg-[#072d5c] text-gray-700 ">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col-reverse lg:flex-row items-center gap-10">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-3xl font-bold mb-4">Why Choose Upskill College?</h2>
            <p className="text-lg mb-6">
              Upskill College is your gateway to mastering digital skills with confidence. Our expert instructors,
              job-focused curriculum, and real-world training ensure you're not just learning — you're preparing
              for success.
            </p>

            <ul className="space-y-4 text-base list-disc list-inside">
              <li><strong>Expert Mentors:</strong> Learn from professionals with years of industry experience.</li>
              <li><strong>Real Projects:</strong> Work on real-life scenarios to gain hands-on skills.</li>
              <li><strong>Flexible Schedule:</strong> Classes that suit your timing — online or offline.</li>
              <li><strong>Career Support:</strong> Resume help, mock interviews, and placement guidance.</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/why.jpg"
              alt="Upskill College training"
              width={500}
              height={350}
              className="rounded-lg shadow-md object-cover transform scale-x-[-1] "
            />
          </div>

        </div>
      </div>
    </section>


    </>
  );
}
