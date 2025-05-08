"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowBigDown, ArrowBigUp, BookMarked, MessageSquare, MoreHorizontal, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Comment {
  id: string | number;
  author: string;
  time: string;
  content: string;
  votes: number;
  replies?: Comment[];
}

interface Post {
  votes: number;
  community: {
    icon: React.ReactNode;
    name: string;
  };
  author: string;
  time: string;
  title: string;
  type: "text" | "image";
  content?: string;
  tags?: string[];
  comments: number;
  commentsList?: Comment[];
}

export default function PostDetail({ post }: { post: Post }) {
  const [votes, setVotes] = useState(post.votes)
  const [userVote, setUserVote] = useState<number | null>(null)
  const [commentText, setCommentText] = useState("")

  const handleVote = (direction: number) => {
    if (userVote === direction) {
      setVotes(votes - direction)
      setUserVote(null)
    } else {
      setVotes(votes - (userVote || 0) + direction)
      setUserVote(direction)
    }
  }

  return (
    <div className="space-y-4">
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

            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

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

      {/* Add Comment */}
      <div className="rounded-lg border bg-card shadow-sm p-4">
        <h4 className="text-sm font-medium mb-2">
          Comment as <span className="text-red-600">username</span>
        </h4>
        <textarea
          className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-2"
          placeholder="What are your thoughts?"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end">
          <Button className="bg-red-600 hover:bg-red-700">Comment</Button>
        </div>
      </div>

      {/* Comments */}
      <div className="space-y-4">
        <h4 className="font-medium">Comments</h4>
        {post.commentsList && post.commentsList.map((comment) => <CommentCard key={comment.id} comment={comment} />)}
      </div>
    </div>
  )
}

function CommentCard({ comment, depth = 0 }: { comment: Comment; depth?: number }) {
  const [votes, setVotes] = useState(comment.votes)
  const [userVote, setUserVote] = useState<number | null>(null)
  const [showReply, setShowReply] = useState(false)
  const [replyText, setReplyText] = useState("")

  const handleVote = (direction: number) => {
    if (userVote === direction) {
      setVotes(votes - direction)
      setUserVote(null)
    } else {
      setVotes(votes - (userVote || 0) + direction)
      setUserVote(direction)
    }
  }

  return (
    <div className={`pl-${depth * 4} border-l-2 border-muted ml-${depth > 0 ? 4 : 0}`}>
      <div className="p-3 rounded-md bg-muted/30">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/placeholder.svg?height=24&width=24" alt={comment.author} />
            <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <Link href="#" className="text-xs font-medium hover:underline">
            u/{comment.author}
          </Link>
          <span className="text-xs text-muted-foreground">{comment.time}</span>
        </div>

        <p className="text-sm mb-2">{comment.content}</p>

        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className={`h-6 w-6 ${userVote === 1 ? "text-red-600" : ""}`}
              onClick={() => handleVote(1)}
            >
              <ArrowBigUp className="h-3 w-3" />
              <span className="sr-only">Upvote</span>
            </Button>
            <span
              className={`text-xs font-medium ${
                userVote === 1 ? "text-red-600" : userVote === -1 ? "text-blue-600" : ""
              }`}
            >
              {votes}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className={`h-6 w-6 ${userVote === -1 ? "text-blue-600" : ""}`}
              onClick={() => handleVote(-1)}
            >
              <ArrowBigDown className="h-3 w-3" />
              <span className="sr-only">Downvote</span>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={() => setShowReply(!showReply)}>
            Reply
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs">
            Share
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs">
            Report
          </Button>
        </div>

        {showReply && (
          <div className="mt-2">
            <textarea
              className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-2"
              placeholder="What are your thoughts?"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowReply(false)}>
                Cancel
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Reply
              </Button>
            </div>
          </div>
        )}
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-2 space-y-2">
          {comment.replies.map((reply) => (
            <CommentCard key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}
