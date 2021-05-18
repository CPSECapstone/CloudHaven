import React from 'react'
import { FileList, CustomForm, FileViewer } from '../components'
import './VendorAppPage.css'
import pdfTest1 from '../../Utils/test1.pdf'
import pdfTest2 from '../../Utils/test2.pdf'

const isOnVendorHomePage = false

// NOTE: until we figure out how we want to handle accessing pdfs from the backend,
// we have these temporary test pdf files here. This is definitely a temporary measure.
// Right now, we just get an index number from the backend and use that number to choose
// from the two below test files.
const testPdfs = [
    pdfTest1,
    pdfTest2,
];

export default (props) => {
    const files = props.components.filter(component => component.Component === 'file');
    const [currentFileIndex, setCurrentFileIndex] = React.useState(0);
    var currentFile = files[currentFileIndex];

    return (
        <React.Fragment>
            {isOnVendorHomePage && <h1>{props.vendorId}</h1>}
            <div id="FileFeaturePage">
                <FileList
                    files={files}
                    setCurrentFile={setCurrentFileIndex}
                    currentFileId={currentFile.id}
                />
                {currentFile.fileType == 'form' ? (
                    <CustomForm name={currentFile.title} fields={currentFile.Fields} />
                ) : (
                    <FileViewer filePath={testPdfs[currentFile.filePath]} />
                )}
            </div>
        </React.Fragment>
    )
}
