import React, { useEffect, useState } from 'react'
import { FileList, CustomForm, FileViewer, SideBar, TopBar} from '../components'
import './VendorApp.css'
import * as api from './ApiVendorApp.js';

const isOnVendorHomePage = false

// vendorId and components
export default (props) => {

    const [vendorId, setVendorId] = useState("");
    const [vendorComponents, setVendorComponents] = useState([]);
    const [currentFileIndex, setCurrentFileIndex] = useState(0);
    const [updateSideBar, setUpdateSideBar] = useState(false);

    useEffect(() => {
        api.getConstantVendorForms()
            .then(res => {
            setVendorId(res.vendorId);
            setVendorComponents(res.components);
        });
    }, []);

    if (vendorComponents.length == 0) {
        return null;
    }

    var currentFile = vendorComponents[currentFileIndex];

    return (
        <div>
            <div id="HomePage">
            <SideBar updateSideBar={updateSideBar} setUpdateSideBar={setUpdateSideBar}/>
            <div id="PageFrame">
                <TopBar />
                <div id="MainContent">
                <React.Fragment>
                    {isOnVendorHomePage && <h1>{vendorId}</h1>}
                    <div id="FileFeaturePage">
                        <FileList
                            files={vendorComponents}
                            setCurrentFile={setCurrentFileIndex}
                            currentFileIndex={currentFileIndex}
                        />
                        {currentFile.component == 'form' ? (
                            <CustomForm name={currentFile.title} fields={currentFile.fields} />
                        ) : <h1>No Information</h1> }
                    </div>
                </React.Fragment>
                </div>
            </div>
            </div>
        </div>

        
    );
}
