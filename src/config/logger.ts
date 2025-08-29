import { SERVER } from "../app"


export const logMsg = (msg:string)=>{
  SERVER.log.info(msg)
}
