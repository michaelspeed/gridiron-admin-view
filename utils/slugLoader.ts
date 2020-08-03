import slugify from 'slugify'
import uniqid from 'uniqid'

export function SlugLoader(text: string) {
    const thisSlug = slugify(text, {
        lower: true,
        strict: true,
    }) + '-' + uniqid()
    return thisSlug
}
