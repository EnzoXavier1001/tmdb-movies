import defaultImage from '../assets/default-image.png'

export function formatImage(path: string) {
  const hasImage = path
    ? `https://image.tmdb.org/t/p/w500/${path}`
    : defaultImage

  return hasImage
}
