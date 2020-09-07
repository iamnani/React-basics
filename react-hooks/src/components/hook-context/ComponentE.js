 import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannelContext} from  '../../App'
 
 function ComponentE() {
     const user = useContext(UserContext)
     const channel = useContext(ChannelContext)
     return (
         <div>
             {JSON.stringify(user)} - {channel}
         </div>
     )
 }
 
 export default ComponentE
 