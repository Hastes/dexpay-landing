import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.512695 32.3758V33.8085C0.512695 35.0472 1.51563 36.0547 2.7589 36.0547H19.781C29.5608 36.0547 37.4872 27.9851 37.4872 18.0297C37.4872 11.8642 34.446 6.4243 29.8104 3.17517C24.6801 15.2612 15.418 25.1103 3.67401 30.8367L0.512695 32.3804V32.3758Z" fill="#4FBCE5"/>
                <path d="M25.3642 0.915119C23.6079 0.323527 21.7314 0 19.781 0H3.30889C1.7652 0 0.512695 1.25251 0.512695 2.7962V26.8158C11.6697 21.5977 20.5159 12.3587 25.3642 0.915119Z" fill="#3C76FF"/>
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                DexPay
              </span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className="text-foreground/80 hover:text-foreground transition-colors">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-foreground/80 hover:text-foreground transition-colors">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </a>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-[#00C283] to-[#3C76FF] hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}