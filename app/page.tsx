"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Users, MessageCircle, MapPin, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"
import { useState } from "react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="TuniTalk Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-red-600">TuniTalk</span>
          </div>

          <MobileNav />

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-red-600 transition-colors">
              Features
            </Link>
            <Link href="#mission" className="text-sm font-medium hover:text-red-600 transition-colors">
              Our Mission
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-red-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">
              Contact
            </Link>
            <LanguageSwitcher />
            <Button className="bg-red-600 hover:bg-red-700">Join Now</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white -z-10" />
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unite. Discuss. Empower Tunisia.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join Tunisia&apos;s premier community platform where locals connect, discuss issues that matter, and
                    drive positive change together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Join the Community
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Start a Discussion
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-background bg-gray-200"
                      />
                    ))}
                  </div>
                  <div className="font-medium">Trusted by 500+ Tunisians</div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-red-100 blur-3xl opacity-70" />
                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-red-100 blur-3xl opacity-70" />
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Tunisians connecting on the platform"
                  width={500}
                  height={500}
                  className="relative mx-auto aspect-square rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                TuniTalk is dedicated to connecting Tunisians across the country and abroad, fostering meaningful local
                discussions, and promoting civic engagement to build a stronger, more united Tunisia.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-sm text-gray-500">
                  Build meaningful connections with fellow Tunisians who share your interests and concerns.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <MessageCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Discuss</h3>
                <p className="text-sm text-gray-500">
                  Engage in thoughtful conversations about local issues that matter to your community.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Globe className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Empower</h3>
                <p className="text-sm text-gray-500">
                  Drive positive change through collective action and community-led initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the tools that make TuniTalk the premier platform for Tunisian community engagement.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <FeatureCard
                title="Topic-Based Forums"
                description="Engage in discussions organized by topics that matter to you, from local politics to cultural events."
                icon={<MessageCircle className="h-6 w-6 text-red-600" />}
              />
              <FeatureCard
                title="Regional Groups"
                description="Connect with people from your specific region to discuss local issues and organize community events."
                icon={<MapPin className="h-6 w-6 text-red-600" />}
              />
              <FeatureCard
                title="Local News Integration"
                description="Stay informed with curated news relevant to your region and interests."
                icon={<Globe className="h-6 w-6 text-red-600" />}
              />
              <FeatureCard
                title="Multilingual Support"
                description="Communicate seamlessly in Arabic, French, or English to ensure everyone can participate."
                icon={<Globe className="h-6 w-6 text-red-600" />}
              />
              <FeatureCard
                title="Community Events"
                description="Discover and organize local events to meet fellow community members in person."
                icon={<Users className="h-6 w-6 text-red-600" />}
              />
              <FeatureCard
                title="Civic Initiatives"
                description="Collaborate on projects that improve your local community and drive positive change."
                icon={<Users className="h-6 w-6 text-red-600" />}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from Tunisians who have already joined our growing community.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <TestimonialCard
                quote="TuniTalk has connected me with neighbors I never knew I had. We've already organized two community clean-up events!"
                author="Leila B."
                location="Sousse"
              />
              <TestimonialCard
                quote="As someone living abroad, TuniTalk helps me stay connected to what's happening back home in a way social media never could."
                author="Karim M."
                location="Paris"
              />
              <TestimonialCard
                quote="The regional groups feature is amazing. I've found people in my area who share my passion for local heritage preservation."
                author="Yasmine T."
                location="Sfax"
              />
            </div>
          </div>
        </section>

        {/* Cultural Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Celebrating Tunisian Culture
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    TuniTalk is more than a platform—it&apos;s a celebration of our rich heritage, diverse traditions, and
                    shared future.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" size="lg">
                    Explore Cultural Discussions
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Tunisian landmark"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover h-full"
                />
                <div className="grid gap-4">
                  <Image
                    src="/placeholder.svg?height=140&width=300"
                    alt="Tunisian tradition"
                    width={300}
                    height={140}
                    className="rounded-lg object-cover"
                  />
                  <Image
                    src="/placeholder.svg?height=140&width=300"
                    alt="Tunisian community"
                    width={300}
                    height={140}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-red-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join the Conversation Today
              </h2>
              <p className="max-w-[85%] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of Tunisia&apos;s most engaged online community and help shape the future of our country.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-100">
                  Join the Community
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-red-700">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Have questions or suggestions? We&apos;d love to hear from you.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Send Message</Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Contact illustration"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="TuniTalk Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-xl font-bold text-red-600">TuniTalk</span>
              </div>
              <p className="text-sm text-gray-500 max-w-[300px]">
                Connecting Tunisians, fostering discussions, and empowering communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Platform</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Features
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Community
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Regions
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Company</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    About
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Blog
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Careers
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium">Legal</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Privacy
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Terms
                  </Link>
                  <Link href="#" className="text-sm text-gray-500 hover:text-red-600">
                    Cookie Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500">© 2024 TuniTalk. All rights reserved.</p>
            <div className="flex gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex gap-4 items-center">
        <div className="h-10 w-10 rounded-full bg-gray-200" />
        <div>
          <h4 className="text-sm font-medium">{author}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 italic">&quot;{quote}&quot;</p>
    </div>
  )
}



function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-3/4 bg-background shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="TuniTalk Logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <span className="text-lg font-bold text-red-600">TuniTalk</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="#features"
                className="text-base font-medium hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#mission"
                className="text-base font-medium hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Mission
              </Link>
              <Link
                href="#testimonials"
                className="text-base font-medium hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="mt-4 flex flex-col gap-2">
                <LanguageSwitcher />
                <Button className="w-full bg-red-600 hover:bg-red-700">Join Now</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
