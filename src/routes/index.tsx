import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  HardHat,
  Headphones,
  Home as HomeIcon,
  Hammer,
  Layers,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlayCircle,
  Quote,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
} from "lucide-react";

import heroVilla from "@/assets/hero-villa.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ctaVilla from "@/assets/cta-villa.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import beforeVilla from "@/assets/before-villa.jpg";
import beforeApartment from "@/assets/before-apartment.jpg";
import beforeOffice from "@/assets/before-office.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import beforeBathroom from "@/assets/before-bathroom.jpg";
import beforeFacade from "@/assets/before-facade.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import afterBathroom from "@/assets/after-bathroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATELIER — Premium Design & Build Studio, Chennai" },
      {
        name: "description",
        content:
          "Chennai's premium design + build studio. Luxury villas, commercial spaces, interiors, renovations and architecture — delivered with precision, transparency and craftsmanship.",
      },
      { property: "og:title", content: "ATELIER — Premium Design & Build, Chennai" },
      {
        property: "og:description",
        content:
          "15+ years. 500+ landmark projects. RERA & ISO certified. Crafting spaces built for generations.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="space-y-1 text-center py-20">
      <h1 className="text-4xl font-bold">ATELIER</h1>
      <p className="text-xl text-gray-600">Premium Design & Build, Chennai</p>
      <p className="text-gray-500 mt-4">Luxury villas, commercial spaces, interiors and architecture</p>
    </div>
  );
}
