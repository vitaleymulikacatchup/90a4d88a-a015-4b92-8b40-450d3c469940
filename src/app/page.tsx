"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, MapPin, MessageSquare, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Destinations", id: "destinations" },
            { name: "Experiences", id: "experiences" },
            { name: "Plan Your Trip", id: "planning" },
            { name: "Stories", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="Visit Sicily"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Sicily's Timeless Beauty"
          description="From ancient Greek temples to volcanic landscapes, experience the Mediterranean's most captivating island where history, culture, and natural beauty converge."
          tag="Mediterranean Paradise"
          tagIcon={MapPin}
          buttons={[
            { text: "Start Planning", href: "planning" },
            { text: "View Destinations", href: "destinations" }
          ]}
          imageSrc="https://images.pexels.com/photos/4064447/pexels-photo-4064447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Mount Etna and Sicilian coastline at sunset"
          imagePosition="right"
        />
      </div>
      
      <div id="destinations" data-section="destinations">
        <ProductCardThree
          title="Featured Destinations"
          description="Explore Sicily's most enchanting locations, each offering unique experiences and unforgettable memories"
          tag="Top Picks"
          tagIcon={Star}
          products={[
            {
              id: "taormina",
              name: "Taormina - Ancient Theater & Sea Views",
              price: "Must Visit",
              imageSrc: "https://images.pexels.com/photos/28655528/pexels-photo-28655528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Taormina ancient Greek theater overlooking the sea",
              initialQuantity: 1
            },
            {
              id: "palermo",
              name: "Palermo - Cultural Capital",
              price: "Essential",
              imageSrc: "https://images.pexels.com/photos/20893484/pexels-photo-20893484.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Palermo cathedral and historic architecture",
              initialQuantity: 1
            },
            {
              id: "catania",
              name: "Catania - Baroque Splendor",
              price: "Recommended",
              imageSrc: "https://images.pexels.com/photos/874629/pexels-photo-874629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Catania baroque buildings and street life",
              initialQuantity: 1
            },
            {
              id: "syracuse",
              name: "Syracuse - Ancient Greek Heritage",
              price: "Historic",
              imageSrc: "https://images.pexels.com/photos/5661348/pexels-photo-5661348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Syracuse ancient Greek ruins and archaeological site",
              initialQuantity: 1
            },
            {
              id: "etna",
              name: "Mount Etna - Active Volcano Adventure",
              price: "Thrilling",
              imageSrc: "https://images.pexels.com/photos/19613588/pexels-photo-19613588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mount Etna volcanic landscape and hiking trails",
              initialQuantity: 1
            }
          ]}
        />
      </div>
      
      <div id="experiences" data-section="experiences">
        <FeatureCardOne
          title="Unforgettable Sicily Experiences"
          description="Immerse yourself in authentic Sicilian culture through carefully curated experiences that showcase the island's rich heritage"
          tag="Authentic Sicily"
          tagIcon={Heart}
          features={[
            {
              title: "Culinary Journey",
              description: "Savor traditional Sicilian cuisine from street food in Palermo to Michelin-starred restaurants, including cooking classes with local families",
              imageSrc: "https://images.pexels.com/photos/19976091/pexels-photo-19976091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional Sicilian cannoli and local dishes"
            },
            {
              title: "Wine & Vineyard Tours",
              description: "Discover Sicily's emerging wine scene with tastings at volcanic soil vineyards around Mount Etna and historic estates",
              imageSrc: "https://images.pexels.com/photos/8350663/pexels-photo-8350663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sicily vineyard wine tasting with Mediterranean views"
            },
            {
              title: "Archaeological Wonders",
              description: "Explore remarkably preserved Greek temples, Roman mosaics, and Norman-Arab architecture with expert local guides",
              imageSrc: "https://images.pexels.com/photos/5661348/pexels-photo-5661348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ancient Greek temple ruins in Sicily"
            },
            {
              title: "Coastal Adventures",
              description: "Relax on pristine beaches, snorkel in crystal-clear waters, and discover hidden coves along Sicily's diverse coastline",
              imageSrc: "https://images.pexels.com/photos/386158/pexels-photo-386158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Beautiful Sicily beach with crystal clear Mediterranean water"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Travelers Say About Sicily"
          description="Hear from visitors who have experienced the magic of Sicily firsthand"
          tag="Visitor Stories"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Travel Blogger",
              company: "Italian Adventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5834968/pexels-photo-5834968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marco Rossi"
            },
            {
              id: "2",
              name: "Elena Martinez",
              role: "Photographer",
              company: "Mediterranean Focus",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6271317/pexels-photo-6271317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Elena Martinez"
            },
            {
              id: "3",
              name: "Giuseppe Bianchi",
              role: "Tour Guide",
              company: "Sicily Experts",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8815825/pexels-photo-8815825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Giuseppe Bianchi"
            },
            {
              id: "4",
              name: "Anna Thompson",
              role: "Travel Writer",
              company: "European Journeys",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7222943/pexels-photo-7222943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Anna Thompson"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Planning Your Sicilian Adventure"
          sideDescription="Everything you need to know for an unforgettable trip to Sicily"
          faqs={[
            {
              id: "best-time",
              title: "When is the best time to visit Sicily?",
              content: "The ideal time is April-June and September-October when temperatures are pleasant (20-25°C), crowds are smaller, and prices are lower. Summer (July-August) is hot but perfect for beaches, while winter offers mild weather and fewer tourists."
            },
            {
              id: "duration",
              title: "How many days should I spend in Sicily?",
              content: "A minimum of 7-10 days allows you to see major highlights. For a comprehensive experience including smaller towns and relaxation time, plan 2 weeks. Consider Sicily's size - it's larger than many expect!"
            },
            {
              id: "transportation",
              title: "How do I get around Sicily?",
              content: "Renting a car provides maximum flexibility to explore rural areas and hidden gems. Trains connect major cities, while buses serve smaller towns. Organized tours are excellent for archaeological sites and wine regions."
            },
            {
              id: "language",
              title: "Do I need to speak Italian?",
              content: "While Italian is helpful, English is widely spoken in tourist areas, hotels, and restaurants. Learning basic Italian phrases enhances your experience and is appreciated by locals."
            },
            {
              id: "cuisine",
              title: "What Sicilian foods must I try?",
              content: "Don't miss arancini (rice balls), cannoli, caponata, fresh pasta with sardines, granita, and local wines. Each region has specialties - street food in Palermo, seafood in coastal towns, and mountain cuisine inland."
            }
          ]}
          textPosition="left"
        />
      </div>
      
      <div id="planning" data-section="planning">
        <ContactSplitForm
          title="Start Planning Your Sicilian Journey"
          description="Let us help you create the perfect Sicilian adventure tailored to your interests and travel style"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "travel_dates", type: "text", placeholder: "Preferred Travel Dates", required: false },
            { name: "group_size", type: "text", placeholder: "Number of Travelers", required: false }
          ]}
          textarea={{
            name: "interests",
            placeholder: "Tell us about your interests (history, food, beaches, adventure, etc.)",
            rows: 4,
            required: false
          }}
          buttonText="Request Travel Guide"
          imageSrc="https://images.pexels.com/photos/4064447/pexels-photo-4064447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sicilian landscape planning consultation"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Destinations",
              items: [
                { label: "Taormina", href: "destinations" },
                { label: "Palermo", href: "destinations" },
                { label: "Catania", href: "destinations" },
                { label: "Mount Etna", href: "destinations" }
              ]
            },
            {
              title: "Experiences",
              items: [
                { label: "Food Tours", href: "experiences" },
                { label: "Wine Tasting", href: "experiences" },
                { label: "Archaeological Sites", href: "experiences" },
                { label: "Beach Activities", href: "experiences" }
              ]
            },
            {
              title: "Plan Your Trip",
              items: [
                { label: "Travel Guide", href: "planning" },
                { label: "Best Time to Visit", href: "faq" },
                { label: "Transportation", href: "faq" },
                { label: "Local Tips", href: "faq" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "testimonials" },
                { label: "Local Partners", href: "testimonials" },
                { label: "Contact Us", href: "planning" }
              ]
            }
          ]}
          copyrightText="© 2025 | Visit Sicily"
        />
      </div>
    </ThemeProvider>
  );
}