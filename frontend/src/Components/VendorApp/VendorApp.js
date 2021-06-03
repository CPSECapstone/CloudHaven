import React, { useEffect, useState } from 'react'
import { FileList, CustomForm, SideBar, TopBar} from '../components'
import './VendorApp.css'
import * as api from './ApiVendorApp.js';

const isOnVendorHomePage = false

const VENDOR_ID_TESTSERVICE = "6091d404d59714e9c0f267d9";

// vendorId and components
export default (props) => {
    const [vendorId, setVendorId] = useState(props.vendorId);
    const [vendorComponents, setVendorComponents] = useState([]);
    const [currentFileIndex, setCurrentFileIndex] = useState(0);
    const [updateSideBar, setUpdateSideBar] = useState(false);

    useEffect(() => {
        const generateForms = (vendorId) => {
            // tests for consistency
            if(vendorId == VENDOR_ID_TESTSERVICE){
                api.getConstantVendorForms()
                    .then(res => {
                    setVendorComponents(res.components);
                });
            }
            else {
                api.getRandomVendorForms(currentFileIndex)
                .then(res => {
                    setVendorId(res.vendorId);
                    setVendorComponents(res.components);
                });
            }
        }

        generateForms(vendorId);
        
    }, [vendorId]);

    if (vendorComponents.length === 0) {
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
                        {currentFile.component === 'form' ? (
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
