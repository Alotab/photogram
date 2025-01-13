import React from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

interface IFileUploader {}

const File: React.FunctionComponent<IFileUploader> = () => {
  return (
    <div>
        <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="390b85614f8a7d7edd9e"
        />
    </div>
  );
}

export default File;