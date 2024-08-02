import React, { useEffect, useRef } from 'react';
 
 const CKEditor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
      if (window.ClassicEditor && editorRef.current) {
        window.ClassicEditor
          .create(editorRef.current)
          .then(editor => {
            console.log('Editor was initialized', editor);
            editor.model.document.on('change:data', () => {
              console.log(editor.getData()); // Handle CKEditor data
            });
          })
          .catch(error => {
            console.error('There was a problem initializing the editor.', error);
          });
      }
  
      return () => {
        if (window.ClassicEditor && window.ClassicEditor.instances) {
          window.ClassicEditor.instances.forEach(editor => editor.destroy());
        }
      };
    }, []);
  
    return <div ref={editorRef}></div>;
 }
 
 export default CKEditor
 