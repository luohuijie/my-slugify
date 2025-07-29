import { describe, it, expect } from 'vitest'
import { slugify } from '../src/index'

describe('slugify', () => {
  it('should handle English', () => {
    expect(slugify('Hello World!')).toBe('Hello-World')
  })

  it('should handle Arabic', () => {
    expect(slugify('مرحبا بالعالم')).toBe('مرحبا-بالعالم')
  })

  it('should handle Chinese', () => {
    expect(slugify('你好 世界')).toBe('你好-世界')
  })
})
