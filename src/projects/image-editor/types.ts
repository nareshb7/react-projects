export interface PreviewProps {
  imageData: string;
}

export interface FiltersType {
  brightness: number;
  contrast: number;
  blur: number;
}
export interface UploadProps {
  onUpload: (image: string) => void;
}
