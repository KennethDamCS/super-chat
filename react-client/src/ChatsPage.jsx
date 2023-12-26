// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic(
    //     'c69562f0-5f8b-4061-9540-aa7f78f9fcb3',
    //     props.user.username,
    //     props.user.secret
    //     );


    return ( 
        <div style={{height: '100vh'}}>
            {/* <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/> */}
            <PrettyChatWindow 
                projectId='c69562f0-5f8b-4061-9540-aa7f78f9fcb3'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            
            />
        </div>
    )
}

export default ChatsPage;