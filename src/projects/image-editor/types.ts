export interface PreviewProps {
  imageData: string;
}

export interface FiltersType {
  brightness: number;
  contrast: number;
  blur: number;
  saturation: number;
  opactiy: number;
  grayscale: number;
  hueRotate:number;
}
export interface UploadProps {
  onUpload: (image: string) => void;
}
