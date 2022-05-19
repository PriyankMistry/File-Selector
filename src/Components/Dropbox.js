import React, { useState } from 'react'
import { Button } from '@mui/material'
import { canOpenDropbox } from 'react-cloud-chooser'
import { Box } from '@mui/system'

const DtopboxBtn = ({ openDropbox, isDropboxLoading }) => (
  <Button variant='contained' color='success' onClick={openDropbox} sx={{margin:"10px"}}>
    Dropbox
    {isDropboxLoading && <span>...</span>}
  </Button>
)
const DropboxOpenBtn = canOpenDropbox(DtopboxBtn)

function DropboxExample(props) {
    const [url, setUrl] = useState("")

    function handleSuccess(files) {
        console.log(files[0].name);
        setUrl(files[0].name)
    }
  return (
    <>
    <DropboxOpenBtn
      appKey="k9e2kdefdvnc0nf"
      linkType='direct' // either direct or preview
      success={handleSuccess}
      cancle={()=> console.log("closed")}
      extensions='.pdf'
      multiselect={false}
    />
    <Box
     sx={{
       margin:"auto",
       width: 550,
       height: 300,
       border: "2px solid black"
     }}
    ><h6>{url}</h6></Box>
    </>
  )
}
export default DropboxExample;