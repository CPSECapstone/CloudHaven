import React from 'react'
import './FileViewer.css'
import { PDFObject } from 'react-pdfobject'

export default ({ filePath }) => {
    return (
        <div id="FileViewer">
            <PDFObject url={filePath} height="100%" />
        </div>
    )
}
