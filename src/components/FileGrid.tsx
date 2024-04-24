import { Box, Grid } from "@mui/material"
import File from "./File"
import { FileTypeProps } from "../types/file.types"
export default function FileGrid({ files }: FileTypeProps) {
  return (
    <Grid container spacing={2}>
      {
        files.map((file: any, idx: number) => {
          return (
            <Grid item>
              <File name={file.name} isDir={file.isDir} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}