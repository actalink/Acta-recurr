import React from "react";
import dynamic from 'next/dynamic'

const NoSSRWrapper = (props: React.PropsWithChildren) => (
  <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
  ssr: false
})