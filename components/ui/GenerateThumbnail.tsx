import React from 'react'
import { Button } from './button'

const GenerateThumbnail = () => {
  return (
    <div className="generate_thumbnail">
      <Button type="button" variant="plain" className="bg-black-6">
        Use AI to generate thumbnail
      </Button>
    </div>
  )
}

export default GenerateThumbnail