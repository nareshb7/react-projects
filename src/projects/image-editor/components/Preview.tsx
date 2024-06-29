import { Button, Input } from "common/Components";
import React, { useRef, useState } from "react";
import { FiltersType, PreviewProps } from "../types";

const Preview = ({ imageData }: PreviewProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [croppedImage, setCroppedImage] = useState("");
  const [isCropping, setIsCropping] = useState(false);
  const [crop, setCrop] = useState({ startX: 0, startY: 0, endX: 0, endY: 0 });
  const [filters, setFilters] = useState<FiltersType>({
    brightness: 1,
    contrast: 2,
    blur: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };
  const handleCrop = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    const img = new Image();
    img.src = imageData;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.filter = `brightness(${filters.brightness}) contrast(${filters.contrast}) blur(${filters.blur}px)`;
      ctx.drawImage(img, 0, 0);
      // ctx.drawImage(img, startX, startY, 800, cropHeight, 0, 0, cropWidth, cropHeight);

      const croppedDataUrl = canvas.toDataURL("image/png");
      setCroppedImage(croppedDataUrl);
    };
  };
  const startCropping = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setCrop({
        startX: e.clientX - rect.left,
        startY: e.clientY - rect.top,
        endX: e.clientX - rect.left,
        endY: e.clientY - rect.top,
      });
      setIsCropping(true);
    }
  };
  const updateCrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isCropping && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setCrop((prevCrop) => ({
        ...prevCrop,
        endX: e.clientX - rect.left,
        endY: e.clientY - rect.top,
      }));
    }
  };
  const finishCropping = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsCropping(false);
    if (imageRef.current) {
      const canvas = canvasRef.current;
      if (!canvas) {
        return null;
      }
      const ctx = canvas.getContext("2d");
      const { startX, startY, endX, endY } = crop;
      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);
      const offsetX = startX < endX ? startX : endX;
      const offsetY = startY < endY ? startY : endY;
      const img = new Image();
      img.src = imageData;
      img.onload = () => {
        const croppedCanvas = document.createElement("canvas");
        const croppedCtx = croppedCanvas.getContext("2d");
        if (!croppedCtx) {
          return;
        }
        croppedCanvas.width = width;
        croppedCanvas.height = height;
        croppedCtx.filter = `brightness(${filters.brightness}) contrast(${filters.contrast}) blur(${filters.blur}px)`;
        croppedCtx.drawImage(
          img,
          offsetX,
          offsetY,
          width,
          height,
          0,
          0,
          width,
          height
        );
        const croppedDataUrl = croppedCanvas.toDataURL("image/png");
        setCroppedImage(croppedDataUrl);
      };
    }
  };
  return (
    <div>
      <h3 className="font-bold m-2 text-lg">Preview : </h3>
      {JSON.stringify(crop, null, 2)}
      {imageData && (
        <div className="">
          <div>
            <div
              className="relative inline-block"
              onMouseDown={startCropping}
              onMouseMove={updateCrop}
              onMouseUp={finishCropping}
            >
              <img
                ref={imageRef}
                src={imageData}
                style={{
                  maxWidth: "100%",
                  filter: `blur(${filters.blur}px) brightness(${filters.brightness}) contrast(${filters.contrast})`,
                }}
              />
              {isCropping && (
                <div
                  style={{
                    position: "absolute",
                    border: "2px dashed #000",
                    left: `${crop.startX}px`,
                    top: `${crop.startY}px`,
                    width: `${Math.abs(crop.endX - crop.startX)}px`,
                    height: `${Math.abs(crop.endY - crop.startY)}px`,
                  }}
                />
              )}
            </div>
            <div>
              <div>
                <label className="font-semibold inline-block min-w-[100px]">
                  Brightness
                </label>
                <Input
                  type="number"
                  name="brightness"
                  max={100}
                  value={filters.brightness}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-semibold inline-block min-w-[100px]">
                  Contrast
                </label>
                <Input
                  type="number"
                  name="contrast"
                  value={filters.contrast}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-semibold inline-block min-w-[100px]">
                  Blur
                </label>
                <Input
                  type="number"
                  name="blur"
                  value={filters.blur}
                  onChange={handleChange}
                />
              </div>
              <Button title="Crop" onClick={handleCrop} />
            </div>
          </div>
          <div>
            <canvas ref={canvasRef} style={{ display: "none" }} />
            {croppedImage && (
              <div className="preview-image">
                <img
                  src={croppedImage}
                  alt="Cropped"
                  style={{ maxWidth: "100%" }}
                />
                <h2 className="font-bold m-2 text-lg">Cropped Image</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
