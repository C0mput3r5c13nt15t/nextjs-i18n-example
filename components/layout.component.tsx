import ToolbarComponent from "./toolbar.component";
import React from "react";

export default function LayoutComponent({children}: {children: React.ReactNode}) {
  return (
    <>
      <ToolbarComponent />
      <main>{children}</main>
      {/*<FooterComponent />*/}
    </>
  )
}