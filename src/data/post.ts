import { type CollectionEntry, getCollection } from 'astro:content'

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<'post'>[]> {
  return await getCollection('post', ({ data }) => {
    if (import.meta.env.DEV) {
      return true
    }
    return !data.draft && data.publishDate < new Date()
  })
}

/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllTags(posts: CollectionEntry<'post'>[]) {
  return posts.flatMap((post) => [...post.data.tags])
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTags(posts: CollectionEntry<'post'>[]) {
  return [...new Set(getAllTags(posts))]
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTagsWithCount(
  posts: CollectionEntry<'post'>[]
): [string, number][] {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
      new Map<string, number>()
    ),
  ].sort((a, b) => b[1] - a[1])
}
