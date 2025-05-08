"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowBigDown,
  ArrowBigUp,
  Bell,
  BookMarked,
  ChevronDown,
  Compass,
  FileText,
  Filter,
  Flame,
  Globe,
  Home,
  ImageIcon,
  LinkIcon,
  LogOut,
  Menu,
  MessageSquare,
  MoreHorizontal,
  PenSquare,
  Search,
  Share2,
  Star,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import LanguageSwitcher from "@/components/language-switcher"

export default function CommunityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [createPostExpanded, setCreatePostExpanded] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>

          <Link href="/" className="flex items-center gap-2 mr-4">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="TuniTalk Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-lg font-bold text-red-600 hidden sm:inline-block">TuniTalk</span>
          </Link>

          <div className="relative flex-1 max-w-md mr-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search TuniTalk"
              className="pl-8 bg-muted/50 border-none focus-visible:ring-1"
            />
          </div>

          <nav className="hidden md:flex items-center gap-2 mr-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Flame className="h-4 w-4" />
              <span>Hot</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>Trending</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>New</span>
            </Button>
          </nav>

          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>

            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Button>

            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <PenSquare className="h-5 w-5" />
              <span className="sr-only">Create Post</span>
            </Button>

            <LanguageSwitcher />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline-block">Username</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookMarked className="mr-2 h-4 w-4" />
                  <span>Saved</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Communities</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed left-0 top-0 h-full w-3/4 max-w-xs bg-background shadow-lg">
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
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close sidebar</span>
              </Button>
            </div>
            <div className="py-4">
              <MobileSidebarContent />
            </div>
          </div>
        </div>
      )}

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)_200px] md:gap-6 lg:gap-10 py-4">
        {/* Desktop Sidebar */}
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r md:border-r-0">
          <div className="h-full py-6 pr-6 lg:py-8">
            <DesktopSidebarContent />
          </div>
        </aside>

        {/* Main Content */}
        <main className="relative">
          {/* Create Post */}
          <div className="mb-4 rounded-lg border bg-card shadow-sm">
            {!createPostExpanded ? (
              <div className="p-3 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <Input
                  placeholder="Create a post"
                  className="bg-muted/50 border-none"
                  onClick={() => setCreatePostExpanded(true)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex"
                  onClick={() => setCreatePostExpanded(true)}
                >
                  <ImageIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex"
                  onClick={() => setCreatePostExpanded(true)}
                >
                  <LinkIcon className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Create a post</h3>
                  <Button variant="ghost" size="icon" onClick={() => setCreatePostExpanded(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <Input placeholder="Title" className="font-medium" />
                  <textarea
                    className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Text (optional)"
                  />
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <ImageIcon className="h-4 w-4" />
                      <span>Image</span>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <LinkIcon className="h-4 w-4" />
                      <span>Link</span>
                    </Button>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setCreatePostExpanded(false)}>
                      Cancel
                    </Button>
                    <Button className="bg-red-600 hover:bg-red-700">Post</Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Filters */}
          <div className="mb-4 flex items-center justify-between">
            <Tabs defaultValue="hot" className="w-full">
              <TabsList className="bg-muted/50">
                <TabsTrigger value="hot" className="flex items-center gap-1">
                  <Flame className="h-4 w-4" />
                  <span className="hidden sm:inline-block">Hot</span>
                </TabsTrigger>
                <TabsTrigger value="trending" className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline-block">Trending</span>
                </TabsTrigger>
                <TabsTrigger value="new" className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span className="hidden sm:inline-block">New</span>
                </TabsTrigger>
                <TabsTrigger value="top" className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline-block">Top</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="ghost" size="sm" className="gap-1 ml-2">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline-block">Filter</span>
            </Button>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="fixed top-14 right-0 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block">
          <div className="h-full py-6 pl-6 lg:py-8">
            <div className="space-y-4">
              <div className="rounded-lg border bg-card shadow-sm">
                <div className="bg-red-600 text-white p-3 rounded-t-lg">
                  <h3 className="font-semibold">About TuniTalk</h3>
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-sm">
                    TuniTalk is a community-driven platform for Tunisians to connect, discuss local issues, and engage
                    in regional interests.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>12.5k members</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4" />
                    <span>Created Jan 12, 2023</span>
                  </div>
                  <Separator />
                  <Button className="w-full bg-red-600 hover:bg-red-700">Join</Button>
                </div>
              </div>

              <div className="rounded-lg border bg-card shadow-sm">
                <div className="bg-red-600 text-white p-3 rounded-t-lg">
                  <h3 className="font-semibold">Community Rules</h3>
                </div>
                <div className="p-4">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Be respectful and civil</li>
                    <li>No hate speech or harassment</li>
                    <li>No spam or self-promotion</li>
                    <li>Post in the appropriate category</li>
                    <li>Respect privacy of others</li>
                  </ol>
                </div>
              </div>

              <div className="rounded-lg border bg-card shadow-sm">
                <div className="bg-red-600 text-white p-3 rounded-t-lg">
                  <h3 className="font-semibold">Trending Communities</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {trendingCommunities.map((community) => (
                      <div key={community.id} className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                          {community.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{community.name}</h4>
                          <p className="text-xs text-muted-foreground">{community.members} members</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function DesktopSidebarContent() {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Compass className="h-4 w-4" />
          <span>Explore</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Globe className="h-4 w-4" />
          <span>All</span>
        </Button>
      </div>

      <Separator />

      <div>
        <h3 className="mb-2 text-sm font-semibold">Your Communities</h3>
        <div className="space-y-1">
          {communities.map((community) => (
            <Button key={community.id} variant="ghost" className="w-full justify-start gap-2">
              <div className="h-4 w-4 rounded-full bg-muted flex items-center justify-center text-[10px]">
                {community.icon}
              </div>
              <span className="truncate">{community.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="mb-2 text-sm font-semibold">Topics</h3>
        <div className="space-y-1">
          {topics.map((topic) => (
            <Button key={topic.id} variant="ghost" className="w-full justify-start gap-2">
              {topic.icon}
              <span>{topic.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileSidebarContent() {
  return (
    <div className="space-y-4 px-4">
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Compass className="h-4 w-4" />
          <span>Explore</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Globe className="h-4 w-4" />
          <span>All</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <User className="h-4 w-4" />
          <span>Profile</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <BookMarked className="h-4 w-4" />
          <span>Saved</span>
        </Button>
      </div>

      <Separator />

      <div>
        <h3 className="mb-2 text-sm font-semibold">Your Communities</h3>
        <div className="space-y-1">
          {communities.map((community) => (
            <Button key={community.id} variant="ghost" className="w-full justify-start gap-2">
              <div className="h-4 w-4 rounded-full bg-muted flex items-center justify-center text-[10px]">
                {community.icon}
              </div>
              <span className="truncate">{community.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="mb-2 text-sm font-semibold">Topics</h3>
        <div className="space-y-1">
          {topics.map((topic) => (
            <Button key={topic.id} variant="ghost" className="w-full justify-start gap-2">
              {topic.icon}
              <span>{topic.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

interface Post {
  id: number;
  title: string;
  type: "text" | "image";
  content: string;
  author: string;
  time: string;
  votes: number;
  comments: number;
  community: {
    name: string;
    icon: string;
  };
  tags?: string[];
}

function PostCard({ post }: { post: Post }) {
  const [votes, setVotes] = useState(post.votes)
  const [userVote, setUserVote] = useState<number | null>(null)

  const handleVote = (direction:number) => {
    if (userVote === direction) {
      setVotes(votes - direction)
      setUserVote(null)
    } else {
      setVotes(votes - (userVote || 0) + direction)
      setUserVote(direction)
    }
  }

  return (
    <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
      <div className="flex">
        {/* Vote Column */}
        <div className="bg-muted/30 p-2 flex flex-col items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 ${userVote === 1 ? "text-red-600" : ""}`}
            onClick={() => handleVote(1)}
          >
            <ArrowBigUp className="h-5 w-5" />
            <span className="sr-only">Upvote</span>
          </Button>
          <span
            className={`text-sm font-medium ${
              userVote === 1 ? "text-red-600" : userVote === -1 ? "text-blue-600" : ""
            }`}
          >
            {votes}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 ${userVote === -1 ? "text-blue-600" : ""}`}
            onClick={() => handleVote(-1)}
          >
            <ArrowBigDown className="h-5 w-5" />
            <span className="sr-only">Downvote</span>
          </Button>
        </div>

        {/* Post Content */}
        <div className="p-4 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-[10px]">
              {post.community.icon}
            </div>
            <Link href="#" className="text-xs font-medium hover:underline">
              {post.community.name}
            </Link>
            <span className="text-xs text-muted-foreground">• Posted by</span>
            <Link href="#" className="text-xs text-muted-foreground hover:underline">
              u/{post.author}
            </Link>
            <span className="text-xs text-muted-foreground">{post.time}</span>
          </div>

          <h3 className="text-lg font-semibold mb-2">
            <Link href="#" className="hover:underline">
              {post.title}
            </Link>
          </h3>

          {post.type === "text" && <p className="text-sm mb-3">{post.content}</p>}

          {post.type === "image" && (
            <div className="mb-3 rounded-md overflow-hidden">
              <Image
                src={post.content || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="w-full object-cover max-h-[500px]"
              />
            </div>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 text-muted-foreground">
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <MessageSquare className="h-4 w-4" />
              <span className="text-xs">{post.comments} Comments</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <Share2 className="h-4 w-4" />
              <span className="text-xs">Share</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <BookMarked className="h-4 w-4" />
              <span className="text-xs">Save</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const communities = [
  { id: 1, name: "r/Tunis", icon: "T" },
  { id: 2, name: "r/Sousse", icon: "S" },
  { id: 3, name: "r/Sfax", icon: "S" },
  { id: 4, name: "r/TunisianFood", icon: "F" },
  { id: 5, name: "r/TunisianMusic", icon: "M" },
]

const topics = [
  { id: 1, name: "Politics", icon: <FileText className="h-4 w-4" /> },
  { id: 2, name: "Culture", icon: <FileText className="h-4 w-4" /> },
  { id: 3, name: "Sports", icon: <FileText className="h-4 w-4" /> },
  { id: 4, name: "Technology", icon: <FileText className="h-4 w-4" /> },
  { id: 5, name: "Education", icon: <FileText className="h-4 w-4" /> },
]

const trendingCommunities = [
  { id: 1, name: "r/TunisianStartups", members: "3.2k", icon: <FileText className="h-4 w-4" /> },
  { id: 2, name: "r/TunisianArt", members: "5.7k", icon: <FileText className="h-4 w-4" /> },
  { id: 3, name: "r/TunisianCuisine", members: "8.1k", icon: <FileText className="h-4 w-4" /> },
]

const posts: Post[] = [
  {
    id: 1,
    title: "New cultural center opening in downtown Tunis next month",
    type: "text",
    content:
      "The Ministry of Culture announced today that a new cultural center will be opening in downtown Tunis next month. The center will feature exhibition spaces, a theater, and workshops for artists. What do you think about this initiative?",
    author: "cultural_enthusiast",
    time: "2h ago",
    votes: 128,
    comments: 32,
    community: { name: "r/Tunis", icon: "T" },
    tags: ["Culture", "Tunis", "News"],
  },
  {
    id: 2,
    title: "Sunset at Sidi Bou Said yesterday - absolutely breathtaking!",
    type: "image",
    content: "/placeholder.svg?height=400&width=600",
    author: "photo_lover",
    time: "5h ago",
    votes: 243,
    comments: 45,
    community: { name: "r/TunisianPhotography", icon: "P" },
    tags: ["Photography", "SidiBouSaid"],
  },
  {
    id: 3,
    title: "What are your favorite traditional Tunisian dishes that tourists rarely try?",
    type: "text",
    content:
      "Everyone knows about couscous and brik, but what are some lesser-known Tunisian dishes that you think more people should try? I'm particularly interested in regional specialties that don't get as much attention in tourist areas.",
    author: "foodie_traveler",
    time: "8h ago",
    votes: 87,
    comments: 64,
    community: { name: "r/TunisianFood", icon: "F" },
    tags: ["Food", "Culture", "Discussion"],
  },
  {
    id: 4,
    title: "Tech startups in Tunisia - what are the biggest challenges you're facing?",
    type: "text",
    content:
      "As someone working in the Tunisian tech ecosystem, I'm curious to hear from other founders and employees about the challenges you're facing. Is it funding? Talent? Regulations? Let's discuss and maybe find some solutions together.",
    author: "tech_founder",
    time: "12h ago",
    votes: 56,
    comments: 28,
    community: { name: "r/TunisianStartups", icon: "S" },
    tags: ["Technology", "Business", "Discussion"],
  },
  {
    id: 5,
    title: "New infrastructure project announced for Sfax - what do you think?",
    type: "image",
    content: "/placeholder.svg?height=400&width=600",
    author: "sfax_resident",
    time: "1d ago",
    votes: 112,
    comments: 37,
    community: { name: "r/Sfax", icon: "S" },
    tags: ["Infrastructure", "Sfax", "Development"],
  },
]
