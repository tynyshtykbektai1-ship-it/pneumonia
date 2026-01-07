"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { Upload, ImageIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface UploadZoneProps {
  onImageSelect: (file: File) => void
  selectedImage: string | null
  onClear: () => void
  disabled?: boolean
}

export function UploadZone({ onImageSelect, selectedImage, onClear, disabled }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      const files = e.dataTransfer.files
      if (files && files[0]) {
        onImageSelect(files[0])
      }
    },
    [onImageSelect],
  )

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0])
    }
  }

  if (selectedImage) {
    return (
      <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-card/50 backdrop-blur-sm">
        <img
          src={selectedImage || "/placeholder.svg"}
          alt="Selected X-ray"
          className="w-full h-64 sm:h-80 object-contain bg-foreground/5"
        />
        <Button
          variant="destructive"
          size="icon"
          className="absolute top-3 right-3 rounded-full shadow-lg"
          onClick={onClear}
          disabled={disabled}
        >
          <X className="w-4 h-4" />
        </Button>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/80 to-transparent p-4">
          <p className="text-sm text-foreground font-medium">X-ray image loaded</p>
          <p className="text-xs text-muted-foreground">Рентген суреті жүктелді</p>
        </div>
      </div>
    )
  }

  return (
    <div
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`
        relative rounded-2xl border-2 border-dashed p-8 sm:p-12 
        transition-all duration-300 cursor-pointer
        bg-card/30 backdrop-blur-sm
        ${
          isDragging
            ? "border-primary bg-primary/5 scale-[1.02]"
            : "border-border hover:border-primary/50 hover:bg-card/50"
        }
      `}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        disabled={disabled}
      />

      <div className="flex flex-col items-center text-center">
        {/* Icon with animation */}
        <div
          className={`
          relative mb-6 p-6 rounded-full 
          bg-gradient-to-br from-primary/10 to-accent/10
          ${isDragging ? "animate-bounce" : "animate-float"}
        `}
        >
          <div
            className="absolute inset-0 rounded-full bg-primary/20 animate-ping"
            style={{ animationDuration: "3s" }}
          />
          <Upload className="w-10 h-10 text-primary relative z-10" />
        </div>

        {/* Lung x-ray icon */}
        <div className="mb-4 p-3 rounded-xl bg-muted/50">
          <ImageIcon className="w-6 h-6 text-muted-foreground" />
        </div>

        {/* Text */}
        <h3 className="text-lg font-semibold text-foreground mb-1">Upload Chest X-ray Image</h3>
        <p className="text-base text-primary mb-3">Өкпенің рентген суретін жүктеңіз</p>

        <p className="text-sm text-muted-foreground max-w-xs">
          Drag and drop your chest X-ray image here, or click to browse
        </p>
        <p className="text-xs text-muted-foreground mt-1">Суретті осында сүйреп апарыңыз немесе таңдау үшін басыңыз</p>

        {/* Supported formats */}
        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-1 rounded-full bg-muted">PNG</span>
          <span className="px-2 py-1 rounded-full bg-muted">JPG</span>
          <span className="px-2 py-1 rounded-full bg-muted">DICOM</span>
        </div>
      </div>
    </div>
  )
}
