import React from "react";
import Dropzone from "react-dropzone";

export const CustomDropZone = ({ onAccept, onReject, siblings }) => {
  return (
    <Dropzone
      accept={{ "image/jpeg": [], "image/png": [] }}
      onDrop={(acceptedFiles, rejectedFiles) => {
        onAccept(acceptedFiles);
        onReject(rejectedFiles);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {siblings}
          </div>
        </section>
      )}
    </Dropzone>
  );
};
