"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  suffix?: string;
  className?: string;
}

const StatCard = ({ icon, number, label, suffix = "+" }: StatCardProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8 bg-[#072d5c] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 w-85 h-48"
      whileHover={{ scale: 1.15 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl text-white mb-4">{icon}</div>
      <div className="text-4xl font-bold text-orange-500">
        <CountUp end={number} duration={4} suffix={suffix} />
      </div>
      <div className="text-xl text-white mt-2">{label}</div>
    </motion.div>
  );
};

export default StatCard;
