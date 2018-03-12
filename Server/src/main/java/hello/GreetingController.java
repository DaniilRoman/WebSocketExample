package hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {
@Autowired private Summator summator;

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
        //Thread.sleep(1000); // simulated delay
        //return new Greeting("Hello, " + message.getName() + "!");
        return new Greeting(summator.getResult(message.getName()));
    }

//    @MessageMapping("/hello1")
//    @SendTo("/topi/greetings")
//    public Greeting greeting1(HelloMessage message) throws Exception {
//        Thread.sleep(1000); // simulated delay
//        return new Greeting("HOLA, " + message.getName() + "!");
//    }

}