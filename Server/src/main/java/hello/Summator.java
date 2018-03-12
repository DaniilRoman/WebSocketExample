package hello;


import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Summator implements Sum{
    @Override
    public String getResult(String string) {
        try {
            ArrayList<Integer> numbers = new ArrayList<Integer>();
            StringBuilder temp = new StringBuilder();
            for (int i = 0; i < string.length(); i++) {
                if (string.charAt(i) <= '9' && string.charAt(i) >= '0') {
                    temp.append(string.charAt(i));
                    if(string.length()==1){return temp.toString();}
                } else if (string.charAt(i) == '+') {
                    numbers.add(Integer.parseInt(temp.toString()));
                    temp.setLength(0);
                }
            }
            if(string.charAt(string.length()-1)!='+') {
                numbers.add(Integer.parseInt(temp.toString()));
            }
            int result = 0;
            for (Integer i : numbers) {
                result += i;
            }
            return String.valueOf(result);
        } catch (Exception ex){
            return "";//ex.printStackTrace();
        }
        //return "";
    }
}
