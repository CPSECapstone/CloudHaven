import React from 'react'
import './FileList.css'

export default ({ files, setCurrentFile, currentFileIndex }) => {
    var counter = 0;
    return (
        <ul id="FileList">
            <h2 id="FileListTitle">File List</h2>
            {files.map((file) => {
                const { title } = file;
                const item_id = counter++;
                return (
                    <FileItem
                        itemId={item_id}
                        title={title}
                        onClick={() => setCurrentFile(item_id)}
                        isSelected={item_id == currentFileIndex}
                    />
                )
            })}
        </ul>
    )
}

const FileItem = (props) => {
    const {
        itemId,
        title,
        onClick,
        isSelected,
    } = props
    return (
        <li key={itemId}>
            <div className="ItemDivider" />
            <button
                className={isSelected ? "FileItem SelectedItem" : "FileItem"}
                onClick={onClick}
            >
                <h3 className="ItemTitle">{title}</h3>
            </button>
        </li>
    )
}
