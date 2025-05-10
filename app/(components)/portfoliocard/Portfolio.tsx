"use client";
import { BsGithub, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

interface PortfolioCardProps {
  image: string;
  className:string;
  name: string;
  description: string;
  subheading?:string;
  iconSize?: number; 
  socialLinks: {
    github?: string;
    twitter?: string;
    instagram?: string;
    
  };
}

export default function Portfolio({ image, name,className ,subheading, description, socialLinks }: PortfolioCardProps) {
  return (
    <div className="w-72 h-[22.5rem] bg-[#072d5c] transition-all duration-1000 ease-in-out clip-custom rounded-tr-2xl rounded-bl-2xl flex flex-col p-4">
      <div className="w-55 h-80 bg-white rounded-xl mx-auto mb-4 overflow-hidden relative">
        <Image 
          src={image} 
          alt={`${name} Profile`} 
          fill
          
          className={className}
        />
      </div>
      <span className="text-white font-bold text-center text-base">{name}</span>
      <p className="text-white text-center font-normal text-xs m-4">
        {description}
      </p>
      <div className="mt-4 flex justify-center gap-4">
        {socialLinks.github && (
          <Link target='_blank' href={socialLinks.github} aria-label="GitHub" className="text-white hover:text-red-500 transition-colors">
            <BsGithub size={18} />
          </Link>
        )}
        {socialLinks.twitter && (
          <Link target='_blank' href={socialLinks.twitter} aria-label="Twitter" className="text-white hover:text-red-500 transition-colors">
            <BsTwitter size={18} />
          </Link>
        )}
        {socialLinks.instagram && (
          <Link target='_blank ' href={socialLinks.instagram} aria-label="Instagram" className="text-white hover:text-red-500 transition-colors">
            <BsInstagram size={18} />
          </Link>
        )}
      
      </div>
    
    </div>
  );
}

Portfolio.defaultProps = {
  socialLinks: {
    github: "https://github.com/username",
    twitter: "https://twitter.com/username",
    instagram: "https://instagram.com/username",
  },
};
