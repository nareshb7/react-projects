export interface ChatUserData {
    name: string;
    roomNo: string;
}
export interface ChatLoginProps {
    onStart: (data: ChatUserData)=> void;
}

export interface MessageType {
    content: string;
    sender: string;
    id: string;
}