import React from 'react'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'

import { canOpenDropbox, canOpenOneDrive, openDropbox } from 'react-cloud-chooser'

const OneDriveBtn = ({ openOneDrive, isOneDriveLoading }) => (
  <Button variant="contained" color="success" onClick={openOneDrive} sx={{margin:"10px"}}>
    OneDrive
    {isOneDriveLoading && <span>...</span>}
  </Button>
)
const OneDriveOpenBtn = canOpenOneDrive(OneDriveBtn)

function OneDriveExample(props) {

  return (
    <>
    <OneDriveOpenBtn
      clientId='ea1fad93-1b67-4d99-bf92-2b9aa4e9a6ab'
      action="download"
      multiselect={false}
      advanced={".pdf"}
      success={console.log}
      cancel={() => console.log('cancel pressed')}
    />
    </>
  )
}
export default OneDriveExample;