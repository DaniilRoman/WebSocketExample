import SockJS from 'sockjs-client';
import { Stomp } from 'stompjs/lib/stomp'

export default class Socket {
    constructor() {
        this.flag = true;
        this.result = "";
        // this.stompClient = Stomp.
        //     over(new SockJS('http://localhost:8000/gs-guide-websocket'));
        this.socket = new SockJS('http://localhost:8000/gs-guide-websocket');
        this.stompClient = null;
        this.connect = this.connect.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        console.log('init');
    }

    sendMessage(value) {
        this.stompClient.send
            ("/app/hello", {}, JSON.stringify({ 'name': value }));
        //alert('A name was submitted: ' + value);//this.state.value
        event.preventDefault();
    }
    connect(th) {
        this.socket.onopen = ()=>{console.log('OPEN::::::')}
        this.stompClient = Stomp.over(this.socket);
        this.stompClient.connect(
            { 'Access-Control-Allow-Origin': '*' },
             (frame) => {
                console.log('Connected: ' + frame);
                //  if (!(frame === 'CONNECTED')) {
                this.subscribe(th);
                //  }
            });

        //console.log('Connected');
        //return this.stompClient;
    }

    subscribe(th) {
        this.stompClient.subscribe('/topic/greetings',
            (greeting) => {
                console.log("111:" + JSON.parse(greeting.body).content);
                //this.result = JSON.parse(greeting.body).content;
                th.setState({result: JSON.parse(greeting.body).content});
            });
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        //setConnected(false);
        console.log("Disconnected");
    }
}