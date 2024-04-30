// import { Box, Grid } from "@mui/material"
import File from "./File"
import { FileTypeProps } from "../types/file.types"
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(96px, 1fr));
`;
export default function FileGrid({ files }: FileTypeProps) {
  return (
    <GridContainer>
      {
        files?.map((file: any, idx: number) => {
          return (
              <File key={file.id} name={file.name} isDir={file.isDir} id={file.id} />
          )
        })
      }
    </GridContainer>
  )
}