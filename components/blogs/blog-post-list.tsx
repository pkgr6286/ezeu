import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Enterprise Solutions",
    excerpt: "Explore how AI is transforming businesses and what to expect next.",
    date: "July 1, 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Cybersecurity Trends for 2025",
    excerpt: "Stay ahead of threats with our expert analysis of upcoming cybersecurity challenges.",
    date: "June 25, 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Implementing DevOps: A Step-by-Step Guide",
    excerpt: "Learn best practices for integrating DevOps into your development pipeline.",
    date: "June 18, 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "The Power of RAG: Enhancing LLMs with External Data",
    excerpt: "Dive deep into Retrieval-Augmented Generation and its impact on AI accuracy.",
    date: "June 10, 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "BOT Model: A Strategic Approach to Offshore Expansion",
    excerpt: "Understand how Build-Operate-Transfer can de-risk your global operations.",
    date: "June 3, 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "Corporate Training: Investing in Your Human Capital",
    excerpt: "Discover how tailored training programs boost productivity and retention.",
    date: "May 28, 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogPostList() {
  return (
    <section className="py-16 md:py-28 bg-ezeu-light-gray dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-ezeu-dark dark:text-white">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id} className="group block h-full">
              <Card className="h-full flex flex-col rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="p-6 pb-4 flex-grow">
                  <CardTitle className="text-xl font-semibold text-ezeu-dark dark:text-white mb-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground dark:text-gray-400">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-base text-ezeu-text-dark dark:text-ezeu-text-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
