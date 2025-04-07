import React from "react"

interface GuiDownloadButtonProps {
  readonly text?: string
}

export default function GuiDownloadButton({
  text = "Download the OpenBCI GUI",
}: GuiDownloadButtonProps) {
  return (
    <div className="text--center">
      <a
        href="https://openbci.com/downloads"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button button--primary button--lg" type="button">
          {text}
        </button>
      </a>
    </div>
  )
}
