export interface IGallery {
  alt_description: string;
  urls: {
    full: string,
    raw: string,
    regular: string,
    small: string,
    small_s3: string,
    thumb: string,
  },
  user: {
    first_name: string
  }
  width: number,
  height: number,
}