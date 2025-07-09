import BlogHero from "@/components/blogs/blog-hero"
import BlogPostList from "@/components/blogs/blog-post-list"
import BlogCTA from "@/components/blogs/blog-cta"

export default function BlogsPage() {
  return (
    <div className="flex flex-col">
      <BlogHero />
      <BlogPostList />
      <BlogCTA />
    </div>
  )
}
