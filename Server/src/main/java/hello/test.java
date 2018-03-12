package hello;


import java.util.Scanner;

public class test {

    public static void main(String[] args) {
        Summator summator = new Summator();
        while (true) {
            Scanner in = new Scanner(System.in);
            System.out.println("Enter some number: ");
            String input = summator.getResult(in.nextLine());
            System.out.println("Your input is: " + input);
        }
    }
}
